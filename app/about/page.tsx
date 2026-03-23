import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";
import { SectionHeading } from "@/components/section-heading";
import { founderProfile } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about NexuzBee ICT, the founder background, company mission and the values behind the business."
};

export default function AboutPage() {
  return (
    <>
      <section className="section-shell py-16 sm:py-20">
        <SectionHeading
          eyebrow="About NexuzBee ICT"
          title="A hybrid technology business supporting both business growth and learner development."
          description="NexuzBee ICT brings together digital services, software thinking and education-focused support under one professional brand."
        />
      </section>

      <section className="section-shell pb-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
          <article className="surface p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-ink">Founder profile</h2>
            <p className="mt-4">{founderProfile.intro}</p>
            <div className="mt-6 grid gap-4">
              {founderProfile.details.map((detail) => (
                <div key={detail} className="rounded-2xl bg-slate-50 px-4 py-4 text-sm text-slate-600">
                  {detail}
                </div>
              ))}
            </div>
          </article>

          <div className="grid gap-6">
            <article className="surface p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-ink">Our mission</h2>
              <p className="mt-4">{founderProfile.mission}</p>
            </article>

            <article className="surface p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-ink">Our values</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {founderProfile.values.map((value) => (
                  <div
                    key={value}
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm font-medium text-ink"
                  >
                    {value}
                  </div>
                ))}
              </div>
            </article>

            <article className="surface p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-ink">What that means in practice</h2>
              <p className="mt-4 text-sm">
                The business is positioned to serve organisations that need dependable digital
                support, while also helping learners who benefit from patient, structured
                technology education. The tone is professional and practical by design.
              </p>
            </article>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Want to discuss your project, support needs or tutoring goals?"
        description="NexuzBee ICT welcomes enquiries from businesses, students and organisations looking for practical technology support."
        primaryHref="/contact"
        primaryLabel="Contact NexuzBee ICT"
      />
    </>
  );
}
