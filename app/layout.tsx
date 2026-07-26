import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Dr. med. Philipp Graef, LL.M. | Medizin · Recht · Lehre",
    template: "%s | Philipp Graef"
  },
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
    locale: "de_DE",
    images: [
      {
        url: "/philipp-graef.jpg",
        width: 281,
        height: 354,
        alt: "Porträt von Dr. med. Philipp Graef"
      }
    ]
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
