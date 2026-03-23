import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Starter cookie policy template for the NexuzBee ICT website. Replace with your final cookie and consent approach before launch."
};

const sections = [
  {
    title: "Starter template notice",
    body: "This is a simple placeholder cookie policy for a UK business website. It is intended as a starting point only and should be reviewed before publication."
  },
  {
    title: "What cookies are",
    body: "Cookies are small text files placed on a device when visiting a website. They can help websites function properly, remember preferences and support measurement or analytics."
  },
  {
    title: "Essential cookies",
    body: "This website may use essential cookies that are necessary for core site functionality, usability or security."
  },
  {
    title: "Analytics and non-essential cookies",
    body: "If analytics or other non-essential cookies are added in future, appropriate consent should be obtained before those cookies are set, where required by law."
  },
  {
    title: "Managing cookies",
    body: "Users can manage or disable cookies through their browser settings. Doing so may affect how some parts of a website function."
  }
];

export default function CookiePolicyPage() {
  return (
    <section className="section-shell py-16 sm:py-20">
      <SectionHeading
        eyebrow="Cookie Policy"
        title="A simple placeholder cookie policy for NexuzBee ICT."
        description="Keep this page as a starter template until your final cookie and consent setup is confirmed."
      />

      <div className="mt-10 space-y-5">
        {sections.map((section) => (
          <article key={section.title} className="surface p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-ink">{section.title}</h2>
            <p className="mt-4 text-sm">{section.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
