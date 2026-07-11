"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/Button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  email: string;
  company: string;
  teamSize: string;
  bottleneck: string;
  website: string;
  city: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  teamSize: "",
  bottleneck: "",
  website: "",
  city: "",
};

export function LeadForm({ className }: { className?: string }) {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>(
    {},
  );
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  function validate(values: FormState) {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!values.name.trim()) next.name = "Name is required.";
    if (!values.email.trim()) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Enter a valid email.";
    }
    if (!values.company.trim()) next.company = "Company is required.";
    if (!values.teamSize.trim()) next.teamSize = "Team size is required.";
    if (!values.bottleneck.trim()) {
      next.bottleneck = "Tell us the biggest bottleneck.";
    }
    return next;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    setMessage("");

    try {
      // Placeholder submission handler.
      // Replace siteConfig.formEndpoint with Formspree/HubSpot/Tally URL.
      if (siteConfig.formEndpoint) {
        const response = await fetch(siteConfig.formEndpoint, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...form,
            source: "company-brain-starter-landing-page",
          }),
        });
        if (!response.ok) throw new Error("Form endpoint rejected the submission.");
      } else {
        // Local placeholder success for V1 development / demo.
        await new Promise((resolve) => setTimeout(resolve, 600));
        console.info("Lead form submission (placeholder):", form);
      }

      setStatus("success");
      setMessage(
        "Got it. We will review your application and follow up about a Fit Call.",
      );
      setForm(initialState);
    } catch {
      setStatus("error");
      setMessage(
        "Something went wrong sending the form. Email us directly or try again.",
      );
    }
  }

  function fieldProps(key: keyof FormState) {
    return {
      id: key,
      name: key,
      value: form[key],
      onChange: (
        e: React.ChangeEvent<
          HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >,
      ) => setForm((prev) => ({ ...prev, [key]: e.target.value })),
      className: cn(
        "w-full rounded-[var(--radius-md)] border bg-[var(--surface-raised)] px-3.5 py-3 text-sm text-[var(--ink)] outline-none transition placeholder:text-[var(--ink-muted)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-soft)]",
        errors[key] ? "border-red-400" : "border-[var(--border)]",
      ),
    };
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-card)] sm:p-8",
        className,
      )}
      noValidate
    >
      <div className="mb-6">
        <p className="eyebrow">Apply</p>
        <h3 className="mt-2 text-2xl font-bold text-[var(--ink)]">
          Book a Fit Call
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">
          Tell us where the repeated questions pile up. We will reply with next steps
          and whether a Pilot is a fit.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-[var(--ink)]">
            Name *
          </label>
          <input {...fieldProps("name")} autoComplete="name" placeholder="Your name" />
          {errors.name ? <p className="mt-1 text-xs text-red-400">{errors.name}</p> : null}
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[var(--ink)]">
            Email *
          </label>
          <input
            {...fieldProps("email")}
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
          />
          {errors.email ? (
            <p className="mt-1 text-xs text-red-400">{errors.email}</p>
          ) : null}
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-[var(--ink)]">
            Company *
          </label>
          <input
            {...fieldProps("company")}
            autoComplete="organization"
            placeholder="Business name"
          />
          {errors.company ? (
            <p className="mt-1 text-xs text-red-400">{errors.company}</p>
          ) : null}
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="teamSize" className="mb-1.5 block text-sm font-medium text-[var(--ink)]">
            Team size *
          </label>
          <select {...fieldProps("teamSize")}>
            <option value="">Select range</option>
            <option value="1-2">1-2</option>
            <option value="3-10">3-10</option>
            <option value="11-25">11-25</option>
            <option value="26+">26+</option>
          </select>
          {errors.teamSize ? (
            <p className="mt-1 text-xs text-red-400">{errors.teamSize}</p>
          ) : null}
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="city" className="mb-1.5 block text-sm font-medium text-[var(--ink)]">
            City / region
          </label>
          <input {...fieldProps("city")} placeholder="Altoona, PA" />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="website" className="mb-1.5 block text-sm font-medium text-[var(--ink)]">
            Website (optional)
          </label>
          <input {...fieldProps("website")} placeholder="https://" />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="bottleneck"
            className="mb-1.5 block text-sm font-medium text-[var(--ink)]"
          >
            Biggest operational bottleneck *
          </label>
          <textarea
            {...fieldProps("bottleneck")}
            rows={4}
            placeholder="Example: My team asks me the same process questions every day / new hires take forever to ramp / quality depends on who is working."
          />
          {errors.bottleneck ? (
            <p className="mt-1 text-xs text-red-400">{errors.bottleneck}</p>
          ) : null}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending..." : siteConfig.primaryCta}
        </Button>
        {siteConfig.calendarUrl && siteConfig.calendarUrl !== "#apply" ? (
          <Button href={siteConfig.calendarUrl} variant="secondary" size="lg">
            Or pick a time
          </Button>
        ) : null}
      </div>

      {message ? (
        <p
          className={cn(
            "mt-4 text-sm",
            status === "success" ? "text-[var(--success)]" : "text-red-400",
          )}
          role="status"
        >
          {message}
        </p>
      ) : (
        <p className="mt-4 text-xs leading-relaxed text-[var(--ink-muted)]">
          No hard pitch. We use this to see if a Pilot is the right first step.
        </p>
      )}
    </form>
  );
}
