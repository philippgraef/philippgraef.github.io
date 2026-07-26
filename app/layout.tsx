import type { ReactNode } from "react";
import "../src/styles.css";

export const metadata = {
  title: "Dr. med. Philipp Graef, LL.M. | Medizin · Recht · Lehre",
  description:
    "Arzt, Rechtsanwalt, Hochschullehrer und Autor an der Schnittstelle von Medizin, Recht und Ethik.",
  keywords: [
    "Philipp Graef",
    "Medizinrecht",
    "Arzt",
    "Rechtsanwalt",
    "Hochschullehrer",
    "Transplantationsrecht",
    "Medizinethik"
  ],
  openGraph: {
    title: "Dr. med. Philipp Graef, LL.M.",
    description:
      "Medizin verstehen. Recht einordnen. Wissen vermitteln.",
    type: "profile",
    locale: "de_DE"
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
