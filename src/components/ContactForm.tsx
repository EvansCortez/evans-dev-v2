"use client";

import { FormEvent, useState } from "react";
import { en, type Dictionary } from "@/i18n/dictionary";

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

export default function ContactForm({
  dictionary = en.contactForm,
}: {
  dictionary?: Dictionary["contactForm"];
}) {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function validateForm() {
    const nextErrors: Partial<FormState> = {};

    if (form.name.trim().length < 2) {
      nextErrors.name = dictionary.errorName;
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      nextErrors.email = dictionary.errorEmail;
    }

    if (form.message.trim().length < 20) {
      nextErrors.message = dictionary.errorMessage;
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
      setStatus(dictionary.statusCheckFields);
      return;
    }

    setIsSubmitting(true);
    setStatus(dictionary.statusSending);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus(dictionary.statusSent);
        setForm(initialForm);
        setErrors({});
        return;
      }

      openMailFallback();
      setStatus(dictionary.statusUnconfigured);
    } catch {
      openMailFallback();
      setStatus(dictionary.statusNetworkIssue);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="mb-2 block text-xs font-mono uppercase tracking-widest text-slate-500 light:text-slate-600">
          {dictionary.name}
        </label>
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={(event) => setForm({ ...form, name: event.target.value })}
          className="w-full rounded-lg border border-slate-800 light:border-slate-300 bg-slate-950/55 light:bg-white/82 backdrop-blur-xl ring-1 ring-white/5 light:ring-black/5 px-4 py-3 text-sm text-white light:text-slate-900 outline-none transition-colors focus:border-teal-300 focus:shadow-[0_0_0_4px_rgba(45,212,191,0.12)]"
          autoComplete="name"
        />
        {errors.name && <p className="mt-2 text-xs text-amber-100 light:text-amber-800">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-xs font-mono uppercase tracking-widest text-slate-500 light:text-slate-600">
          {dictionary.email}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={(event) => setForm({ ...form, email: event.target.value })}
          className="w-full rounded-lg border border-slate-800 light:border-slate-300 bg-slate-950/55 light:bg-white/82 backdrop-blur-xl ring-1 ring-white/5 light:ring-black/5 px-4 py-3 text-sm text-white light:text-slate-900 outline-none transition-colors focus:border-teal-300 focus:shadow-[0_0_0_4px_rgba(45,212,191,0.12)]"
          autoComplete="email"
        />
        {errors.email && <p className="mt-2 text-xs text-amber-100 light:text-amber-800">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-xs font-mono uppercase tracking-widest text-slate-500 light:text-slate-600">
          {dictionary.message}
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={(event) => setForm({ ...form, message: event.target.value })}
          className="min-h-36 w-full resize-y rounded-lg border border-slate-800 light:border-slate-300 bg-slate-950/55 light:bg-white/82 backdrop-blur-xl ring-1 ring-white/5 light:ring-black/5 px-4 py-3 text-sm leading-6 text-white light:text-slate-900 outline-none transition-colors focus:border-teal-300 focus:shadow-[0_0_0_4px_rgba(45,212,191,0.12)]"
        />
        {errors.message && <p className="mt-2 text-xs text-amber-100 light:text-amber-800">{errors.message}</p>}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-md bg-teal-400 light:bg-teal-700 px-5 py-3 text-sm font-semibold text-slate-950 light:text-white transition-all duration-300 hover:bg-teal-300 hover:shadow-lg hover:shadow-teal-500/20 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? dictionary.sending : dictionary.send}
        </button>
        {status && <p className="text-xs text-slate-500 light:text-slate-600">{status}</p>}
      </div>
    </form>
  );
}
