# Philipp Graef — persönliche Homepage

Professioneller Webauftritt für Dr. med. Philipp Graef, Ass. iur., LL.M. an der
Schnittstelle von Medizin, Recht, Lehre, Wissenschaft und Innovation. Die
React-Anwendung wird mit Vite als statische Website gebaut und über GitHub
Pages veröffentlicht.

## Lokal starten

```bash
pnpm install
pnpm dev
```

Danach ist die Seite unter der von Vite ausgegebenen lokalen Adresse erreichbar.

Der Produktions-Build für GitHub Pages wird mit `pnpm run build:github`
erzeugt. Veröffentlichungen des `main`-Branches erfolgen automatisch über den
Workflow in `.github/workflows/deploy-pages.yml`.

## Datenschutz bei der Inhaltsauswahl

Die Website enthält neben berufsbezogenen Angaben auch die vom Betreiber
ausdrücklich zur Veröffentlichung freigegebenen Kontakt- und Impressumsdaten,
ein Porträt sowie eine stilisierte Fassung seiner Unterschrift. Die zugrunde
liegenden CV-Dokumente und sonstige lokale Arbeitsunterlagen sind nicht Teil
dieses Repositorys.
