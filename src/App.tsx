import { useEffect, useState } from "react";
import { LegalPage } from "./LegalPages";

const Arrow = ({ diagonal = false }: { diagonal?: boolean }) => (
  <span className="arrow" aria-hidden="true">
    {diagonal ? "↗" : "→"}
  </span>
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
    title: "Zweites juristisches Staatsexamen · Ass. iur.",
    place: "Land Baden-Württemberg",
    text: "Abschluss der juristischen Ausbildung und Qualifikation als Volljurist."
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
    href: "#save-order-safe",
    link: "Zum Venture Spotlight"
  }
];

const qualifications = [
  "Dr. med.",
  "Ass. iur.",
  "Volljurist",
  "LL.M. Medizinrecht",
  "Diplom-Jurist",
  "Hochschullehrer",
  "Autor",
  "Unternehmer"
];

const saveOrderSafeOffers = [
  {
    number: "01",
    label: "Für Sportler:innen",
    title: "Last-Minute-Sport",
    text: "Buchungen einfach weitergeben, Stornogebühren vermeiden und kurzfristig vergünstigte Sportangebote finden.",
    href: "https://saveordersafe.com/",
    link: "saveordersafe.com"
  },
  {
    number: "02",
    label: "Für Clubs & Anlagen",
    title: "SOS Club Solutions",
    text: "Moderne Vereinswebsites mit eigener Domain, Hosting, intelligenter Buchungslogik, SOS-Ausfallschutz und individuellen Erweiterungen.",
    href: "https://clubsolutions.saveordersafe.com/",
    link: "clubsolutions.saveordersafe.com"
  },
  {
    number: "03",
    label: "Für Multiplikator:innen",
    title: "SOS Partnerprogramm",
    text: "Sportvereine digitalisieren helfen und 10 % Provision auf jede vermittelte SOS Club Solutions Website erhalten.",
    href: "https://partner.saveordersafe.com/",
    link: "partner.saveordersafe.com"
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
          <Arrow diagonal />
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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const revealTargets = document.querySelectorAll<HTMLElement>(
      ".section-label, .section-heading-row, .profile-lead, .field-card, .project-card, .venture-hero, .venture-offer, .library-card, .publication-row, .podcast-art, .podcast-copy, .podcast-episodes article, .vita-intro, .timeline article, .education-panel, .talk-grid article, .facets-intro, .facet-grid article, .contact > *:not(.contact-shape)"
    );

    root.classList.add("motion-ready");
    revealTargets.forEach((element, index) => {
      element.classList.add("reveal-target");
      element.style.setProperty("--reveal-order", String(index % 4));
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10%", threshold: 0.08 }
    );

    revealTargets.forEach((element) => observer.observe(element));

    let frame = 0;
    const updateScrollProgress = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const available = document.documentElement.scrollHeight - window.innerHeight;
        const progress = available > 0 ? window.scrollY / available : 0;
        root.style.setProperty("--scroll-progress", String(progress));
        frame = 0;
      });
    };

    const updatePointer = (event: PointerEvent) => {
      root.style.setProperty("--pointer-x", `${event.clientX}px`);
      root.style.setProperty("--pointer-y", `${event.clientY}px`);
    };

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("pointermove", updatePointer, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("pointermove", updatePointer);
      if (frame) window.cancelAnimationFrame(frame);
      root.classList.remove("motion-ready");
    };
  }, []);

  const legalPath = window.location.pathname.replace(/\/+$/, "") || "/";
  if (legalPath === "/impressum") {
    return <LegalPage kind="impressum" />;
  }
  if (legalPath === "/datenschutz") {
    return <LegalPage kind="datenschutz" />;
  }

  const visiblePublications = showAllPublications
    ? publications
    : publications.slice(0, 4);
  const visibleCareer = showAllCareer
    ? careerMilestones
    : careerMilestones.slice(0, 6);
  const visibleTalks = showAllTalks ? talks : talks.slice(0, 4);

  return (
    <main>
      <div className="site-intro" aria-hidden="true">
        <span>PG</span>
        <p>Medizin × Recht</p>
      </div>
      <div className="pointer-aura" aria-hidden="true" />
      <div className="page-progress" aria-hidden="true">
        <span />
      </div>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Zur Startseite">
          <span className="brand-mark">P/G</span>
          <span className="brand-name">
            Philipp Graef
            <small>Medizin × Recht</small>
          </span>
        </a>
        <nav
          className={menuOpen ? "is-open" : ""}
          aria-label="Hauptnavigation"
          onClick={() => setMenuOpen(false)}
        >
          <a href="#profil">Profil</a>
          <a href="#projekte">Projekte</a>
          <a href="#buecher">Bücher</a>
          <a href="#save-order-safe">SOS</a>
          <a href="#publikationen">Publikationen</a>
          <a href="#vita">Vita</a>
        </nav>
        <a className="header-contact" href="#kontakt">
          Kontakt
          <Arrow diagonal />
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

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <p className="hero-edition" aria-hidden="true">
          Portfolio / 2026
        </p>
        <div className="hero-wordmark" aria-hidden="true">
          <span>MED</span>
          <span>LEX</span>
        </div>
        <div className="hero-copy">
          <p className="eyebrow">
            <span />
            Medizin · Recht · Lehre · Innovation
          </p>
          <h1>
            <span>Medizin</span>
            <span className="hero-line-shift"><em>verstehen.</em></span>
            <span>Recht einordnen.</span>
            <span className="hero-line-future">Zukunft gestalten.</span>
          </h1>
          <p className="hero-intro">
            Dr. med. Philipp Graef, Ass. iur., LL.M. verbindet als Arzt und
            Volljurist klinische Erfahrung mit juristischer Präzision – in
            Lehre, Forschung, Publikation und unternehmerischer Innovation.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#profil">
              Profil entdecken
              <Arrow />
            </a>
            <a className="text-link" href="#projekte">
              Aktuelle Projekte
              <Arrow />
            </a>
          </div>
          <div className="hero-credentials" aria-label="Qualifikationen">
            <span>Dr. med.</span>
            <span>Ass. iur.</span>
            <span>Volljurist</span>
            <span>LL.M.</span>
            <span>Diplom-Jurist</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="portrait-index" aria-hidden="true">01</div>
          <div className="portrait-panel">
            <img
              src="/philipp-graef-hd.webp"
              alt="Dr. med. Philipp Graef"
              width={1116}
              height={1409}
              decoding="async"
              fetchPriority="high"
            />
          </div>
          <div className="portrait-caption">
            <small>Perspektive</small>
            <span>Arzt</span>
            <span>× Volljurist</span>
          </div>
          <div className="hero-note">
            <span>Dr. med. · Ass. iur. · LL.M.</span>
            <p>Zwei Disziplinen. Ein Blick fürs Ganze.</p>
          </div>
        </div>

        <div className="scroll-note" aria-hidden="true">
          Scroll to explore <span>↓</span>
        </div>
      </section>

      <section className="qualification-marquee" aria-label={qualifications.join(", ")}>
        <div aria-hidden="true">
          {[...qualifications, ...qualifications].map((qualification, index) => (
            <span key={`${qualification}-${index}`}>
              {qualification}
              <i>✦</i>
            </span>
          ))}
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
                <Arrow diagonal />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section
        className="venture section"
        id="save-order-safe"
        aria-labelledby="venture-title"
      >
        <div className="venture-glow venture-glow-one" aria-hidden="true" />
        <div className="venture-glow venture-glow-two" aria-hidden="true" />
        <div className="venture-topline">
          <p className="eyebrow light">
            <span />
            Venture Spotlight
          </p>
          <span className="venture-role">Mitgründer & COO</span>
        </div>
        <div className="venture-hero">
          <div>
            <p className="venture-company">
              Save Order Safe UG <span>(haftungsbeschränkt)</span>
            </p>
            <h2 id="venture-title">
              Mehr Sport.
              <br />
              Weniger Leerstand.
              <br />
              <em>Mehr Gemeinschaft.</em>
            </h2>
          </div>
          <div className="venture-intro">
            <a
              className="venture-logo"
              href="https://saveordersafe.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Save Order Safe – Unternehmenswebsite öffnen"
            >
              <img
                src="/save-order-safe-logo.webp"
                alt="Save Order Safe"
                width={868}
                height={762}
                loading="lazy"
                decoding="async"
              />
            </a>
            <p>
              Save Order Safe verbindet Sportler:innen, Vereine und
              Freizeitanlagen in einem digitalen Ökosystem: kurzfristige
              Ausfälle werden zu neuen Chancen, Kapazitäten besser genutzt und
              Clubs technologisch zukunftsfähig.
            </p>
            <a
              className="button button-light"
              href="https://saveordersafe.com/"
              target="_blank"
              rel="noreferrer"
            >
              Unternehmen entdecken
              <Arrow diagonal />
            </a>
          </div>
        </div>
        <div className="venture-offers">
          {saveOrderSafeOffers.map((offer) => (
            <a
              className="venture-offer"
              href={offer.href}
              target="_blank"
              rel="noreferrer"
              key={offer.href}
            >
              <span className="venture-number">{offer.number}</span>
              <p className="venture-label">{offer.label}</p>
              <h3>{offer.title}</h3>
              <p>{offer.text}</p>
              <span className="venture-link">
                {offer.link}
                <Arrow diagonal />
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="library section" id="buecher" aria-labelledby="library-title">
        <div className="section-label">
          <span>03</span>
          <p>Bücher</p>
        </div>
        <div className="library-head">
          <p className="kicker">Zwei Bücher · zwei Perspektiven</p>
          <h2 id="library-title">
            Vom präzisen Argument bis zu dem, was <em>unausgesprochen</em> bleibt.
          </h2>
        </div>

        <div className="library-grid">
          <article className="library-card library-card-literary">
            <div className="library-cover">
              <span className="library-orbit" aria-hidden="true" />
              <img
                src="/die-leisen-abstaende-cover.jpg"
                alt="Buchcover: Die leisen Abstände zwischen uns"
                width={996}
                height={1500}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="library-copy">
              <p className="library-type">Literarische Kurzprosa · 2026</p>
              <h3>Die leisen Abstände zwischen uns</h3>
              <p className="library-subtitle">
                Sieben Geschichten und Aphorismen über Nähe, Erinnerung und das Weitergehen.
              </p>
              <p>
                Ein leiser, nachdenklicher Band über Liebe, Eifersucht, Vertrauen
                und die kleinen Entscheidungen, nach denen nichts mehr ganz so
                ist wie zuvor.
              </p>
              <dl className="book-meta">
                <div><dt>Umfang</dt><dd>86 Seiten</dd></div>
                <div><dt>Publikation</dt><dd>Kindle Direct Publishing</dd></div>
                <div><dt>ISBN-13</dt><dd>979-8192142127</dd></div>
              </dl>
              <a
                className="button button-ink"
                href="https://www.amazon.de/dp/B0HF61ZHX9"
                target="_blank"
                rel="noreferrer"
              >
                Bei Amazon ansehen <Arrow diagonal />
              </a>
            </div>
          </article>

          <article className="library-card library-card-academic">
            <div className="library-cover">
              <span className="library-index" aria-hidden="true">74</span>
              <img
                src="/buch-gebaermuttertransplantation.webp"
                alt="Buchcover: Die Gebärmuttertransplantation – Medizin, Recht, Ethik"
                width={741}
                height={1050}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="library-copy">
              <p className="library-type">Monografie · Medizinrecht · 2024</p>
              <h3>Die Gebärmutter&shy;transplantation</h3>
              <p className="library-subtitle">Medizin – Recht – Ethik</p>
              <p>
                Medizinische Grundlagen, rechtliche Zulässigkeit, ethische
                Dimensionen und gesellschaftliche Folgen einer innovativen
                Behandlung – systematisch zusammengedacht.
              </p>
              <dl className="book-meta">
                <div><dt>Umfang</dt><dd>306 Seiten</dd></div>
                <div><dt>Reihe</dt><dd>Medizinrecht · Band 74</dd></div>
                <div><dt>ISBN</dt><dd>978-3-339-13992-4</dd></div>
              </dl>
              <a
                className="button button-outline"
                href="https://www.verlagdrkovac.de/978-3-339-13992-4.htm"
                target="_blank"
                rel="noreferrer"
              >
                Zum Verlag <Arrow diagonal />
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="publications section" id="publikationen">
        <div className="section-label">
          <span>04</span>
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
            <Arrow diagonal />
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
          <span>05</span>
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
          <Arrow diagonal />
        </a>
        <div className="contact-signature">
          <img
            src="/philipp-graef-signature.webp"
            alt="Handschriftliche Signatur von Philipp Graef"
            width={803}
            height={509}
            loading="lazy"
            decoding="async"
          />
          <span>Dr. med. Philipp Graef · Ass. iur.</span>
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <span className="brand-mark">PG</span>
          <p>
            Dr. med. Philipp Graef, Ass. iur., LL.M.
            <br />
            Arzt · Volljurist · Hochschullehrer · Unternehmer
          </p>
        </div>
        <p className="footer-note">
          Die Inhalte dienen der Information und ersetzen keine medizinische
          oder rechtliche Beratung im Einzelfall.
        </p>
        <div className="footer-links">
          <div className="footer-legal">
            <a href="/impressum">Impressum</a>
            <a href="/datenschutz">Datenschutz</a>
            <a href="#top">Nach oben ↑</a>
          </div>
          <span>© {new Date().getFullYear()} Philipp Graef</span>
        </div>
      </footer>
    </main>
  );
}
