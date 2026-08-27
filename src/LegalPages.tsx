import { useEffect, type ReactNode } from "react";

type LegalPageKind = "impressum" | "datenschutz";

const ExternalArrow = () => (
  <svg
    aria-hidden="true"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M7 17 17 7M8 7h9v9"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  </svg>
);

const ExternalLink = ({
  href,
  children
}: {
  href: string;
  children: ReactNode;
}) => (
  <a href={href} target="_blank" rel="noreferrer">
    {children}
    <ExternalArrow />
  </a>
);

const Impressum = () => (
  <>
    <section className="legal-hero">
      <p className="eyebrow">
        <span />
        Rechtliche Angaben
      </p>
      <h1>Impressum</h1>
      <p>
        Angaben gemäß § 5 Digitale-Dienste-Gesetz und § 18
        Medienstaatsvertrag.
      </p>
    </section>

    <div className="legal-grid">
      <section className="legal-card legal-card-accent">
        <span className="legal-number">01</span>
        <p className="legal-kicker">Diensteanbieter</p>
        <h2>Dr. med. Philipp Graef, Ass. iur., LL.M.</h2>
        <address>
          Holzbronner Str. 55
          <br />
          75365 Calw
          <br />
          Deutschland
        </address>
        <div className="legal-contact-lines">
          <a href="mailto:graef.philipp@googlemail.com">
            graef.philipp@googlemail.com
          </a>
          <a href="tel:+4917661982662">+49 176 61982662</a>
        </div>
      </section>

      <section className="legal-card">
        <span className="legal-number">02</span>
        <p className="legal-kicker">Verantwortung</p>
        <h2>Inhaltlich verantwortlich</h2>
        <p>
          Dr. med. Philipp Graef, Anschrift wie vorstehend. Dies gilt auch für
          journalistisch-redaktionelle Inhalte im Sinne des § 18 Abs. 2 MStV,
          soweit die Vorschrift auf einzelne Inhalte dieses Angebots Anwendung
          findet.
        </p>
      </section>

      <section className="legal-card legal-card-wide">
        <span className="legal-number">03</span>
        <p className="legal-kicker">Ärztliche Berufsangaben</p>
        <h2>Berufsbezeichnung und Kammern</h2>
        <p>
          Berufsbezeichnung: Arzt. Die Approbation und Berufsbezeichnung wurden
          in der Bundesrepublik Deutschland verliehen.
        </p>
        <div className="legal-columns">
          <div>
            <h3>Baden-Württemberg · Nordbaden</h3>
            <p>
              Landesärztekammer Baden-Württemberg
              <br />
              Jahnstraße 40 · 70597 Stuttgart
            </p>
            <p>
              Zuständige Bezirksärztekammer: Bezirksärztekammer Nordbaden
              <br />
              Zimmerstraße 4 · 76137 Karlsruhe
            </p>
            <ExternalLink href="https://www.aerztekammer-bw.de/baek-nb">
              Bezirksärztekammer Nordbaden
            </ExternalLink>
          </div>
          <div>
            <h3>Niedersachsen</h3>
            <p>
              Ärztekammer Niedersachsen
              <br />
              Berliner Allee 20 · 30175 Hannover
            </p>
            <ExternalLink href="https://www.aekn.de/">
              Ärztekammer Niedersachsen
            </ExternalLink>
          </div>
        </div>
        <p className="legal-muted">
          Die konkrete kammerrechtliche Zuständigkeit richtet sich nach
          Tätigkeitsort und Mitgliedschaft.
        </p>
      </section>

      <section className="legal-card legal-card-wide">
        <span className="legal-number">04</span>
        <p className="legal-kicker">Berufsrecht</p>
        <h2>Maßgebliche ärztliche Regelungen</h2>
        <div className="legal-link-list">
          <ExternalLink href="https://www.gesetze-im-internet.de/b_o/BJNR018570961.html">
            Bundesärzteordnung
          </ExternalLink>
          <ExternalLink href="https://www.gesetze-im-internet.de/_appro_2002/">
            Approbationsordnung für Ärzte
          </ExternalLink>
          <ExternalLink href="https://www.aerztekammer-bw.de/kammerrecht">
            Heilberufe-Kammergesetz und Kammerrecht Baden-Württemberg
          </ExternalLink>
          <ExternalLink href="https://files.aerztekammer-bw.de/c73ea88bf1eb2331/3d1d98022e43/Berufsordnung.pdf">
            Berufsordnung der Landesärztekammer Baden-Württemberg
          </ExternalLink>
          <ExternalLink href="https://voris.wolterskluwer-online.de/browse/document/5f7dded9-eb8e-3f5f-91d0-904ca12742bd">
            Niedersächsisches Kammergesetz für die Heilberufe
          </ExternalLink>
          <ExternalLink href="https://www.aekn.de/fileadmin/inhalte/pdf/arzt-und-recht/berufsrecht-niedersachsen/BO_komplett_16052022.pdf">
            Berufsordnung der Ärztekammer Niedersachsen
          </ExternalLink>
        </div>
      </section>

      <section className="legal-card">
        <span className="legal-number">05</span>
        <p className="legal-kicker">Juristische Qualifikation</p>
        <h2>Ass. iur. · Volljurist</h2>
        <p>
          Die Bezeichnungen Ass. iur., Volljurist und Diplom-Jurist
          dokumentieren juristische Qualifikationen. Dieses Angebot bezeichnet
          den Diensteanbieter nicht als Rechtsanwalt und bietet keine
          anwaltliche Tätigkeit an. Die BRAO und BORA werden deshalb nicht als
          Berufsordnungen dieses Internetangebots ausgewiesen.
        </p>
      </section>

      <section className="legal-card">
        <span className="legal-number">06</span>
        <p className="legal-kicker">Hinweis</p>
        <h2>Keine Einzelfallberatung</h2>
        <p>
          Die Inhalte dieser Website dienen der allgemeinen Information und
          ersetzen weder eine medizinische Untersuchung oder Behandlung noch
          eine individuelle rechtliche Beratung. Für Inhalte externer
          Internetseiten sind deren jeweilige Anbieter verantwortlich.
        </p>
      </section>
    </div>
  </>
);

const Datenschutz = ({ isGitHubPages }: { isGitHubPages: boolean }) => (
  <>
    <section className="legal-hero">
      <p className="eyebrow">
        <span />
        Transparenz
      </p>
      <h1>Datenschutz</h1>
      <p>
        Informationen nach Art. 13 und 14 Datenschutz-Grundverordnung über die
        Verarbeitung personenbezogener Daten auf dieser Website.
      </p>
    </section>

    <div className="legal-grid">
      <section className="legal-card legal-card-accent">
        <span className="legal-number">01</span>
        <p className="legal-kicker">Verantwortlicher</p>
        <h2>Dr. med. Philipp Graef, Ass. iur., LL.M.</h2>
        <address>
          Holzbronner Str. 55
          <br />
          75365 Calw · Deutschland
        </address>
        <div className="legal-contact-lines">
          <a href="mailto:graef.philipp@googlemail.com">
            graef.philipp@googlemail.com
          </a>
          <a href="tel:+4917661982662">+49 176 61982662</a>
        </div>
      </section>

      <section className="legal-card">
        <span className="legal-number">02</span>
        <p className="legal-kicker">Grundsatz</p>
        <h2>Datenminimierung</h2>
        <p>
          Die Website enthält kein eigenes Kontaktformular, keine
          Analysewerkzeuge, keine Werbetracker und keine eingebetteten
          Social-Media-Player. Personenbezogene Daten werden nur verarbeitet,
          soweit dies für die technische Bereitstellung, den Zugriffsschutz
          oder die Kommunikation erforderlich ist.
        </p>
      </section>

      <section className="legal-card legal-card-wide">
        <span className="legal-number">03</span>
        <p className="legal-kicker">Hosting</p>
        <h2>{isGitHubPages ? "GitHub Pages" : "ChatGPT Sites"}</h2>
        {isGitHubPages ? (
          <p>
            Diese Website wird über GitHub Pages bereitgestellt. Für Nutzer im
            Europäischen Wirtschaftsraum ist GitHub B.V., Prins Bernhardplein
            200, 1097 JB Amsterdam, Niederlande, ein Ansprechpartner des
            Plattformdienstes; GitHub, Inc. hat seinen Sitz in 88 Colin P.
            Kelly Jr. Street, San Francisco, CA 94107, USA. Beim Abruf einer
            GitHub-Pages-Website wird die IP-Adresse nach Angaben von GitHub
            unabhängig von einer Anmeldung zu Sicherheitszwecken protokolliert
            und gespeichert. Darüber hinaus können Datum und Uhrzeit,
            aufgerufene Adresse, Referrer sowie Geräte- und Browserdaten
            verarbeitet werden.
          </p>
        ) : (
          <p>
            Diese Website wird über ChatGPT Sites bereitgestellt. OpenAI Ireland
            Limited, 1st Floor, The Liffey Trust Centre, 117–126 Sheriff Street
            Upper, Dublin 1, D01 YC43, Irland, verarbeitet dabei Hosting-Daten im
            Auftrag des Verantwortlichen. Hierzu können insbesondere IP-Adresse,
            Datum und Uhrzeit des Abrufs, aufgerufene Adresse, Geräte- und
            Browserinformationen sowie Protokoll- und Nutzungsdaten gehören.
          </p>
        )}
        <p>
          Zweck ist die sichere, stabile und fehlerfreie Auslieferung der
          Website sowie die Abwehr missbräuchlicher Zugriffe. Rechtsgrundlage
          ist Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt im
          sicheren und funktionsfähigen Betrieb dieses Internetangebots.
        </p>
        <div className="legal-link-list">
          {isGitHubPages ? (
            <>
              <ExternalLink href="https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection">
                Datenverarbeitung bei GitHub Pages
              </ExternalLink>
              <ExternalLink href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">
                Datenschutzerklärung von GitHub
              </ExternalLink>
              <ExternalLink href="https://docs.github.com/en/site-policy/privacy-policies/github-subprocessors">
                Unterauftragsverarbeiter von GitHub
              </ExternalLink>
            </>
          ) : (
            <>
              <ExternalLink href="https://openai.com/policies/chatgpt-sites-data-processing-addendum/">
                Auftragsverarbeitung für ChatGPT Sites
              </ExternalLink>
              <ExternalLink href="https://openai.com/policies/chatgpt-sites-terms/">
                Nutzungsbedingungen für ChatGPT Sites
              </ExternalLink>
              <ExternalLink href="https://openai.com/policies/sub-processor-list/">
                Unterauftragsverarbeiter
              </ExternalLink>
            </>
          )}
        </div>
      </section>

      <section className="legal-card">
        <span className="legal-number">04</span>
        <p className="legal-kicker">
          {isGitHubPages ? "Öffentlicher Zugriff" : "Zugriffsschutz"}
        </p>
        <h2>{isGitHubPages ? "Keine Anmeldung" : "Sign in with ChatGPT"}</h2>
        {isGitHubPages ? (
          <p>
            Die über GitHub Pages bereitgestellte Website ist öffentlich
            erreichbar. Sie führt kein eigenes Nutzerkonto, verlangt keine
            Anmeldung und speichert keine eigenen Login-Profile.
          </p>
        ) : (
          <p>
            Solange die Website zugriffsbeschränkt ist, verarbeitet die
            Hosting-Plattform Authentifizierungsdaten, um die Zugriffsberechtigung
            zu prüfen. Die Website selbst führt kein eigenes Nutzerkonto und
            speichert keine eigenen Login-Profile. Rechtsgrundlage ist Art. 6
            Abs. 1 lit. f DSGVO; das berechtigte Interesse liegt im Schutz
            nichtöffentlich bereitgestellter Inhalte.
          </p>
        )}
      </section>

      <section className="legal-card">
        <span className="legal-number">05</span>
        <p className="legal-kicker">Kontakt</p>
        <h2>E-Mail und Telefon</h2>
        <p>
          Bei einer Kontaktaufnahme werden die übermittelten Angaben zur
          Bearbeitung der Anfrage verarbeitet. Rechtsgrundlage ist Art. 6 Abs.
          1 lit. b DSGVO bei vorvertraglicher Kommunikation, im Übrigen Art. 6
          Abs. 1 lit. f DSGVO. Die Daten werden gelöscht, sobald die Anfrage
          abschließend erledigt ist und keine gesetzlichen
          Aufbewahrungspflichten entgegenstehen.
        </p>
      </section>

      <section className="legal-card">
        <span className="legal-number">06</span>
        <p className="legal-kicker">Endgerät</p>
        <h2>Cookies und lokale Speicherung</h2>
        <p>
          Der Website-Code setzt keine Analyse- oder Marketing-Cookies und
          verwendet weder Local Storage noch Session Storage. Die
          Hosting-Plattform kann technisch erforderliche Cookies oder
          vergleichbare Informationen für Sicherheit und Authentifizierung
          einsetzen. Soweit diese unbedingt erforderlich sind, erfolgt die
          Speicherung auf Grundlage von § 25 Abs. 2 Nr. 2 TDDDG.
        </p>
        <ExternalLink
          href={
            isGitHubPages
              ? "https://docs.github.com/en/site-policy/privacy-policies/github-cookies"
              : "https://openai.com/policies/cookie-policy/"
          }
        >
          Cookie-Hinweise von {isGitHubPages ? "GitHub" : "OpenAI"}
        </ExternalLink>
      </section>

      <section className="legal-card">
        <span className="legal-number">07</span>
        <p className="legal-kicker">Externe Ziele</p>
        <h2>Verlinkte Websites</h2>
        <p>
          Spotify, Verlage, Fachportale und Save Order Safe werden ausschließlich
          verlinkt und nicht in die Website eingebettet. Erst beim Aufruf eines
          solchen Links verarbeitet der jeweilige externe Anbieter Daten nach
          seinen eigenen Datenschutzbestimmungen.
        </p>
      </section>

      <section className="legal-card">
        <span className="legal-number">08</span>
        <p className="legal-kicker">Drittstaaten</p>
        <h2>Internationale Übermittlungen</h2>
        <p>
          {isGitHubPages
            ? "GitHub kann Daten auch in den USA und weiteren Staaten verarbeiten oder durch Unterauftragsverarbeiter verarbeiten lassen. GitHub beschreibt internationale Übermittlungen und die hierfür eingesetzten Garantien in seiner Datenschutzerklärung."
            : "OpenAI kann Unterauftragsverarbeiter auch außerhalb des Europäischen Wirtschaftsraums einsetzen. Nach dem ChatGPT-Sites-Vertrag erfolgen Übermittlungen von EWR-Daten auf Grundlage eines Angemessenheitsbeschlusses oder der Standardvertragsklauseln der Europäischen Kommission."}
        </p>
      </section>

      <section className="legal-card">
        <span className="legal-number">09</span>
        <p className="legal-kicker">Speicherdauer</p>
        <h2>Löschung und Kriterien</h2>
        <p>
          Daten werden nur so lange verarbeitet, wie dies für den jeweiligen
          Zweck erforderlich ist. Technische Hosting-Daten richten sich nach
          den Sicherheits- und Löschfristen der Plattform.
          {isGitHubPages
            ? " GitHub beschreibt die Speicherdauer nach den jeweiligen Verarbeitungszwecken, rechtlichen Pflichten sowie Sicherheits- und Missbrauchsschutzinteressen."
            : " Nach Beendigung der Hosting-Leistung werden Hosted Data nach Maßgabe des ChatGPT-Sites-Vertrags gelöscht oder zurückgegeben, soweit keine gesetzlichen Pflichten eine weitere Speicherung verlangen."}
        </p>
      </section>

      <section className="legal-card legal-card-wide">
        <span className="legal-number">10</span>
        <p className="legal-kicker">Ihre Rechte</p>
        <h2>Auskunft, Berichtigung und Widerspruch</h2>
        <p>
          Betroffene Personen haben nach Maßgabe der gesetzlichen
          Voraussetzungen insbesondere Rechte auf Auskunft, Berichtigung,
          Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und
          Widerspruch. Eine erteilte Einwilligung kann jederzeit mit Wirkung für
          die Zukunft widerrufen werden. Es findet keine ausschließlich
          automatisierte Entscheidungsfindung einschließlich Profiling statt.
        </p>
        <div className="legal-columns">
          <div>
            <h3>Kontakt für Datenschutzanfragen</h3>
            <a href="mailto:graef.philipp@googlemail.com">
              graef.philipp@googlemail.com
            </a>
          </div>
          <div>
            <h3>Beschwerderecht</h3>
            <p>
              Landesbeauftragter für den Datenschutz und die
              Informationsfreiheit Baden-Württemberg
              <br />
              Heilbronner Straße 35 · 70191 Stuttgart
            </p>
            <ExternalLink href="https://www.baden-wuerttemberg.datenschutz.de/">
              Aufsichtsbehörde
            </ExternalLink>
          </div>
        </div>
      </section>
    </div>
  </>
);

export function LegalPage({ kind }: { kind: LegalPageKind }) {
  const isGitHubPages = window.location.hostname
    .toLowerCase()
    .endsWith(".github.io");

  useEffect(() => {
    const previousTitle = document.title;
    document.title =
      kind === "impressum"
        ? "Impressum · Philipp Graef"
        : "Datenschutz · Philipp Graef";

    return () => {
      document.title = previousTitle;
    };
  }, [kind]);

  return (
    <div className="legal-page" id="top">
      <header className="legal-header">
        <a className="legal-brand" href="/" aria-label="Zur Startseite">
          <span className="brand-mark">PG</span>
          <span>Philipp Graef</span>
        </a>
        <a className="legal-back" href="/">
          Zur Website
          <ExternalArrow />
        </a>
      </header>

      <main className="legal-main">
        {kind === "impressum" ? (
          <Impressum />
        ) : (
          <Datenschutz isGitHubPages={isGitHubPages} />
        )}
      </main>

      <div className="legal-footer">
        <p>Stand: 26. August 2026</p>
        <nav aria-label="Rechtliche Navigation">
          <a href="/impressum">Impressum</a>
          <a href="/datenschutz">Datenschutz</a>
          <a href="/">Startseite</a>
        </nav>
      </div>
    </div>
  );
}
