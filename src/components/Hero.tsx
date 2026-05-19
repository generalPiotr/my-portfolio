import Image from "next/image";

export function Hero() {
  return (
    <section className="flex min-h-[min(819px,100svh)] flex-col items-center justify-center py-section-gap text-center">
      <div className="profile-photo-fade">
        <Image
          src="/peter-hero.png"
          alt="Peter Dabrowski"
          width={1024}
          height={888}
          priority
          unoptimized
          className="h-auto w-56 max-w-[min(360px,85vw)] object-contain md:w-64 lg:w-72"
        />
      </div>
      <h1 className="mb-8 max-w-4xl text-headline-lg-mobile font-bold tracking-[-0.04em] md:text-display-xl">
        Hi, I am Peter{" "}
        <span className="text-primary-fixed-dim">Dabrowski</span>
      </h1>
      <p className="mb-12 max-w-2xl text-body-lg text-on-surface-variant">
        Next-gen frontend developer. I leverage AI and modern tech to build
        websites and apps at lightning speed. Zero compromises: I combine
        rigorous testing with an obsession for detail, ensuring my code is as
        stable as it is fast to deploy.
      </p>
      <div className="flex flex-col gap-4 sm:flex-row">
        <a
          href="#contact"
          className="rounded bg-primary-fixed-dim px-8 py-4 font-mono text-label-sm text-black transition-colors duration-200 hover:bg-primary"
        >
          Get in touch
        </a>
        <a
          href="#work"
          className="rounded border border-white px-8 py-4 font-mono text-label-sm text-white transition-colors duration-200 hover:bg-white hover:text-black"
        >
          View Work
        </a>
      </div>
    </section>
  );
}
