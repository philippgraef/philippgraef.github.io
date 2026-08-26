import { copyFile, mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const dist = resolve("dist");
const html = resolve(dist, "index.html");

for (const route of ["impressum", "datenschutz"]) {
  const routeDirectory = resolve(dist, route);
  await mkdir(routeDirectory, { recursive: true });
  await copyFile(html, resolve(routeDirectory, "index.html"));
}

await copyFile(html, resolve(dist, "404.html"));
await writeFile(resolve(dist, ".nojekyll"), "", "utf8");
