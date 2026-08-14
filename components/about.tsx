import Image from "next/image";
import { profile } from "@/lib/data/profile";
import { Container, Section } from "./layout-shell";
import { Reveal } from "./reveal";
import { SectionLabel } from "./section-label";

export function About() {
  return (
    <Section id="about" className="oi-section about-section">
      <Container>
        <div className="about-block">
          <div className="about-block__text">
            <SectionLabel>About</SectionLabel>
            <Reveal>
              <h2 className="oi-h2 about-block__statement">
                Rafi is a <span className="serif-word">fullstack developer</span> working across analysis, code, and
                quality.
              </h2>
              <p className="oi-body about-block__sub">{profile.bio}</p>
            </Reveal>
            <div className="about-block__actions">
              <a className="oi-btn oi-btn--light" href={`mailto:${profile.email}`}>
                <span className="oi-dot" aria-hidden="true" />
                Book a call
              </a>
              <a className="oi-btn" href="#top">
                Back to top
              </a>
            </div>
          </div>

          <div className="about-block__media">
            <div className="about-block__photo">
              <Image
                src="/images/profile/akhmad-rafi-oktavian.webp"
                alt={`Portrait of ${profile.name}`}
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
                className="object-cover"
              />
              <span className="about-block__photo-caption">
                <span>{profile.name}</span>
                <br />
                <span className="about-block__photo-role">{profile.role}</span>
              </span>
            </div>
            <div className="about-block__photo">
              <Image
                src="/images/projects/process-optimisation.webp"
                alt="Process optimisation sketch animation"
                fill
                sizes="(max-width: 767px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
