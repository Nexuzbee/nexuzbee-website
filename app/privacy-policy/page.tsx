import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Starter privacy policy template for the NexuzBee ICT website. Replace with legal review before publishing."
};

const sections = [
  {
    title: "Starter template notice",
    body: "This page is a general starter template for a UK business website and is not legal advice. It should be reviewed and tailored to your actual processes before publishing."
  },
  {
    title: "What information we collect",
    body: "We may collect information you provide through contact forms, such as your name, email address, phone number, organisation details and the content of your enquiry."
  },
  {
    title: "How we use it",
    body: "We use enquiry information to respond to messages, discuss potential services or tutoring support, and maintain business communications."
  },
  {
    title: "Contact enquiries",
    body: "If you contact us, we may retain your enquiry details so we can respond, follow up where appropriate and keep a record of relevant business communications."
  },
  {
    title: "Data retention",
    body: "We aim to retain personal information only for as long as reasonably necessary for communication, record-keeping or legitimate business purposes."
  },
  {
    title: "Your rights",
    body: "Depending on applicable law, you may have rights relating to access, correction, deletion or restriction of personal data. Any final policy should set out the exact process for making such requests."
  },
  {
    title: "Contact details",
    body: `For privacy-related enquiries, contact ${siteConfig.email}. Replace this placeholder with your final contact details and policy wording before launch.`
  }
];

export default function PrivacyPolicyPage() {
  return (
    <section className="section-shell py-16 sm:py-20">
      <SectionHeading
        eyebrow="Privacy Policy"
        title="A simple starter privacy policy for NexuzBee ICT."
        description="This page is provided as a professional placeholder and should be reviewed before live business use."
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
