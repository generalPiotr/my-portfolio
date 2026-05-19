import { SkillIcon } from "@/components/SkillIcon";
import { SKILLS } from "@/lib/data";

export function Skills() {
  return (
    <section
      className="border-t border-outline-variant py-section-gap"
      id="skills"
    >
      <span id="about" className="sr-only" />
      <div className="grid grid-cols-1 gap-gutter md:grid-cols-12">
        <div className="md:col-span-4">
          <h2 className="mb-6 text-headline-lg-mobile font-semibold md:text-headline-lg">
            Technical Expertise
          </h2>
          <p className="mb-8 text-body-md text-on-surface-variant">
            A curated stack focused on performance, type safety, and scalable
            cloud infrastructure.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:col-span-8 md:grid-cols-3">
          {SKILLS.map((skill) => (
            <div
              key={skill.name}
              className="chip-bg flex flex-col items-center justify-center gap-3 p-4"
            >
              <SkillIcon id={skill.icon} />
              <span className="text-center font-mono text-label-sm">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
