import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "../globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"]
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portafolio-henna-five.vercel.app"),
  title: "Sergio Antunez Rios | Applied AI and Electromedical Engineering",
  description:
    "Electromedical Engineer connecting Computer Vision, software and hardware to industrial and healthcare problems.",
  icons: { icon: "/icon.jpg" },
  alternates: {
    canonical: "/en",
    languages: { "es-MX": "/", en: "/en" }
  },
  openGraph: {
    title: "Sergio Antunez Rios | Applied AI and Electromedical Engineering",
    description: "Computer Vision, software and hardware applied to industry and healthcare.",
    type: "website",
    locale: "en_US",
    alternateLocale: ["es_MX"],
    images: [{ url: "/images/perfil.jpeg", width: 1200, height: 1200, alt: "Portrait of Sergio Antunez Rios" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Sergio Antunez Rios | Applied AI and Electromedical Engineering",
    description: "Computer Vision, software and hardware applied to industry and healthcare.",
    images: ["/images/perfil.jpeg"]
  }
};

export default function EnglishRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
