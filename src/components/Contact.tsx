export function Contact() {
  return (
    <section
      className="border-t border-outline-variant py-section-gap"
      id="contact"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-12 text-headline-lg-mobile font-semibold md:text-headline-lg">
          Initiate Contact
        </h2>
        <form className="flex flex-col gap-6 text-left">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="font-mono text-label-sm uppercase tracking-wider text-on-surface-variant"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              className="w-full rounded border border-[#262626] bg-[#121212] p-4 text-body-md text-white transition-colors focus:border-primary-fixed-dim focus:outline-none focus:ring-0"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="font-mono text-label-sm uppercase tracking-wider text-on-surface-variant"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              className="w-full rounded border border-[#262626] bg-[#121212] p-4 text-body-md text-white transition-colors focus:border-primary-fixed-dim focus:outline-none focus:ring-0"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="font-mono text-label-sm uppercase tracking-wider text-on-surface-variant"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Project details..."
              className="w-full resize-none rounded border border-[#262626] bg-[#121212] p-4 text-body-md text-white transition-colors focus:border-primary-fixed-dim focus:outline-none focus:ring-0"
            />
          </div>
          <button
            type="submit"
            className="mt-4 self-start rounded bg-primary-fixed-dim px-8 py-4 font-mono text-label-sm text-black transition-colors duration-200 hover:bg-primary"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
