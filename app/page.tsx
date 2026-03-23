import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/cta-banner";
import { ServiceCard } from "@/components/service-card";
import { SectionHeading } from "@/components/section-heading";
import {
  academySubjects,
  founderProfile,
  processSteps,
  services,
  siteConfig,
  testimonials,
  whyChooseUs
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "NexuzBee ICT | Technology, Education & Innovation",
  description:
    "Professional websites, software development, IT support and tutoring for UK businesses and learners."
};

export default function HomePage() {
  return (
    <>
      <section className="section-shell py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="animate-fade-up">
            <span className="eyebrow">UK business technology partner</span>
            <h1 className="max-w-3xl font-[var(--font-display)] text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
              NexuzBee ICT
              <span className="mt-2 block text-brand-800">{siteConfig.mainTagline}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg">
              We help businesses build their digital presence and support learners with practical
              technology education. From websites and software to IT support and tutoring, we
              deliver smart solutions with a personal approach.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="button-primary">
                Get a Quote
              </Link>
              <Link href="/services" className="button-secondary">
                Explore Services
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ["Business websites", "Professional digital presence for service-led organisations."],
                ["Software & IT", "Practical systems, support and dependable guidance."],
                ["Tutoring & training", "Clear learning support for students and beginners."]
              ].map(([title, copy]) => (
                <div key={title} className="rounded-3xl border border-slate-200/80 bg-white/80 p-4 shadow-panel">
                  <p className="text-sm font-semibold text-ink">{title}</p>
                  <p className="mt-2 text-sm text-slate-500">{copy}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="surface relative overflow-hidden p-8 sm:p-10">
            <div className="absolute right-4 top-4 h-28 w-28 rounded-full bg-brand-100 blur-2xl" />
            <div className="absolute bottom-4 left-4 h-32 w-32 rounded-full bg-teal-100 blur-2xl" />
            <div className="relative animate-float">
              <div className="rounded-[2rem] border border-white/70 bg-slate-950 p-6 text-white shadow-soft">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-200">
                  Smart digital support
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                  Built for businesses and learners
                </h2>
                <div className="mt-6 grid gap-4">
                  {[
                    "Professional websites and software",
                    "IT support and digital setup",
                    "Tutoring, mentoring and structured training"
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-5 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-panel">
                <p className="text-sm font-semibold text-brand-700">Why clients enquire</p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {[
                    ["Professional presence", "Clear messaging and modern presentation"],
                    ["Practical support", "Useful technology without unnecessary complexity"]
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl bg-slate-50 p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{label}</p>
                      <p className="mt-2 text-sm font-medium text-ink">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-8 sm:py-12">
        <SectionHeading
          eyebrow="Why choose NexuzBee"
          title="A business-ready approach grounded in technical and educational experience."
          description="We combine practical digital delivery with clear communication, making technology easier to use and easier to trust."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {whyChooseUs.map((item) => (
            <article key={item.title} className="surface p-6">
              <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 text-sm">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell py-14 sm:py-18">
        <SectionHeading
          eyebrow="Services overview"
          title="Digital services for SMEs, professionals and growing organisations."
          description="From business websites to software, IT support and digital setup, NexuzBee ICT helps clients move forward with confidence."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              summary={service.summary}
              icon={service.icon}
            />
          ))}
        </div>
      </section>

      <section className="section-shell py-14 sm:py-18">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="surface p-8">
            <span className="eyebrow">NexuzBee Academy</span>
            <h2 className="section-title">Tutoring and technology training with a practical focus.</h2>
            <p className="mt-4">
              NexuzBee Academy supports students, beginners and aspiring professionals who want
              practical guidance in programming, digital skills and computer science.
            </p>
            <Link href="/academy" className="button-primary mt-6">
              View Tutoring Options
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {academySubjects.map((subject) => (
              <div key={subject} className="rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-panel">
                <p className="text-sm font-semibold text-ink">{subject}</p>
                <p className="mt-2 text-sm text-slate-500">
                  Structured support designed to be clear, supportive and relevant to real learning
                  needs.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-14 sm:py-18">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="About the founder"
              title="A credible blend of research, teaching, leadership and applied technology."
              description={founderProfile.intro}
            />
            <ul className="mt-6 space-y-3">
              {founderProfile.details.slice(0, 3).map((detail) => (
                <li
                  key={detail}
                  className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-4 text-sm text-slate-600 shadow-panel"
                >
                  {detail}
                </li>
              ))}
            </ul>
            <Link href="/about" className="button-secondary mt-6">
              Read More
            </Link>
          </div>
          <div className="surface p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
              Founder snapshot
            </p>
            <div className="mt-6 grid gap-5">
              {[
                "UK-based PhD researcher in Computer Science at the University of Essex",
                "Specialisation in steganography and computing",
                "Experience across education, software, operations and training"
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 px-4 py-4 text-sm text-slate-600">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-14 sm:py-18">
        <SectionHeading
          eyebrow="How we work"
          title="A clear process from first conversation to practical delivery."
          align="center"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => (
            <article key={step.title} className="surface p-6">
              <p className="text-sm font-semibold text-brand-700">0{index + 1}</p>
              <h3 className="mt-4 text-xl font-semibold text-ink">{step.title}</h3>
              <p className="mt-3 text-sm">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell py-14 sm:py-18">
        <SectionHeading
          eyebrow="Testimonials"
          title="Professional, supportive and practical."
          description="These are placeholder testimonials to help structure the site until real client feedback is ready."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.quote} className="surface p-6">
              <p className="text-base text-slate-600">“{testimonial.quote}”</p>
              <footer className="mt-6 text-sm font-semibold text-ink">{testimonial.role}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Ready to discuss a website, software project, IT support or tutoring enquiry?"
        description="We welcome enquiries from businesses, students and organisations looking for practical technology support."
        primaryHref="/contact"
        primaryLabel="Book a Free Consultation"
        secondaryHref="/academy"
        secondaryLabel="Enquire About Tutoring"
      />
    </>
  );
}
