"use client";

import { ChangeEvent, FormEvent, useState, useTransition } from "react";
import { enquiryServices, type EnquiryInput } from "@/lib/enquiries";

const initialState: EnquiryInput = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "Website Development",
  message: ""
};

export function ContactForm() {
  const [formState, setFormState] = useState<EnquiryInput>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;
    setFormState((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(false);
    setFeedback(null);

    startTransition(async () => {
      try {
        const response = await fetch("/api/enquiries", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formState)
        });

        const result = (await response.json()) as {
          success: boolean;
          error?: string;
        };

        if (!response.ok || !result.success) {
          setFeedback(result.error ?? "Unable to send your enquiry right now.");
          return;
        }

        setSubmitted(true);
        setFormState(initialState);
      } catch {
        setFeedback("Unable to reach the server right now. Please try again.");
      }
    });
  }

  return (
    <div className="surface p-6 sm:p-8">
      <form className="grid gap-5" onSubmit={handleSubmit}>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Name" name="name" value={formState.name} onChange={handleChange} required />
          <Field
            label="Email"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
            required
          />
          <Field label="Phone" name="phone" value={formState.phone ?? ""} onChange={handleChange} />
          <Field
            label="Company / Organisation"
            name="company"
            value={formState.company}
            onChange={handleChange}
          />
        </div>

        <label className="grid gap-2 text-sm font-medium text-ink">
          Service interested in
          <select
            name="service"
            value={formState.service ?? ""}
            onChange={handleChange}
            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700"
          >
            {enquiryServices.map((service) => (
              <option key={service}>{service}</option>
            ))}
          </select>
        </label>

        <label className="grid gap-2 text-sm font-medium text-ink">
          Message
          <textarea
            name="message"
            value={formState.message ?? ""}
            onChange={handleChange}
            rows={6}
            required
            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700"
            placeholder="Tell us a little about your project, support need or tutoring enquiry."
          />
        </label>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            Enquiries are now stored in the local database through the Next.js backend.
          </p>
          <button
            type="submit"
            disabled={isPending}
            className="button-primary disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isPending ? "Sending..." : "Send Enquiry"}
          </button>
        </div>

        {feedback ? (
          <p className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
            {feedback}
          </p>
        ) : null}

        {submitted ? (
          <p className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
            Thanks. Your enquiry has been saved successfully and is ready for follow-up from the
            dashboard.
          </p>
        ) : null}
      </form>
    </div>
  );
}

type FieldProps = {
  label: string;
  name: keyof EnquiryInput;
  value: string;
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  required?: boolean;
  type?: string;
};

function Field({ label, name, value, onChange, required, type = "text" }: FieldProps) {
  return (
    <label className="grid gap-2 text-sm font-medium text-ink">
      {label}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700"
      />
    </label>
  );
}
