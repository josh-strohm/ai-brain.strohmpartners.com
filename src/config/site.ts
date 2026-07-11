export const siteConfig = {
  brand: "Strohm Partners",
  operator: "Josh Strohm",
  offer: "Company Brain Starter",
  frontDoor: "Company Brain Pilot",
  primaryCta: "Book a Fit Call",
  secondaryCta: "See packages",
  calendarUrl: "/book",
  calendarEmbedUrl:
    "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2lnFVDVF4oKIzE6ZHDeeyE7cLSIGsE79nUYZPvsPWxz8a6Do7nJDVXq1uwyqJVtig3pMaB3tg7?gv=true",
  // PLACEHOLDER: replace before traffic if you still use the form endpoint
  formEndpoint: "", // e.g. https://formspree.io/f/xxxxxx
  email: "hello@strohmpartners.com", // placeholder
  phone: "", // optional
};

export const navLinks = [
  { href: "/#problem", label: "The Problem" },
  { href: "/#solution", label: "What You Get" },
  { href: "/#packages", label: "Packages" },
  { href: "/#faq", label: "FAQ" },
] as const;
