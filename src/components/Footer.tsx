import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>© 2026 {profile.name}</div>
        <div className="footer-links">
          <a href={profile.links.github}>GitHub</a>
          <a href={profile.links.linkedin}>LinkedIn</a>
          <a href={profile.links.orcid}>ORCID</a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}
