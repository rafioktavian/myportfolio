import { profile } from "@/lib/data/profile";
import { Reveal } from "./reveal";

export function Contact() {
  return (
    <Reveal className="footer-cta" id="contact">
      <div className="footer-cta__media">
        <div className="footer-cta__media-image">
          <video autoPlay loop muted playsInline preload="metadata" aria-label="Developer coding on a computer">
            <source src="/videos/coding-developer.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="footer-cta__body">
        <p className="footer-cta__heading">
          Want to work <span className="serif-word">together?</span>
        </p>
        <div className="footer-cta__bottom">
          <div className="footer-cta__actions">
            <a className="oi-btn oi-btn--light" href={`mailto:${profile.email}`}>
              <span className="oi-dot" aria-hidden="true" />
              Book a call
            </a>
            <a className="oi-btn" href="#about">
              About
            </a>
          </div>
          <a className="footer-cta__contact" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <span>Available for selected projects</span>
        </div>
      </div>
    </Reveal>
  );
}
