import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";
import { SectionHeading } from "@/components/section-heading";
import {
  academyAudience,
  academySubjects,
  learningFormats,
  siteConfig
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Academy",
  description:
    "NexuzBee Academy provides tutoring and technology training in programming, Python, web development, computer science and digital skills."
};

export default function AcademyPage() {
  return (
    <>
      <section className="section-shell py-16 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="NexuzBee Academy"
              title="Tutoring and technology training designed to be clear, structured and supportive."
              description="NexuzBee Academy supports students, beginners and aspiring professionals who want practical guidance in programming, digital skills and computer science."
            />
            <p className="mt-6 max-w-2xl text-lg">
              Under the same {siteConfig.name} brand, the academy arm helps learners build
              confidence with structured support, patient explanations and practical skills they
              can use.
            </p>
          </div>
          <div className="surface p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
              Learning formats
            </p>
            <div className="mt-5 grid gap-3">
              {learningFormats.map((format) => (
                <div key={format} className="rounded-2xl bg-slate-50 px-4 py-4 text-sm text-slate-600">
                  {format}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-12">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="surface p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-ink">Who it is for</h2>
            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              {academyAudience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="surface p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-ink">Subjects offered</h2>
            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              {academySubjects.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section-shell py-12">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="surface p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-ink">Why learn with us</h2>
            <div className="mt-5 grid gap-4">
              {[
                "Support shaped by teaching, research and practical computing experience.",
                "Explanations aimed at understanding, not memorisation alone.",
                "Sessions that can be adapted for coursework, projects, revision or skill-building.",
                "A friendly but professional approach that keeps learning focused and encouraging."
              ].map((item) => (
                <p key={item} className="rounded-2xl bg-slate-50 px-4 py-4 text-sm">
                  {item}
                </p>
              ))}
            </div>
          </article>
          <article className="surface p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-ink">How sessions can work</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["1-to-1 support", "Focused sessions tailored to your learning pace and goals."],
                ["Small group classes", "Structured sessions for peers or small cohorts."],
                ["Beginner pathways", "Clear introductions to coding, Python and web basics."],
                ["University support", "Guidance for selected computer science topics and assignments."]
              ].map(([title, description]) => (
                <div key={title} className="rounded-2xl bg-slate-50 p-5">
                  <h3 className="text-base font-semibold text-ink">{title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{description}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <CtaBanner
        title="Looking for tutoring, digital skills training or programming support?"
        description="Enquire about 1-to-1 support, small group sessions or structured guidance for learners building technical confidence."
        primaryHref="/contact"
        primaryLabel="Enquire About Tutoring"
        secondaryHref="/services"
        secondaryLabel="View Business Services"
      />
    </>
  );
}
