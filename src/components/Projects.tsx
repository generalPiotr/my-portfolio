import Image from "next/image";
import { PROJECTS } from "@/lib/data";

export function Projects() {
  return (
    <section
      className="border-t border-outline-variant py-section-gap"
      id="work"
    >
      <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="text-headline-lg-mobile font-semibold md:text-headline-lg">
          Selected Works
        </h2>
        <a
          href="#"
          className="flex items-center gap-2 font-mono text-label-sm text-primary-fixed-dim transition-colors hover:text-primary"
        >
          View All Projects
          <span
            className="material-symbols-outlined"
            style={{ fontSize: 16 }}
          >
            arrow_forward
          </span>
        </a>
      </div>

      <div className="flex flex-col gap-gutter">
        {PROJECTS.map((project) => (
          <article
            key={project.title}
            className="card-bg group flex cursor-pointer flex-col transition-colors duration-300"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-surface-container-high">
              <Image
                src={project.image}
                alt={project.alt}
                fill
                className={`grayscale transition-all duration-500 group-hover:grayscale-0 ${
                  project.imageFit === "contain"
                    ? "object-contain object-left"
                    : "object-cover"
                }`}
                sizes="100vw"
              />
            </div>
            <div className="flex flex-grow flex-col p-8">
              <h3 className="mb-4 text-headline-md font-semibold">
                {project.title}
              </h3>
              <p className="mb-8 flex-grow text-body-md text-on-surface-variant">
                {project.description.split("\n").map((line, i) => (
                  <span key={i}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </p>
              <div className="mt-auto flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="chip-bg rounded-full px-3 py-1 font-mono text-xs text-label-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
