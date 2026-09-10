const UpArrow = () => (
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
      <path d="M12 20V4m-7 7 7-7 7 7" />
    </svg>
  </span>
);

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <img className="brand-mark" src="/favicon.svg" alt="" />
        <p>
          Dr. med. Ass. iur. Philipp Graef, LL.M. (Medizinrecht)
          <br />
          Arzt · Hochschullehrer · Unternehmer
        </p>
      </div>
      <p className="footer-note">
        Die Inhalte dienen der Information und ersetzen keine medizinische
        oder rechtliche Beratung im Einzelfall.
      </p>
      <div className="footer-links">
        <div className="footer-legal">
          <a href="/impressum/">Impressum</a>
          <a href="/datenschutz/">Datenschutz</a>
          <a href="#top">Nach oben <UpArrow /></a>
        </div>
        <span>
          © {new Date().getFullYear()} Dr. med. Ass. iur. Philipp Graef,
          LL.M. (Medizinrecht)
        </span>
      </div>
    </footer>
  );
}
