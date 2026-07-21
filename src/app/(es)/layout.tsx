import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
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
  title: "Sergio Antunez Rios | IA aplicada e Ingeniería Electromédica",
  description:
    "Ingeniero Electromédico que conecta Computer Vision, software y hardware para resolver problemas de industria y salud.",
  icons: { icon: "/icon.jpg" },
  alternates: {
    canonical: "/",
    languages: { "es-MX": "/", en: "/en" }
  },
  keywords: [
    "Biomedical Engineer",
    "Computer Vision",
    "Industrial AI",
    "Edge inference",
    "DAAD",
    "Sergio Antunez",
    "YOLOv8",
    "Jetson Nano",
    "Django",
    "Next.js"
  ],
  openGraph: {
    title: "Sergio Antunez Rios | IA aplicada e Ingeniería Electromédica",
    description: "Computer Vision, software y hardware aplicados a industria y salud.",
    type: "website",
    locale: "es_MX",
    alternateLocale: ["en_US"],
    images: [{ url: "/images/perfil.jpeg", width: 1200, height: 1200, alt: "Retrato de Sergio Antunez Rios" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Sergio Antunez Rios | IA aplicada e Ingeniería Electromédica",
    description: "Computer Vision, software y hardware aplicados a industria y salud.",
    images: ["/images/perfil.jpeg"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
