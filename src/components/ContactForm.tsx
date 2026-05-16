"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function validateForm() {
    const nextErrors: Partial<FormState> = {};

    if (form.name.trim().length < 2) {
      nextErrors.name = "Add your name.";
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      nextErrors.email = "Use a valid email address.";
    }

    if (form.message.trim().length < 20) {
      nextErrors.message = "Write at least 20 characters.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function openMailFallback() {
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`
    );

    window.location.href = `mailto:evans.cortez23@stjohns.edu?subject=${subject}&body=${body}`;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validateForm()) {
      setStatus("Please check the highlighted fields.");
      return;
    }

    setIsSubmitting(true);
    setStatus("Sending your message...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("Message sent. Thanks for reaching out.");
        setForm(initialForm);
        setErrors({});
        return;
      }

      openMailFallback();
      setStatus("Email service is not configured yet, so your email app is opening instead.");
    } catch {
      openMailFallback();
      setStatus("Network issue detected, so your email app is opening instead.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="mb-2 block text-xs font-mono uppercase tracking-widest text-slate-500">
          Name
        </label>
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={(event) => setForm({ ...form, name: event.target.value })}
          className="w-full rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-blue-400"
          autoComplete="name"
        />
        {errors.name && <p className="mt-2 text-xs text-blue-300">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-xs font-mono uppercase tracking-widest text-slate-500">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={(event) => setForm({ ...form, email: event.target.value })}
          className="w-full rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-blue-400"
          autoComplete="email"
        />
        {errors.email && <p className="mt-2 text-xs text-blue-300">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-xs font-mono uppercase tracking-widest text-slate-500">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={(event) => setForm({ ...form, message: event.target.value })}
          className="min-h-36 w-full resize-y rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-3 text-sm leading-6 text-white outline-none transition-colors focus:border-blue-400"
        />
        {errors.message && <p className="mt-2 text-xs text-blue-300">{errors.message}</p>}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
        {status && <p className="text-xs text-slate-500">{status}</p>}
      </div>
    </form>
  );
}
