"use client";

import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { projects } from "@/lib/data/projects";

const SLIDE_DURATION = 3200;

export function ProjectShowreel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const reduceMotion = useReducedMotion();
  const activeProject = projects[activeIndex];

  useEffect(() => {
    if (!isPlaying || isHovered || reduceMotion) return;

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % projects.length);
    }, SLIDE_DURATION);

    return () => window.clearInterval(timer);
  }, [isHovered, isPlaying, reduceMotion]);

  const showPrevious = () => {
    setActiveIndex((index) => (index - 1 + projects.length) % projects.length);
  };

  const showNext = () => {
    setActiveIndex((index) => (index + 1) % projects.length);
  };

  return (
    <div
      className="showreel-reel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsHovered(true)}
      onBlurCapture={() => setIsHovered(false)}
      aria-roledescription="carousel"
      aria-label="Project slideshow"
    >
      <div key={activeProject.name} className="showreel-slide">
        <Image
          src={activeProject.image}
          alt={`${activeProject.name} project preview`}
          fill
          priority={activeIndex === 0}
          sizes="(max-width: 767px) 100vw, 66vw"
          className="showreel-reel__image"
        />
      </div>

      <div className="showreel-caption" aria-live="polite">
        <span>{activeProject.name}</span>
        <span>{activeProject.category} · {activeProject.year}</span>
      </div>

      <div className="showreel-controls">
        <span className="showreel-counter">
          {String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
        </span>
        <button type="button" onClick={showPrevious} aria-label="Previous project">
          <ChevronLeft size={15} aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => setIsPlaying((value) => !value)}
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          aria-pressed={!isPlaying}
        >
          {isPlaying ? <Pause size={13} aria-hidden="true" /> : <Play size={13} aria-hidden="true" />}
        </button>
        <button type="button" onClick={showNext} aria-label="Next project">
          <ChevronRight size={15} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
