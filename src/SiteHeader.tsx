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

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
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
        onClick={() => setMenuOpen(false)}
      >
        {navigation.map(([label, href]) => (
          <a
            href={href}
            aria-current={currentPath === href.replace(/\/+$/, "") ? "page" : undefined}
            key={href}
          >
            {label}
          </a>
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
