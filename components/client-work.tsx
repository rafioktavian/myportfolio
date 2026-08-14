"use client";

import Image from "next/image";
import { useState } from "react";
import { featuredProjects } from "@/lib/data/projects";
import { Container, Section } from "./layout-shell";
import { Reveal } from "./reveal";
import { SectionLabel } from "./section-label";

type Preview = {
  image: string;
  name: string;
  x: number;
  y: number;
};

export function ClientWork() {
  const [preview, setPreview] = useState<Preview | null>(null);

  return (
    <Section id="work" className="oi-section">
      <Container>
        <Reveal>
          <div className="oi-section-head">
            <SectionLabel>Client work</SectionLabel>
            <h2 className="oi-h2">
              Client work shipped <span className="serif-word">end to end</span>, from requirements to production
              build.
            </h2>
          </div>
        </Reveal>

        <div className="index-list" aria-label="Selected work">
          {featuredProjects.map((project, index) => {
            const row = (
              <>
                <span className="index-list__name">{project.name}</span>
                <span className="index-list__type">{project.category}</span>
                <span className="index-list__year">{project.year}</span>
                <span className="index-list__strip" aria-hidden="true">
                  <span className="index-list__strip-image">
                    <Image src={project.image} alt="" fill sizes="50vw" className="object-cover" />
                  </span>
                  <span className="index-list__strip-image">
                    <Image src={project.image} alt="" fill sizes="50vw" className="object-cover" />
                  </span>
                </span>
              </>
            );

            const handleMove = (event: React.MouseEvent<HTMLElement>) => {
              setPreview({ image: project.image, name: project.name, x: event.clientX, y: event.clientY });
            };

            return (
              <Reveal key={project.name} delay={index * 0.04}>
                {project.url ? (
                  <a
                    className="index-list__row"
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={handleMove}
                    onMouseMove={handleMove}
                    onMouseLeave={() => setPreview(null)}
                  >
                    {row}
                  </a>
                ) : (
                  <article className="index-list__row" onMouseEnter={handleMove} onMouseMove={handleMove} onMouseLeave={() => setPreview(null)}>
                    {row}
                  </article>
                )}
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.12} className="section-action">
          <a className="oi-btn" href="#projects">
            View all projects <span aria-hidden="true">↗</span>
          </a>
        </Reveal>

        <div
          className="index-list__preview"
          data-on={preview ? "1" : "0"}
          style={preview ? { left: preview.x, top: preview.y } : undefined}
          aria-hidden="true"
        >
          <div className="index-list__preview-inner">
            {preview ? <Image src={preview.image} alt="" fill sizes="24vw" className="object-cover" /> : null}
          </div>
        </div>
      </Container>
    </Section>
  );
}
