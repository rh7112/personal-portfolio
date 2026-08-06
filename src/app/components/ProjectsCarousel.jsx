"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

const ROTATE_INTERVAL_MS = 6000;
const VISIBLE_COUNT = 3;

export default function ProjectsCarousel({ projects }) {
  const [start, setStart] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const canRotate = projects.length > VISIBLE_COUNT;

  useEffect(() => {
    if (!isPlaying || !canRotate) {
      return;
    }
    const timer = setInterval(() => {
      setStart((current) => (current + VISIBLE_COUNT) % projects.length);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [isPlaying, canRotate, projects.length]);

  if (projects.length === 0) {
    return null;
  }

  const visibleCount = Math.min(VISIBLE_COUNT, projects.length);
  const visibleProjects = Array.from(
    { length: visibleCount },
    (_, offset) => projects[(start + offset) % projects.length],
  );

  return (
    <>
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {visibleProjects.map((project) => (
          <article
            key={project.id ?? project.title}
            className={`overflow-hidden rounded-3xl border ${project.cardClassName}`}
          >
            <div className="relative h-48 w-full">
              <Image src={project.image} alt={project.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-stone-900 dark:text-white">{project.title}</h3>
              {project.company && (
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400">
                  {project.company}
                </p>
              )}
              <p className="mt-3 text-sm leading-7 text-stone-600 dark:text-stone-300">{project.summary}</p>
              {project.techStack && (
                <p className="mt-3 text-xs uppercase tracking-[0.15em] text-stone-500 dark:text-stone-400">
                  {project.techStack}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>

      {canRotate && (
        <button
          type="button"
          onClick={() => setIsPlaying((playing) => !playing)}
          aria-label={isPlaying ? "Pause project rotation" : "Resume project rotation"}
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-stone-900/10 px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-orange-600 hover:text-stone-900 dark:border-white/10 dark:text-stone-200 dark:hover:border-orange-400 dark:hover:text-white"
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
          {isPlaying ? "Pause rotation" : "Resume rotation"}
        </button>
      )}
    </>
  );
}
