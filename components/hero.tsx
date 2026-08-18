import { Container, Section } from "./layout-shell";
import { ProjectShowreel } from "./project-showreel";
import { Reveal } from "./reveal";

const heroWords = ["Analyze", "Code", "AI Workflows"];

export function Hero() {
  return (
    <>
      <Section id="top" className="home-opener">
        <Container>
          <Reveal className="home-opener__intro mb-64">
            <p>
              I design and build useful digital experiences end to end, from requirements and system analysis to a
              production-ready interface. Recent work spans healthcare, e-learning, commerce, ERP, and company
              platforms.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="hero-title" aria-label="Analyze, Code and AI Workflows. Fullstack Developer.">
              <span className="hero-segment">
                <span className="hover-word">{heroWords[0]}</span>, <span className="hover-word">{heroWords[1]}</span> &amp;
              </span>{" "}
              <span className="hero-segment"><span className="hover-word">{heroWords[2]}</span>.</span>
              <br />
              <span className="hero-segment"><span className="serif-word">Fullstack</span> Developer.</span>
            </h1>
          </Reveal>
        </Container>
      </Section>

      <section className="showreel-band" aria-label="Selected project previews">
        <Container>
          <div className="showreel-grid">
            <ProjectShowreel />

            <div className="showreel-aside">
              <video autoPlay loop muted playsInline preload="metadata" aria-label="Developer coding on a computer">
                <source src="/videos/coding-developer.mp4" type="video/mp4" />
              </video>
              <div className="showreel-aside__caption">
                <span>Daily practice</span>
                <span>Build in progress</span>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
