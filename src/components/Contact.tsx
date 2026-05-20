"use client";

import { useState, type FormEvent } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const body = (await response.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!response.ok) {
        throw new Error(body.error ?? "Failed to send message.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to send message.",
      );
    }
  }

  return (
    <section
      className="border-t border-outline-variant py-section-gap"
      id="contact"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-12 text-headline-lg-mobile font-semibold md:text-headline-lg">
          Initiate Contact
        </h2>
        <form
          className="flex flex-col gap-6 text-left"
          onSubmit={handleSubmit}
        >
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
              required
              autoComplete="name"
              disabled={status === "loading"}
              placeholder="John Doe"
              className="w-full rounded border border-[#262626] bg-[#121212] p-4 text-body-md text-white transition-colors focus:border-primary-fixed-dim focus:outline-none focus:ring-0 disabled:opacity-60"
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
              required
              autoComplete="email"
              disabled={status === "loading"}
              placeholder="john@example.com"
              className="w-full rounded border border-[#262626] bg-[#121212] p-4 text-body-md text-white transition-colors focus:border-primary-fixed-dim focus:outline-none focus:ring-0 disabled:opacity-60"
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
              required
              disabled={status === "loading"}
              placeholder="Project details..."
              className="w-full resize-none rounded border border-[#262626] bg-[#121212] p-4 text-body-md text-white transition-colors focus:border-primary-fixed-dim focus:outline-none focus:ring-0 disabled:opacity-60"
            />
          </div>

          {status === "success" && (
            <p className="font-mono text-label-sm text-primary" role="status">
              Message sent. I will get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="font-mono text-label-sm text-red-400" role="alert">
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-4 self-start rounded bg-primary-fixed-dim px-8 py-4 font-mono text-label-sm text-black transition-colors duration-200 hover:bg-primary disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
