"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageSwitch } from "@/components/LanguageSwitch";

const nav = {
  es: [
    { label: "Perfil", href: "/" },
    { label: "Trabajo", href: "/software" },
    { label: "Investigación", href: "/interseccion" },
    { label: "Formación", href: "/biomedica" }
  ],
  en: [
    { label: "About", href: "/en" },
    { label: "Work", href: "/en/work" },
    { label: "Research", href: "/en/research" },
    { label: "Background", href: "/en/background" }
  ]
};

const alternateRoutes: Record<string, string> = {
  "/": "/en",
  "/software": "/en/work",
  "/interseccion": "/en/research",
  "/biomedica": "/en/background",
  "/en": "/",
  "/en/work": "/software",
  "/en/research": "/interseccion",
  "/en/background": "/biomedica"
};

export function TopNav({ language = "es" }: { language?: "es" | "en" }) {
  const pathname = usePathname();
  const alternateHref = alternateRoutes[pathname] ?? (language === "es" ? "/en" : "/");

  return (
    <nav className="top-nav">
      <div className="top-nav-inner">
        <Link href={language === "es" ? "/" : "/en"} className="top-nav-brand">
          Sergio Antunez Rios
        </Link>
        <div className="top-nav-actions">
          <div className="top-nav-links">
          {nav[language].map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="top-nav-link"
                style={{ color: isActive ? "var(--ink)" : undefined }}
              >
                {item.label}
              </Link>
            );
          })}
          </div>
          <LanguageSwitch
            href={alternateHref}
            label={language === "es" ? "EN" : "ES"}
            ariaLabel={language === "es" ? "View this page in English" : "Ver esta página en español"}
          />
        </div>
      </div>
    </nav>
  );
}
