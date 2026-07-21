import {
  At,
  GithubLogo,
  LinkedinLogo,
  IdentificationCard
} from "@phosphor-icons/react/dist/ssr";
import { profile } from "@/data/profile";

const links = [
  { label: "GitHub", href: profile.links.github, icon: GithubLogo },
  { label: "LinkedIn", href: profile.links.linkedin, icon: LinkedinLogo },
  { label: "ORCID", href: profile.links.orcid, icon: IdentificationCard },
  { label: "Email", href: `mailto:${profile.email}`, icon: At }
];

export function SocialLinks({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "social-links social-links-compact" : "social-links"}>
      {links.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          aria-label={label}
        >
          <Icon size={19} weight="regular" aria-hidden="true" />
          {!compact && <span>{label}</span>}
        </a>
      ))}
    </div>
  );
}
