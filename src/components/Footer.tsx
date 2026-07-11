import Link from "next/link";
import { Container } from "@/components/Container";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-muted)]/80 py-12">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-sm">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--border-strong)] bg-[var(--surface-raised)] text-sm font-bold text-[var(--accent)]">
              SP
            </span>
            <div>
              <p className="text-sm font-bold text-[var(--ink)]">{siteConfig.offer}</p>
              <p className="text-xs text-[var(--ink-muted)]">{siteConfig.brand}</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-[var(--ink-muted)]">
            Done-for-you Company Brains for service teams. Built from how your business
            actually works, not from generic AI demos.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:gap-12">
          <div>
            <p className="text-sm font-semibold text-[var(--ink)]">Navigate</p>
            <ul className="mt-3 space-y-2 text-sm text-[var(--ink-muted)]">
              <li>
                <Link href="/#problem" className="hover:text-[var(--ink)]">
                  The Problem
                </Link>
              </li>
              <li>
                <Link href="/#solution" className="hover:text-[var(--ink)]">
                  What You Get
                </Link>
              </li>
              <li>
                <Link href="/#packages" className="hover:text-[var(--ink)]">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-[var(--ink)]">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href={siteConfig.calendarUrl} className="hover:text-[var(--ink)]">
                  Book a Fit Call
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-[var(--ink)]">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-[var(--ink-muted)]">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-[var(--ink)]"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <Link href={siteConfig.calendarUrl} className="hover:text-[var(--ink)]">
                  Book a Fit Call
                </Link>
              </li>
              <li className="text-[var(--ink-muted)]">
                Operated by {siteConfig.operator}
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <Container className="mt-10 border-t border-[var(--border)] pt-6">
        <p className="text-xs text-[var(--ink-muted)]">
          © {new Date().getFullYear()} {siteConfig.brand}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
