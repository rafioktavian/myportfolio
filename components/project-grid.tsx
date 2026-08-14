"use client";

import Image from "next/image";
import { useState } from "react";
import { labProjects } from "@/lib/data/projects";
import { Container, Section } from "./layout-shell";
import { Reveal } from "./reveal";
import { SectionLabel } from "./section-label";

const INITIAL_PROJECT_COUNT = 8;

export function ProjectGrid() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? labProjects : labProjects.slice(0, INITIAL_PROJECT_COUNT);
  const remainingProjects = Math.max(labProjects.length - INITIAL_PROJECT_COUNT, 0);

  return (
    <Section id="projects" className="oi-section makers-section">
      <Container>
        <Reveal className="makers-head">
          <SectionLabel>All work</SectionLabel>
          <h2 className="oi-h2">A collection of freelance work, product builds, admin systems, and experiments.</h2>
        </Reveal>

        <div className="makers-wall" aria-label="Project collection" aria-live="polite">
          {visibleProjects.map((project, index) => {
            const content = (
              <>
                <span className="makers-wall__media">
                  <Image
                    src={project.image}
                    alt={`${project.name} - ${project.category}`}
                    width={project.width}
                    height={project.height}
                    sizes="(max-width: 767px) 50vw, 25vw"
                  />
                </span>
                <span className="makers-wall__caption">
                  <span>{project.name}</span>
                  <span className="makers-wall__tag">{project.category}</span>
                </span>
              </>
            );

            return (
              <Reveal key={project.name} delay={(index % 4) * 0.035}>
                {project.url ? (
                  <a className="makers-wall__item" href={project.url} target="_blank" rel="noopener noreferrer">
                    {content}
                  </a>
                ) : (
                  <article className="makers-wall__item">{content}</article>
                )}
              </Reveal>
            );
          })}
        </div>

        {remainingProjects > 0 ? (
          <div className="makers-more">
            <button
              type="button"
              className="oi-btn"
              aria-expanded={showAll}
              onClick={() => setShowAll((value) => !value)}
            >
              {showAll ? "Show less" : `View all projects (+${remainingProjects})`}
            </button>
          </div>
        ) : null}
      </Container>
    </Section>
  );
}
