import Link from "next/link";

type LanguageSwitchProps = {
  href: string;
  label: string;
  ariaLabel: string;
};

export function LanguageSwitch({ href, label, ariaLabel }: LanguageSwitchProps) {
  return (
    <Link className="language-switch" href={href} aria-label={ariaLabel}>
      {label}
    </Link>
  );
}
