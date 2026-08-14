import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data/profile";
import { Reveal } from "./reveal";

const menuLinks = [
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <Reveal className="produx-footer">
        <div className="produx-footer__intro">
          <span className="produx-label">Have a project in mind?</span>
          <a className="produx-footer__headline" href={`mailto:${profile.email}`}>
            <span>Let&apos;s build</span>
            <span>
              something useful <ArrowUpRight aria-hidden="true" />
            </span>
          </a>
        </div>

        <div className="produx-footer__grid">
          <nav className="produx-footer__column produx-footer__menu" aria-label="Footer menu">
            <span className="produx-label">Menu/</span>
            <div>
              {menuLinks.map((link) => (
                <Link key={link.href} href={link.href} className="produx-footer__link">
                  <span>[</span>
                  <span className="produx-footer__link-roll">
                    <span>{link.label}</span>
                    <span>{link.label}</span>
                  </span>
                  <span>]</span>
                </Link>
              ))}
            </div>
          </nav>

          <div className="produx-footer__column produx-footer__contact">
            <span className="produx-label">Start a conversation/</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <p>Available for selected product, platform, and web development projects.</p>
          </div>

          <div className="produx-footer__column produx-footer__reel">
            <span className="produx-label">In the studio/</span>
            <video autoPlay loop muted playsInline preload="metadata" aria-label="Developer coding on a computer">
              <source src="/videos/coding-developer.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="produx-footer__column produx-footer__socials">
            <span className="produx-label">Socials/</span>
            <div>
              {profile.socials.map((social) => (
                <a key={social.name} href={social.href} target="_blank" rel="noreferrer">
                  <span>{social.name}</span>
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="produx-footer__bottom">
          <a href="#top">Back to top</a>
          <span>© 2026 {profile.name}. All rights reserved.</span>
        </div>
      </Reveal>
    </footer>
  );
}
