"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "Is this just Google Drive, Notion, or a shared folder?",
    a: "No. Folders store files. A Company Brain turns your process into plain-language answers your team can ask for, so people get help without hunting someone down.",
  },
  {
    q: "We already tried ChatGPT. How is this different?",
    a: "ChatGPT does not know your exceptions, preferences, or how you do it here. That is why the answers feel generic. We build from your real process, not public internet defaults.",
  },
  {
    q: "We are a small business, not a tech company. Will this still work?",
    a: "Yes. This is built for practical service teams, not IT departments. We keep it simple, done-for-you, and focused on one high-friction area first.",
  },
  {
    q: "Our processes are messy / we do not have clean SOPs.",
    a: "That is normal, and that is when this helps. We start with one messy real workflow, interview the people who know it, and turn it into usable answers.",
  },
  {
    q: "Is this just another chatbot?",
    a: "No. It is your process, structured into a daily answer tool for your team. The point is fewer interruptions and more consistent work, not AI theater.",
  },
  {
    q: "What if my team will not use it?",
    a: "Adoption is part of delivery. We keep the experience simple, train key users, and place the Brain where work already happens whenever we can.",
  },
  {
    q: "Can we start small?",
    a: "Yes. The Company Brain Pilot is built for that: one workflow or role, clear deliverables, and a first win in about 2-3 weeks.",
  },
  {
    q: "What about security and company data?",
    a: "We keep scope controlled, limit access, and avoid unnecessary complexity. Sensitive actions stay human-approved. We will talk through practical options on the Fit Call.",
  },
  {
    q: "You do not have big case studies yet. Why should we start?",
    a: "That is why the Pilot exists. Small scope, clear deliverables, quick usefulness, then you decide whether to expand. You are not buying a giant transformation on day one.",
  },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="space-y-3">
      {faqs.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <div
            key={item.q}
            className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)]"
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="text-base font-semibold text-[var(--ink)]">
                  {item.q}
                </span>
                <span
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--border-strong)] text-lg leading-none text-[var(--ink)] transition",
                    isOpen && "border-[var(--border-strong)] bg-[var(--surface-raised)] text-[var(--accent)]",
                  )}
                  aria-hidden
                >
                  {isOpen ? "-" : "+"}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-5 pb-5"
            >
              <p className="text-sm leading-relaxed text-[var(--ink-muted)] sm:text-base">
                {item.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
