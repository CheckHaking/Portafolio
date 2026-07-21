import type { Metadata } from "next";

type PortfolioPageMetadata = {
  title: string;
  description: string;
  canonical: string;
  spanishPath: string;
  englishPath: string;
  locale: "es_MX" | "en_US";
  image: {
    url: string;
    width: number;
    height: number;
    alt: string;
  };
};

export function createPortfolioPageMetadata({
  title,
  description,
  canonical,
  spanishPath,
  englishPath,
  locale,
  image
}: PortfolioPageMetadata): Metadata {
  const alternateLocale = locale === "es_MX" ? "en_US" : "es_MX";

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        "es-MX": spanishPath,
        en: englishPath,
        "x-default": spanishPath
      }
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Sergio Antunez Rios",
      type: "website",
      locale,
      alternateLocale: [alternateLocale],
      images: [image]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url]
    }
  };
}
