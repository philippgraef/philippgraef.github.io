import { useState } from "react";

const DiagonalArrow = () => (
  <span className="arrow" aria-hidden="true">
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      focusable="false"
    >
      <path d="M5 19 19 5M5 5h14v14" />
    </svg>
  </span>
);

const navigation = [
  ["Profil", "/profil/"],
  ["Projekte", "/projekte/"],
  ["Bücher", "/buecher/"],
  ["SOS", "/save-order-safe/"],
  ["Publikationen", "/publikationen/"],
  ["Vita", "/vita/"],
  ["Sport", "/sport/"]
] as const;

const subnavigation: Record<string, readonly (readonly [string, string])[]> = {
  "/profil/": [["Über mich", "/profil/#profil"], ["Weitere Facetten", "/profil/#facetten"]],
  "/projekte/": [["Aktuelle Projekte", "/projekte/#projekte"], ["PG Apps · App-Entwicklung", "/projekte/#apps"]],
  "/buecher/": [["Gesundheit verstehen mit Kajo", "/buecher/#kajo"], ["Die leisen Abstände zwischen uns", "/buecher/#leise-abstaende"], ["Die Gebärmuttertransplantation", "/buecher/#gebaermuttertransplantation"]],
  "/publikationen/": [["Fachpublikationen", "/publikationen/#publikationen"], ["Recht Medizinisch · Podcast", "/publikationen/#podcast"]],
  "/vita/": [["Berufliche Stationen", "/vita/#vita"], ["Ausbildung & Abschlüsse", "/vita/#ausbildung"], ["Vorträge & Impulse", "/vita/#vortraege"]]
};

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";

  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Zur Startseite">
        <img className="brand-mark" src="/favicon.svg" alt="" />
        <span className="brand-name">
          Dr. med. Ass. iur. Philipp Graef, LL.M. (Medizinrecht)
          <small>Medizin × Recht</small>
        </span>
      </a>
      <nav
        className={menuOpen ? "is-open" : ""}
        aria-label="Hauptnavigation"
        onKeyDown={(event) => {
          if (event.key === "Escape") { setOpenCategory(null); setMenuOpen(false); }
        }}
      >
        {navigation.map(([label, href]) => (
          <div className="nav-category" key={href}
            onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setOpenCategory(null); }}>
          <a
            href={href}
            aria-current={currentPath === href.replace(/\/+$/, "") ? "page" : undefined}
            onClick={() => { setMenuOpen(false); setOpenCategory(null); }}
          >
            {label}
          </a>
          {subnavigation[href] && <>
            <button type="button" className="nav-expand"
              aria-label={`${label}: Unterpunkte ${openCategory === href ? "schließen" : "öffnen"}`}
              aria-expanded={openCategory === href} aria-controls={`submenu-${label}`}
              onClick={() => setOpenCategory(openCategory === href ? null : href)}>
              <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="m4 6 4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
            </button>
            <div id={`submenu-${label}`} className="nav-submenu" hidden={openCategory !== href}>
              {subnavigation[href].map(([title, target]) => <a key={target} href={target}
                onClick={() => { setMenuOpen(false); setOpenCategory(null); }}>{title}</a>)}
            </div>
          </>}
          </div>
        ))}
        <a
          className="nav-contact"
          href="/kontakt/"
          aria-current={currentPath === "/kontakt" ? "page" : undefined}
        >
          Kontakt
        </a>
      </nav>
      <a
        className="header-contact"
        href="/kontakt/"
        aria-current={currentPath === "/kontakt" ? "page" : undefined}
      >
        Kontakt
        <DiagonalArrow />
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((current) => !current)}
      >
        <span />
        <span />
      </button>
    </header>
  );
}
