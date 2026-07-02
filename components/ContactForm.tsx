"use client";

import { useState } from "react";

// TODO: replace with Daniel's actual Formspree endpoint (https://formspree.io)
const FORMSPREE_ENDPOINT = "https://formspree.io/f/REPLACE_ME";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card-surface p-6 text-sm text-ink">
        Thanks for reaching out. I&apos;ll get back to you soon.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-navy">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-md border border-navy/15 px-4 py-2.5 text-sm text-ink transition-colors focus:border-blue focus:outline-none focus:ring-1 focus:ring-blue"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-navy">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-md border border-navy/15 px-4 py-2.5 text-sm text-ink transition-colors focus:border-blue focus:outline-none focus:ring-1 focus:ring-blue"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-navy">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-md border border-navy/15 px-4 py-2.5 text-sm text-ink transition-colors focus:border-blue focus:outline-none focus:ring-1 focus:ring-blue"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-fit rounded-md bg-blue px-6 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-navy hover:shadow-lg hover:shadow-blue/20 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again or email me directly.
        </p>
      )}
    </form>
  );
}
