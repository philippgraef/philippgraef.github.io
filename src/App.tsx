import { useState } from "react";

const ArrowUpRight = ({ size = 18 }: { size?: number }) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
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

const ArrowRight = ({ size = 18 }: { size?: number }) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M5 12h14m-5-5 5 5-5 5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  </svg>
);

const Plus = ({ open }: { open: boolean }) => (
  <span className={`plus ${open ? "is-open" : ""}`} aria-hidden="true">
    <span />
    <span />
  </span>
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
    title: "Forschung & Innovation",
    text: "Interdisziplinäre Forschung, neue Arbeitsmodelle und digitale Produkte mit gesellschaftlichem Nutzen."
  }
];

type Publication = {
  year: string;
  type: string;
  title: string;
  source: string;
  href?: string;
};

const publications: Publication[] = [
  {
    year: "2025",
    type: "Rettungsmedizin",
    title:
      "ABCDE in Niedersachsen: Fester Bestandteil im Rettungsdienst, aber selten genutzt?",
    source: "RETTUNGSDIENST, 8/2025",
    href: "https://rettungsdienst-archiv.de/artikel?keywords%5B%5D=2494"
  },
  {
    year: "2023",
    type: "Transplantationsrecht",
    title: "Ist die Gebärmuttertransplantation in Deutschland zulässig?",
    source: "Recht und Politik im Gesundheitswesen"
  },
  {
    year: "2022",
    type: "Chirurgie",
    title: "Sleeve gastrectomy – a boon and a bane?!",
    source: "99. Jahrestagung der Vereinigung der Bayerischen Chirurgie"
  },
  {
    year: "2021",
    type: "Chirurgie",
    title:
      "Rektumperforation mit Eviszeration des Intestinums bei externem Rektumprolaps",
    source: "Mittelrheiner Chirurgenkongress, Böblingen"
  },
  {
    year: "2021",
    type: "Chirurgie",
    title:
      "Die Perinealhernie als seltene Komplikation nach extralevatorischer abdominoperinealer Rektumexstirpation",
    source: "Mittelrheiner Chirurgenkongress, Böblingen"
  },
  {
    year: "2021",
    type: "Chirurgie",
    title: "The “skinny” old lady hernia",
    source: "Kongress Viszeralmedizin, Leipzig"
  },
  {
    year: "2021",
    type: "Wettbewerbsrecht",
    title:
      "Die Fortwirkungen des Skanska-Urteils: Sind dessen Grundsätze zur Passivlegitimation auf die Aktivlegitimation übertragbar?",
    source: "WRP 2021, S. 880–885"
  },
  {
    year: "2021",
    type: "Pharmarecht",
    title: "Ist Zugabenwerbung für Arzneimittel in Deutschland zulässig?",
    source: "PharmR 2021"
  },
  {
    year: "2020",
    type: "Transplantationsrecht",
    title: "Ist die (empfänger-)gerichtete Totenspende in Deutschland zulässig?",
    source: "Recht und Politik im Gesundheitswesen 26 (2020), S. 83–94"
  },
  {
    year: "2020",
    type: "Kartellrecht",
    title: "Beweiserleichterung im Kartellschadensersatz",
    source: "Zeitschrift für das Juristische Studium"
  },
  {
    year: "2020",
    type: "Lebensmittelrecht",
    title:
      "Animal Welfare nach der Novel-Food-Verordnung – auch für Insekten?",
    source: "Natur und Recht"
  },
  {
    year: "2019",
    type: "Medizinrecht",
    title: "Rechtliche und ethische Fragen der Gebärmuttertransplantation",
    source: "GesundheitsRecht 18 (2019), S. 551–559",
    href: "https://doi.org/10.9785/gesr-2019-180905"
  }
];

const careerMilestones = [
  {
    period: "seit 2026",
    title: "Mitgründer & COO",
    place: "Save Order Safe UG (haftungsbeschränkt)",
    text: "Aufbau einer Sport-Tech-Plattform für vergünstigte Last-Minute-Buchungen und die bessere Auslastung von Sportangeboten."
  },
  {
    period: "seit 2025",
    title: "Gutachter",
    place: "Deutsche Medizinische Wochenschrift",
    text: "Fachliche Begutachtung medizinischer und medizinrechtlicher Beiträge."
  },
  {
    period: "seit 2023",
    title: "Hochschullehrer",
    place: "Hochschule Fresenius · Fachbereich Gesundheit & Soziales",
    text: "Anatomie, Physiologie und klinische Medizin mit Schwerpunkten in Neurowissenschaften und KI in der Medizin."
  },
  {
    period: "seit 2023",
    title: "Projektleiter · 4-Tage-Woche",
    place: "ENCW-Gruppe",
    text: "Psychologische und arbeitswissenschaftliche Langzeitbegleitung des gruppenweiten Arbeitszeitmodells."
  },
  {
    period: "seit 2022",
    title: "Doktorand der Rechtswissenschaft",
    place: "Universität Leipzig · Prof. Dr. Bernd-Rüdiger Kern",
    text: "Forschung zur Verfassungsmäßigkeit von § 8 Abs. 1 Satz 2 Transplantationsgesetz."
  },
  {
    period: "seit 2022",
    title: "Dozent",
    place: "Klinikverbund Südwest",
    text: "Unterricht und Prüfungskonzepte für Auszubildende in Pflege und Operationstechnischer Assistenz."
  },
  {
    period: "2023–2024",
    title: "Dozent",
    place: "Ludwig Fresenius Schulen Berlin",
    text: "Anatomie, Physiologie, klinische Medizin und Medizinrecht für Logopädie, Pflege und Physiotherapie."
  },
  {
    period: "2022–2023",
    title: "Dozent",
    place: "Deutsche Hochschule für Gesundheit und Sport",
    text: "Lehre an der Schnittstelle von Medizin, Gesundheit und wissenschaftlichem Arbeiten."
  },
  {
    period: "2020–2022",
    title: "Assistenzarzt für Chirurgie",
    place: "Kliniken Nagold · Akademisches Lehrkrankenhaus der Universität Tübingen",
    text: "Allgemein-, Viszeral-, Gefäß- und Unfallchirurgie sowie interprofessionelle Patientenversorgung."
  },
  {
    period: "2020",
    title: "Wissenschaftlicher Mitarbeiter",
    place: "Oppenländer Rechtsanwälte, Stuttgart",
    text: "Rechtswissenschaftliche Recherche mit Schwerpunkten im Medizin- und Gesundheitsrecht."
  },
  {
    period: "2020–2022",
    title: "Rechtsreferendar",
    place: "Oberlandesgericht Stuttgart · Landgericht Stuttgart",
    text: "Juristischer Vorbereitungsdienst mit Stationen in Zivil- und Strafsachen."
  },
  {
    period: "seit 2018",
    title: "Lektor",
    place: "Georg Thieme Verlag",
    text: "Fachlektorat medizinischer und wissenschaftlicher Publikationen."
  },
  {
    period: "2012–2016",
    title: "Tutor & wissenschaftliche Mitarbeit",
    place: "Universitätsklinikum und Universität Tübingen",
    text: "Pädiatrie, makroskopische Anatomie, Neonatologie und Mentoring internationaler Medizinstudierender."
  }
];

const educationMilestones = [
  {
    period: "2022",
    title: "LL.M. Medizinrecht",
    place: "Dresden International University",
    text: "Masterarbeit zur rechtlichen Zulässigkeit der Gebärmuttertransplantation."
  },
  {
    period: "2022",
    title: "Zweites juristisches Staatsexamen",
    place: "Land Baden-Württemberg",
    text: "Abschluss der juristischen Ausbildung."
  },
  {
    period: "2019",
    title: "Dr. med.",
    place: "Eberhard Karls Universität Tübingen",
    text: "Dissertation zur Wirkung von HMGB1 auf die Interaktion von Thrombozyten und Monozyten."
  },
  {
    period: "2019",
    title: "Erstes juristisches Staatsexamen · Diplom-Jurist",
    place: "Eberhard Karls Universität Tübingen",
    text: "Abschluss des rechtswissenschaftlichen Studiums."
  },
  {
    period: "2014–2019",
    title: "Studium der Rechtswissenschaft",
    place: "Eberhard Karls Universität Tübingen",
    text: "Doppelstudium parallel zur medizinischen Ausbildung."
  },
  {
    period: "2011–2017",
    title: "Studium der Humanmedizin",
    place: "Eberhard Karls Universität Tübingen",
    text: "Ärztliche Prüfung und Approbation."
  },
  {
    period: "2011",
    title: "Abitur",
    place: "Maria-von-Linden-Gymnasium Calw",
    text: "Ausgangspunkt eines interdisziplinären Bildungswegs."
  }
];

const talks = [
  {
    year: "2025",
    title: "Alzheimer-Demenz",
    place: "Familien- und Seniorenakademie Idstein"
  },
  {
    year: "2025",
    title: "Krankheitsbilder für die Podologie",
    place: "Fachfortbildung, Stralsund"
  },
  {
    year: "2025",
    title: "KI im Gesundheitswesen: Verantwortung und Haftung",
    place: "8. Stuttgarter Medizinrechtstage"
  },
  {
    year: "2025",
    title: "Spannungsfeld: rechtlich absichern oder indiziert?",
    place: "RÖKO, Wiesbaden"
  },
  {
    year: "2024",
    title: "Demenz, Schutzmaßnahmen und orthopädische Komplikationen",
    place: "7. Stuttgarter Medizinrechtstage"
  },
  {
    year: "2023–2024",
    title: "Mental Health",
    place: "Gymnasium Trossingen"
  },
  {
    year: "2023",
    title: "Augenheilkunde und Orthopädie",
    place: "6. Stuttgarter Medizinrechtstage"
  },
  {
    year: "2022",
    title: "Onkologie und Hernien",
    place: "5. Stuttgarter Medizinrechtstage"
  },
  {
    year: "2021",
    title: "Schlaganfall und Herzinfarkt",
    place: "4. Stuttgarter Medizinrechtstage"
  }
];

const episodes = [
  {
    number: "02",
    title: "In dubio pro vita! – Im Zweifel für das Leben",
    meta: "Patientenverfügung · Selbstbestimmung · Notfallmedizin"
  },
  {
    number: "01",
    title: "Betäubungsmittel im Klinikalltag",
    meta: "Human Factors · Verantwortung · Patientensicherheit"
  },
  {
    number: "00",
    title: "Warum „Recht Medizinisch“?",
    meta: "Medizin · Pflege · Recht"
  }
];

const projects = [
  {
    index: "01",
    meta: "Promotion · Universität Leipzig",
    title: "Verfassungsrecht & Transplantationsmedizin",
    text: "Rechtswissenschaftliche Forschung zur verfassungsrechtlichen Tragfähigkeit des § 8 Abs. 1 Satz 2 TPG.",
    href: "#vita",
    link: "Mehr zur Vita"
  },
  {
    index: "02",
    meta: "Arbeitsforschung · ENCW-Gruppe",
    title: "Die 4-Tage-Woche wissenschaftlich begleiten",
    text: "Langzeitstudie zu psychologischen, sozialen und arbeitswissenschaftlichen Effekten eines modernen Arbeitszeitmodells.",
    href: "https://www.encw.de/encw-gruppe-fuehrt-ab-01-oktober-4-tage-woche-ein/",
    link: "Zum Modell der ENCW-Gruppe"
  },
  {
    index: "03",
    meta: "Podcast · Recht Medizinisch",
    title: "Klinikalltag trifft Recht",
    text: "Mit Florian Schlepple: echte Fälle, nachvollziehbare Einordnung und ein offener Blick auf medizinrechtliche Grauzonen.",
    href: "https://open.spotify.com/show/7aowMbc68QlEwd0K4x5OT8",
    link: "Alle Folgen"
  },
  {
    index: "04",
    meta: "Entrepreneurship · Save Order Safe",
    title: "Mehr Sport. Weniger Leerstand.",
    text: "Als Mitgründer und COO entwickle ich eine Plattform, die kurzfristig frei werdende Sportbuchungen wieder verfügbar macht.",
    href: "https://saveordersafe.com/",
    link: "Save Order Safe entdecken"
  }
];

function PublicationRow({ publication }: { publication: Publication }) {
  const content = (
    <>
      <span className="publication-year">{publication.year}</span>
      <span className="publication-type">{publication.type}</span>
      <span className="publication-main">
        <strong>{publication.title}</strong>
        <small>{publication.source}</small>
      </span>
      {publication.href ? (
        <span className="publication-arrow">
          <ArrowUpRight />
        </span>
      ) : (
        <span className="publication-dot" aria-hidden="true" />
      )}
    </>
  );

  return publication.href ? (
    <a
      className="publication-row"
      href={publication.href}
      target="_blank"
      rel="noreferrer"
    >
      {content}
    </a>
  ) : (
    <article className="publication-row">{content}</article>
  );
}

export default function App() {
  const [showAllPublications, setShowAllPublications] = useState(false);
  const [showAllCareer, setShowAllCareer] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [showAllTalks, setShowAllTalks] = useState(false);

  const visiblePublications = showAllPublications
    ? publications
    : publications.slice(0, 4);
  const visibleCareer = showAllCareer
    ? careerMilestones
    : careerMilestones.slice(0, 6);
  const visibleTalks = showAllTalks ? talks : talks.slice(0, 4);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Zur Startseite">
          <span className="brand-mark">PG</span>
          <span className="brand-name">Philipp Graef</span>
        </a>
        <nav aria-label="Hauptnavigation">
          <a href="#profil">Profil</a>
          <a href="#projekte">Projekte</a>
          <a href="#publikationen">Publikationen</a>
          <a href="#vita">Vita</a>
        </nav>
        <a className="header-contact" href="#kontakt">
          Kontakt
          <ArrowUpRight size={16} />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-shape hero-shape-one" aria-hidden="true" />
        <div className="hero-shape hero-shape-two" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">
            <span />
            Medizin · Recht · Lehre · Innovation
          </p>
          <h1>
            Medizin verstehen.
            <br />
            Recht <em>einordnen.</em>
            <br />
            Zukunft gestalten.
          </h1>
          <p className="hero-intro">
            Dr. med. Philipp Graef, LL.M. verbindet ärztliche Erfahrung mit
            juristischer Präzision – in Lehre, Forschung, Publikation und
            unternehmerischer Innovation.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#profil">
              Profil entdecken
              <ArrowRight />
            </a>
            <a className="text-link" href="#projekte">
              Aktuelle Projekte
              <ArrowRight />
            </a>
          </div>
          <div className="hero-credentials" aria-label="Qualifikationen">
            <span>Dr. med.</span>
            <span>LL.M.</span>
            <span>Diplom-Jurist</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="portrait-halo" aria-hidden="true" />
          <div className="portrait-panel">
            <img
              src="/philipp-graef.jpg"
              alt="Dr. med. Philipp Graef"
              width={281}
              height={354}
              fetchPriority="high"
            />
          </div>
          <div className="portrait-caption">
            <span>Arzt</span>
            <span>Jurist</span>
            <span>Hochschullehrer</span>
          </div>
          <div className="hero-note">
            <span>Mein Fokus</span>
            <p>Wo medizinischer Fortschritt auf Verantwortung trifft.</p>
          </div>
        </div>

        <div className="scroll-note" aria-hidden="true">
          <span />
          Entdecken
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
              und verständliche Kommunikation – für belastbare Orientierung in
              Wissenschaft, Lehre und Praxis.
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

      <section className="projects section" id="projekte">
        <div className="section-label light-label">
          <span>02</span>
          <p>Aktuelle Projekte</p>
        </div>
        <div className="section-heading-row project-heading">
          <div>
            <p className="kicker">Was mich gerade bewegt</p>
            <h2>Ideen mit Wirkung – in Forschung und Praxis.</h2>
          </div>
          <p>
            Von Transplantationsrecht über Arbeitsforschung bis zu Podcast und
            Sport-Tech.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.index}>
              <span className="project-index">{project.index}</span>
              <p className="project-meta">{project.meta}</p>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <a
                href={project.href}
                target={project.href.startsWith("http") ? "_blank" : undefined}
                rel={project.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {project.link}
                <ArrowUpRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="book section" aria-labelledby="book-title">
        <div className="book-visual">
          <div className="book-backdrop" aria-hidden="true" />
          <img
            src="/buch-gebaermuttertransplantation.webp"
            alt="Buchcover: Die Gebärmuttertransplantation – Medizin, Recht, Ethik"
            width={741}
            height={1050}
            loading="lazy"
          />
          <span className="book-badge">Monografie · 2024</span>
        </div>
        <div className="book-copy">
          <p className="eyebrow">
            <span />
            Medizin · Recht · Ethik
          </p>
          <h2 id="book-title">Die Gebärmutter&shy;transplantation</h2>
          <p className="book-subtitle">Medizin – Recht – Ethik</p>
          <p>
            Das Werk untersucht medizinische Grundlagen, rechtliche
            Zulässigkeit, ethische Dimensionen und gesellschaftliche Folgen
            dieser innovativen Behandlung.
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
            className="button button-primary"
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
          <span>03</span>
          <p>Publikationen</p>
        </div>
        <div className="section-heading-row">
          <div>
            <p className="kicker">Medizin & Recht</p>
            <h2>Forschung, die Fachgrenzen überschreitet.</h2>
          </div>
          <p>
            Zwölf Beiträge aus Medizinrecht, Transplantationsrecht,
            Wettbewerbsrecht und klinischer Praxis – ergänzt durch die
            Monografie.
          </p>
        </div>
        <div className="publication-list" id="publication-list">
          {visiblePublications.map((publication) => (
            <PublicationRow
              publication={publication}
              key={publication.title}
            />
          ))}
        </div>
        <button
          className="reveal-button"
          type="button"
          aria-expanded={showAllPublications}
          aria-controls="publication-list"
          onClick={() => setShowAllPublications((current) => !current)}
        >
          {showAllPublications
            ? "Auswahl anzeigen"
            : `Alle Publikationen (${publications.length})`}
          <Plus open={showAllPublications} />
        </button>
      </section>

      <section className="podcast section" aria-labelledby="podcast-title">
        <div className="podcast-art">
          <div className="podcast-blob" aria-hidden="true" />
          <img
            src="/recht-medizinisch-cover.jpg"
            alt="Logo des Podcasts Recht Medizinisch"
            width={640}
            height={640}
            loading="lazy"
          />
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
            Alle Folgen auf Spotify
            <ArrowUpRight />
          </a>
        </div>
        <div className="podcast-episodes">
          {episodes.map((episode) => (
            <article key={episode.number}>
              <span>{episode.number}</span>
              <div>
                <p>{episode.title}</p>
                <small>{episode.meta}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="vita section" id="vita">
        <div className="section-label">
          <span>04</span>
          <p>Vita</p>
        </div>
        <div className="vita-layout">
          <div className="vita-intro">
            <p className="kicker">Berufliche Stationen</p>
            <h2>Zwei Disziplinen. Ein Blick fürs Ganze.</h2>
            <p>
              Ärztliche Praxis, juristische Ausbildung, akademische Lehre und
              Unternehmertum bilden die Grundlage meiner Arbeit.
            </p>
            <div className="vita-stat">
              <strong>{careerMilestones.length}</strong>
              <span>berufliche und wissenschaftliche Stationen</span>
            </div>
          </div>
          <div className="timeline" id="career-timeline">
            {visibleCareer.map((milestone) => (
              <article key={milestone.period + milestone.title}>
                <span className="timeline-period">{milestone.period}</span>
                <div>
                  <h3>{milestone.title}</h3>
                  <p className="timeline-place">{milestone.place}</p>
                  <p>{milestone.text}</p>
                </div>
              </article>
            ))}
            <button
              className="reveal-button timeline-button"
              type="button"
              aria-expanded={showAllCareer}
              aria-controls="career-timeline"
              onClick={() => setShowAllCareer((current) => !current)}
            >
              {showAllCareer ? "Weniger Stationen" : "Alle Stationen"}
              <Plus open={showAllCareer} />
            </button>
          </div>
        </div>

        <div className="education-panel">
          <button
            type="button"
            aria-expanded={showEducation}
            aria-controls="education-list"
            onClick={() => setShowEducation((current) => !current)}
          >
            <span>
              <small>Ausbildung & Abschlüsse</small>
              Der Weg durch Medizin und Recht
            </span>
            <Plus open={showEducation} />
          </button>
          {showEducation && (
            <div className="education-list" id="education-list">
              {educationMilestones.map((milestone) => (
                <article key={milestone.period + milestone.title}>
                  <span>{milestone.period}</span>
                  <div>
                    <h3>{milestone.title}</h3>
                    <p className="timeline-place">{milestone.place}</p>
                    <p>{milestone.text}</p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="talks section" id="vortraege">
        <div className="section-heading-row">
          <div>
            <p className="kicker">Vorträge & Impulse</p>
            <h2>Wissen wird wertvoll, wenn es Menschen erreicht.</h2>
          </div>
          <p>
            Medizinische, medizinrechtliche und gesellschaftliche Themen für
            Fachpublikum, Gesundheitsberufe und Öffentlichkeit.
          </p>
        </div>
        <div className="talk-grid" id="talk-list">
          {visibleTalks.map((talk) => (
            <article key={talk.year + talk.title}>
              <span>{talk.year}</span>
              <h3>{talk.title}</h3>
              <p>{talk.place}</p>
            </article>
          ))}
        </div>
        <button
          className="reveal-button"
          type="button"
          aria-expanded={showAllTalks}
          aria-controls="talk-list"
          onClick={() => setShowAllTalks((current) => !current)}
        >
          {showAllTalks ? "Auswahl anzeigen" : `Alle Vorträge (${talks.length})`}
          <Plus open={showAllTalks} />
        </button>
      </section>

      <section className="facets section" aria-labelledby="facets-title">
        <div className="facets-intro">
          <p className="kicker">Weitere Facetten</p>
          <h2 id="facets-title">Neugier, Ausdauer und Verbundenheit.</h2>
        </div>
        <div className="facet-grid">
          <article>
            <span className="facet-icon">✦</span>
            <h3>Auszeichnungen</h3>
            <p>
              Gewinner des VGH Moot Courts Baden-Württemberg 2018; Erfolge bei
              Jugend forscht sowie in der Internationalen Chemie- und
              Biologie-Olympiade.
            </p>
          </article>
          <article>
            <span className="facet-icon">○</span>
            <h3>Fachgesellschaften</h3>
            <p>
              Mitglied der Deutschen Gesellschaft für Allgemein- und
              Viszeralchirurgie, der Transplantation Society sowie des
              Marburger Bundes.
            </p>
          </article>
          <article>
            <span className="facet-icon">≈</span>
            <h3>Sprachen</h3>
            <p>
              Deutsch als Muttersprache, Englisch und Spanisch auf
              verhandlungssicherem Niveau sowie gute Französischkenntnisse.
            </p>
          </article>
        </div>
      </section>

      <section className="contact section" id="kontakt">
        <div className="contact-shape contact-shape-one" aria-hidden="true" />
        <div className="contact-shape contact-shape-two" aria-hidden="true" />
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
          Für Vorträge, Lehre, Publikationen, Projekte und interdisziplinären
          wissenschaftlichen Austausch.
        </p>
        <a className="contact-mail" href="mailto:graef.philipp@googlemail.com">
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
            Medizin · Recht · Lehre · Innovation
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
