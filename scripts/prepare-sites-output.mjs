import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import { extname, resolve } from "node:path";

const root = resolve(".");
const dist = resolve(root, "dist");

const mimeTypes = {
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp"
};

let html = await readFile(resolve(dist, "index.html"), "utf8");

for (const match of [
  ...html.matchAll(/<link rel="stylesheet" crossorigin href="([^"]+)">/g)
]) {
  const css = await readFile(resolve(dist, match[1].replace(/^\//, "")), "utf8");
  html = html.replace(match[0], () => `<style>${css}</style>`);
}

for (const match of [
  ...html.matchAll(
    /<script type="module" crossorigin src="([^"]+)"><\/script>/g
  )
]) {
  const js = await readFile(resolve(dist, match[1].replace(/^\//, "")), "utf8");
  html = html.replace(
    match[0],
    () =>
      `<script type="module">${js.replaceAll("</script", "<\\/script")}</script>`
  );
}

const publicAssets = [
  "/philipp-graef-hd.webp",
  "/save-order-safe-logo.webp",
  "/buch-gebaermuttertransplantation.webp",
  "/die-leisen-abstaende-cover.jpg",
  "/recht-medizinisch-cover.jpg",
  "/editorial/medicine-law.webp",
  "/editorial/knowledge.webp",
  "/editorial/basketball.webp",
  "/editorial/project-impact.webp",
  "/editorial/lecture-stage.webp",
  "/editorial/connection.webp",
  "/og.png",
  "/favicon.svg",
  "/robots.txt"
];

const assets = {};
for (const pathname of publicAssets) {
  const file = resolve(root, "public", pathname.slice(1));
  const body = await readFile(file);
  assets[pathname] = {
    body: body.toString("base64"),
    type: mimeTypes[extname(pathname)]
  };
}

assets["/favicon.ico"] = assets["/favicon.svg"];

const worker = `
const html = ${JSON.stringify(html)};
const assets = ${JSON.stringify(assets)};

function decodeBase64(value) {
  const decoded = atob(value);
  const bytes = new Uint8Array(decoded.length);
  for (let index = 0; index < decoded.length; index += 1) {
    bytes[index] = decoded.charCodeAt(index);
  }
  return bytes;
}

function response(body, request, init) {
  return new Response(request.method === "HEAD" ? null : body, init);
}

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response("Method Not Allowed", {
        status: 405,
        headers: { Allow: "GET, HEAD" }
      });
    }

    const asset = assets[url.pathname];
    if (asset) {
      return response(decodeBase64(asset.body), request, {
        headers: {
          "Cache-Control": "public, max-age=86400",
          "Content-Type": asset.type,
          "X-Content-Type-Options": "nosniff"
        }
      });
    }

    const htmlRoutes = new Set([
      "/",
      "/index.html",
      "/impressum",
      "/impressum/",
      "/datenschutz",
      "/datenschutz/"
    ]);

    if (htmlRoutes.has(url.pathname)) {
      return response(html, request, {
        headers: {
          "Cache-Control": "no-cache",
          "Content-Language": "de",
          "Content-Security-Policy": "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'",
          "Content-Type": "text/html; charset=utf-8",
          "Referrer-Policy": "strict-origin-when-cross-origin",
          "X-Content-Type-Options": "nosniff",
          "X-Frame-Options": "DENY"
        }
      });
    }

    return response("Nicht gefunden", request, {
      status: 404,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "X-Content-Type-Options": "nosniff"
      }
    });
  }
};
`;

await mkdir(resolve(dist, "server"), { recursive: true });
await mkdir(resolve(dist, ".openai"), { recursive: true });
await writeFile(resolve(dist, "index.html"), html, "utf8");
await writeFile(resolve(dist, "server", "index.js"), worker, "utf8");
await copyFile(
  resolve(root, ".openai", "hosting.json"),
  resolve(dist, ".openai", "hosting.json")
);
