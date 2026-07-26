import Image from "next/image";

const ArrowUpRight = ({ size = 18 }: { size?: number }) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

const ArrowRight = ({ size = 18 }: { size?: number }) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path d="M5 12h14m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

const fields = [
  {
    number: "01",
    title: "Medizinrecht & Ethik",
    text: "Rechtliche Orientierung für klinische Entscheidungen, neue Technologien und sensible Grenzfragen."
  },
  {
    number: "02",
    title: "Klinische Perspektive",
    text: "Ärztliche Erfahrung aus Chirurgie, Patientenversorgung und interprofessioneller Zusammenarbeit."
  },
  {
    number: "03",
    title: "Lehre & Wissenstransfer",
    text: "Komplexe Inhalte präzise, verständlich und anwendungsnah für Gesundheitsberufe vermitteln."
  },
  {
    number: "04",
    title: "Forschung & Publikation",
    text: "Interdisziplinäre Forschung zwischen Transplantationsmedizin, Recht, Ethik und Versorgung."
  }
];

const publications = [
  {
    year: "2025",
    type: "Rettungsmedizin",
    title:
      "ABCDE in Niedersachsen: Fester Bestandteil im Rettungsdienst, aber selten genutzt?",
    source: "RETTUNGSDIENST, 8/2025",
    href: "https://rettungsdienst-archiv.de/artikel?keywords%5B%5D=2494"
  },
  {
    year: "2021",
    type: "Wettbewerbsrecht",
    title:
      "Die Fortwirkungen des Skanska-Urteils: Sind dessen Grundsätze zur Passivlegitimation auf die Aktivlegitimation übertragbar?",
    source: "WRP 2021, S. 880–885",
    href: "https://eur-lex.europa.eu/legal-content/ET/ALL/?uri=CELEX%3A62017CJ0724_RES"
  },
  {
    year: "2020",
    type: "Transplantationsrecht",
    title:
      "Ist die (empfänger-)gerichtete Totenspende in Deutschland zulässig?",
    source: "Recht und Politik im Gesundheitswesen 26 (2020), S. 83–94",
    href: "https://www.bundestag.de/resource/blob/1139140/L-505-Organspende.pdf"
  },
  {
    year: "2019",
    type: "Medizinrecht",
    title: "Rechtliche und ethische Fragen der Gebärmuttertransplantation",
    source: "GesundheitsRecht 18 (2019), S. 551–559",
    href: "https://doi.org/10.9785/gesr-2019-180905"
  }
];

const milestones = [
  {
    period: "seit 2023",
    title: "Hochschullehre",
    place: "Hochschule Fresenius · Fachbereich Gesundheit & Soziales",
    text: "Anatomie, Physiologie und klinische Medizin – mit Schwerpunkten in Neurowissenschaften und KI in der Medizin."
  },
  {
    period: "seit 2022",
    title: "Rechtswissenschaftliche Promotion",
    place: "Universität Leipzig",
    text: "Forschung zur Verfassungsmäßigkeit des § 8 Transplantationsgesetz."
  },
  {
    period: "2020–2022",
    title: "Assistenzarzt für Chirurgie",
    place: "Kliniken Nagold · Universität Tübingen",
    text: "Klinische Tätigkeit in Allgemein-, Viszeral-, Gefäß- und Unfallchirurgie."
  },
  {
    period: "2011–2022",
    title: "Doppelqualifikation Medizin & Recht",
    place: "Universität Tübingen · Dresden International University",
    text: "Dr. med., Diplom-Jurist, Zweites Staatsexamen und LL.M. Medizinrecht."
  }
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Zur Startseite">
          <span className="brand-mark">PG</span>
          <span className="brand-name">Philipp Graef</span>
        </a>
        <nav aria-label="Hauptnavigation">
          <a href="#profil">Profil</a>
          <a href="#publikationen">Publikationen</a>
          <a href="#vita">Vita</a>
        </nav>
        <a className="header-contact" href="#kontakt">
          Kontakt
          <ArrowUpRight size={16} />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">
            <span />
            Medizin · Recht · Lehre
          </p>
          <h1>
            Medizin verstehen.
            <br />
            Recht <em>einordnen.</em>
            <br />
            Wissen vermitteln.
          </h1>
          <p className="hero-intro">
            Dr. med. Philipp Graef, LL.M. verbindet ärztliche Erfahrung mit
            juristischer Präzision – in Lehre, Forschung, Publikation und
            öffentlichem Diskurs.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#profil">
              Profil entdecken
              <ArrowRight />
            </a>
            <a
              className="text-link"
              href="https://open.spotify.com/show/7aowMbc68QlEwd0K4x5OT8"
              target="_blank"
              rel="noreferrer"
            >
              Podcast anhören
              <ArrowUpRight />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="portrait-panel">
            <div className="portrait-accent" aria-hidden="true" />
            <Image
              src="/philipp-graef.jpg"
              alt="Dr. med. Philipp Graef"
              width={281}
              height={354}
              priority
            />
            <div className="portrait-caption">
              <span>Arzt</span>
              <span>Rechtsanwalt</span>
              <span>Hochschullehrer</span>
            </div>
          </div>
          <div className="hero-note">
            <span className="note-index">Fokus</span>
            <p>
              Wo medizinische Entscheidungen rechtliche Verantwortung
              berühren.
            </p>
          </div>
        </div>

        <div className="hero-facts" aria-label="Kurzprofil">
          <div>
            <strong>2</strong>
            <span>Staatsexamina</span>
          </div>
          <div>
            <strong>10+</strong>
            <span>Jahre Lehre</span>
          </div>
          <div>
            <strong>4</strong>
            <span>Fachperspektiven</span>
          </div>
        </div>
      </section>

      <section className="profile section" id="profil">
        <div className="section-label">
          <span>01</span>
          <p>Profil</p>
        </div>
        <div className="profile-lead">
          <p className="kicker">Interdisziplinär aus Überzeugung</p>
          <h2>
            Gute Entscheidungen entstehen, wenn{" "}
            <em>mehrere Perspektiven</em> zusammenkommen.
          </h2>
          <div className="profile-text">
            <p>
              Medizin und Recht sprechen oft unterschiedliche Sprachen. Ich
              arbeite dort, wo beide aufeinandertreffen: bei Verantwortung,
              Selbstbestimmung, Innovation und der Frage, was gute Versorgung
              möglich macht.
            </p>
            <p>
              Mein Ansatz verbindet klinische Realität, juristische Systematik
              und verständliche Kommunikation. Das Ziel: belastbare
              Orientierung für Menschen, Institutionen und den fachlichen
              Diskurs.
            </p>
          </div>
        </div>
        <div className="field-grid">
          {fields.map((field) => (
            <article className="field-card" key={field.number}>
              <span>{field.number}</span>
              <h3>{field.title}</h3>
              <p>{field.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="book section" aria-labelledby="book-title">
        <div className="book-visual">
          <div className="book-shadow" aria-hidden="true" />
          <Image
            src="/buch-gebaermuttertransplantation.webp"
            alt="Buchcover: Die Gebärmuttertransplantation – Medizin, Recht, Ethik"
            width={741}
            height={1050}
          />
        </div>
        <div className="book-copy">
          <p className="eyebrow light">
            <span />
            Monografie · 2024
          </p>
          <h2 id="book-title">
            Die Gebärmutter&shy;transplantation
          </h2>
          <p className="book-subtitle">Medizin – Recht – Ethik</p>
          <p>
            Das erste umfangreiche deutschsprachige Werk zur
            Gebärmuttertransplantation untersucht medizinische Grundlagen,
            rechtliche Zulässigkeit, ethische Dimensionen und gesellschaftliche
            Folgen dieser innovativen Behandlung.
          </p>
          <dl className="book-meta">
            <div>
              <dt>Umfang</dt>
              <dd>306 Seiten</dd>
            </div>
            <div>
              <dt>Reihe</dt>
              <dd>Medizinrecht in Forschung und Praxis · Band 74</dd>
            </div>
            <div>
              <dt>ISBN</dt>
              <dd>978-3-339-13992-4</dd>
            </div>
          </dl>
          <a
            className="button button-light"
            href="https://www.verlagdrkovac.de/978-3-339-13992-4.htm"
            target="_blank"
            rel="noreferrer"
          >
            Zum Verlag
            <ArrowUpRight />
          </a>
        </div>
      </section>

      <section className="publications section" id="publikationen">
        <div className="section-label">
          <span>02</span>
          <p>Publikationen</p>
        </div>
        <div className="section-heading-row">
          <div>
            <p className="kicker">Ausgewählte Arbeiten</p>
            <h2>Forschung, die Grenzen überschreitet.</h2>
          </div>
          <p>
            Beiträge aus Medizinrecht, Transplantationsrecht,
            Wettbewerbsrecht und klinischer Praxis.
          </p>
        </div>
        <div className="publication-list">
          {publications.map((publication) => (
            <a
              className="publication-row"
              href={publication.href}
              target="_blank"
              rel="noreferrer"
              key={publication.title}
            >
              <span className="publication-year">{publication.year}</span>
              <span className="publication-type">{publication.type}</span>
              <span className="publication-main">
                <strong>{publication.title}</strong>
                <small>{publication.source}</small>
              </span>
              <span className="publication-arrow">
                <ArrowUpRight />
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="podcast section" aria-labelledby="podcast-title">
        <div className="podcast-signal" aria-hidden="true">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((bar) => (
            <span key={bar} />
          ))}
        </div>
        <div className="podcast-copy">
          <p className="eyebrow light">
            <span />
            Podcast
          </p>
          <h2 id="podcast-title">Recht Medizinisch</h2>
          <p className="podcast-lead">
            Echte Fälle. Klare Einordnung. Die Grauzonen zwischen Klinikalltag
            und Recht verständlich erklärt.
          </p>
          <p className="podcast-hosts">
            Mit Dr. med. Philipp Graef und Florian Schlepple
          </p>
          <a
            className="button button-light"
            href="https://open.spotify.com/show/7aowMbc68QlEwd0K4x5OT8"
            target="_blank"
            rel="noreferrer"
          >
            Auf Spotify hören
            <ArrowUpRight />
          </a>
        </div>
        <div className="podcast-episodes">
          <div>
            <span>02</span>
            <p>In dubio pro vita! – Im Zweifel für das Leben</p>
            <small>Patientenverfügung · Selbstbestimmung · Notfallmedizin</small>
          </div>
          <div>
            <span>01</span>
            <p>Betäubungsmittel im Klinikalltag</p>
            <small>Human Factors · Verantwortung · Patientensicherheit</small>
          </div>
          <div>
            <span>00</span>
            <p>Warum „Recht Medizinisch“?</p>
            <small>Medizin · Pflege · Recht</small>
          </div>
        </div>
      </section>

      <section className="vita section" id="vita">
        <div className="section-label">
          <span>03</span>
          <p>Vita</p>
        </div>
        <div className="vita-layout">
          <div className="vita-intro">
            <p className="kicker">Ausgewählte Stationen</p>
            <h2>Zwei Disziplinen. Ein Blick fürs Ganze.</h2>
            <p>
              Ärztliche Praxis, juristische Ausbildung und akademische Lehre
              bilden die Grundlage meiner interdisziplinären Arbeit.
            </p>
          </div>
          <div className="timeline">
            {milestones.map((milestone) => (
              <article key={milestone.period + milestone.title}>
                <span className="timeline-period">{milestone.period}</span>
                <div>
                  <h3>{milestone.title}</h3>
                  <p className="timeline-place">{milestone.place}</p>
                  <p>{milestone.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="engagement section">
        <div className="engagement-title">
          <p className="kicker">Weitere Tätigkeiten</p>
          <h2>Wissenschaft in Bewegung.</h2>
        </div>
        <div className="engagement-grid">
          <article>
            <span>Gutachter</span>
            <h3>Deutsche Medizinische Wochenschrift</h3>
            <p>
              Fachbegutachtung medizinischer und medizinrechtlicher
              Publikationen.
            </p>
            <a
              href="https://www.thieme-connect.de/products/ejournals/abstract/10.1055/a-2722-8340"
              target="_blank"
              rel="noreferrer"
            >
              Nachweis 2025 <ArrowUpRight size={16} />
            </a>
          </article>
          <article>
            <span>Referent</span>
            <h3>Medizinrecht & KI</h3>
            <p>
              Vorträge zu Haftung, klinischer Verantwortung und Künstlicher
              Intelligenz im Gesundheitswesen.
            </p>
            <a
              href="https://seminare.rak-fortbildungsinstitut.de/seminare/anwaltsseminare/82-250716-s-fa-medizinrecht-tag-1-arzthaftungsrecht-die-feststellung-der-kausalitaet-im-arzhaftungsprozess-ki-im-gesundheitswesen-7-5-fao-stunden-9673124/"
              target="_blank"
              rel="noreferrer"
            >
              Stuttgarter Medizinrechtstage <ArrowUpRight size={16} />
            </a>
          </article>
          <article>
            <span>Forschung</span>
            <h3>Neue Arbeitsmodelle</h3>
            <p>
              Projektleitung einer Langzeitstudie zu psychologischen und
              arbeitswissenschaftlichen Effekten der 4-Tage-Woche.
            </p>
          </article>
        </div>
      </section>

      <section className="contact section" id="kontakt">
        <div className="contact-orbit" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <p className="eyebrow light">
          <span />
          Kontakt
        </p>
        <h2>
          Lassen Sie uns
          <br />
          ins Gespräch <em>kommen.</em>
        </h2>
        <p>
          Für Vorträge, Lehre, Publikationen und interdisziplinären
          wissenschaftlichen Austausch.
        </p>
        <a
          className="contact-mail"
          href="mailto:graef.philipp@googlemail.com"
        >
          graef.philipp@googlemail.com
          <ArrowUpRight size={28} />
        </a>
      </section>

      <footer>
        <div className="footer-brand">
          <span className="brand-mark">PG</span>
          <p>
            Dr. med. Philipp Graef, LL.M.
            <br />
            Medizin · Recht · Lehre
          </p>
        </div>
        <p className="footer-note">
          Die Inhalte dienen der Information und ersetzen keine medizinische
          oder rechtliche Beratung im Einzelfall.
        </p>
        <div className="footer-links">
          <a href="#top">Nach oben ↑</a>
          <span>© {new Date().getFullYear()} Philipp Graef</span>
        </div>
      </footer>
    </main>
  );
}
