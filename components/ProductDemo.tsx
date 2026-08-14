import { Container, Section } from "./layout-shell";
import { Reveal } from "./reveal";
import { SectionLabel } from "./section-label";

const DEMO_URL = "https://pospace-demo.vercel.app/";
const techStack = ["Vue 3", "Pinia", "Tailwind CSS", "Firebase"];

export function ProductDemo() {
  return (
    <Section id="demo" className="oi-section product-demo-section">
      <Container>
        <Reveal>
          <div className="product-demo-panel">
            <div className="product-demo-browser">
              <div className="product-demo-browser__bar" aria-hidden="true">
                <span className="product-demo-browser__dots">
                  <span className="product-demo-browser__dot product-demo-browser__dot--red" />
                  <span className="product-demo-browser__dot product-demo-browser__dot--yellow" />
                  <span className="product-demo-browser__dot product-demo-browser__dot--green" />
                </span>
                <span className="product-demo-browser__address">pospace-demo.vercel.app</span>
              </div>

              <div className="product-demo-browser__viewport">
                <iframe
                  src={DEMO_URL}
                  className="product-demo-browser__iframe"
                  loading="lazy"
                  title="LO·FI POS live demo"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
                <a
                  className="product-demo-browser__open"
                  href={DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in new tab <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <div className="product-demo-copy">
              <SectionLabel>Product demo</SectionLabel>
              <h2 className="oi-h2 product-demo-copy__heading">Try a real product before you hire.</h2>
              <p className="oi-body product-demo-copy__body">
                Lofi POS is a fully working point-of-sale system — catalog, cart, and a two-step checkout with
                voucher and payment method selection. It runs on sandboxed data, so feel free to click through the
                entire flow.
              </p>

              <ul className="product-demo-tags" aria-label="Technology stack">
                {techStack.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>

              <div className="product-demo-actions">
                <a className="oi-btn oi-btn--light" href={DEMO_URL} target="_blank" rel="noopener noreferrer">
                  Try Live Demo <span aria-hidden="true">↗</span>
                </a>
                <a className="oi-btn" href="#contact">
                  Discuss your POS project
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
