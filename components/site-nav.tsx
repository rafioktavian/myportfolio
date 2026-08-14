"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { profile } from "@/lib/data/profile";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
];

export function SiteNav() {
  const [contactOpen, setContactOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled || contactOpen ? "site-header--solid" : ""}`}>
      <Link href="#top" className="site-wordmark" aria-label="Back to top">
        <span className="site-wordmark__name">{profile.name}</span>
        <span className="site-wordmark__home">Home</span>
        <span className="site-wordmark__role">{profile.role}</span>
      </Link>

      <nav className="site-links" aria-label="Primary">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="nav-link">
            {item.label}
          </Link>
        ))}

        <div className="contact-menu">
          <button
            type="button"
            className="nav-link"
            aria-expanded={contactOpen}
            aria-haspopup="true"
            onClick={() => setContactOpen((value) => !value)}
          >
            Contact
          </button>

          <div className={`contact-panel ${contactOpen ? "contact-panel--open" : ""}`}>
            <div className="contact-panel__head">
              <span>Contact / 03</span>
              <span><span className="oi-dot" aria-hidden="true" /> Available</span>
            </div>
            <a className="contact-panel__item" href={`mailto:${profile.email}`}>
              <span>Email</span>
              <span>{profile.email}</span>
            </a>
            {profile.socials.slice(0, 2).map((social) => (
              <a key={social.name} className="contact-panel__item" href={social.href} target="_blank" rel="noreferrer">
                <span>{social.name}</span>
                <span>↗</span>
              </a>
            ))}
            <a className="contact-panel__cta" href={`mailto:${profile.email}`}>
              <span className="oi-dot" aria-hidden="true" />
              <span>Book a call</span>
              <span className="contact-panel__cta-meta">30 min</span>
            </a>
          </div>
        </div>

        <ThemeToggle />
      </nav>
    </header>
  );
}
