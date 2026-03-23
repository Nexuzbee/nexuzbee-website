import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";
import { Icon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore website development, custom software, IT support, cybersecurity support and digital setup services from NexuzBee ICT."
};

export default function ServicesPage() {
  return (
    <>
      <section className="section-shell py-16 sm:py-20">
        <SectionHeading
          eyebrow="Services"
          title="Professional digital services for UK businesses that need clarity, reliability and practical delivery."
          description="NexuzBee ICT supports small and medium businesses with websites, software, IT support, cybersecurity guidance and digital setup."
        />
      </section>

      <section className="section-shell pb-4">
        <div className="grid gap-8">
          {services.map((service) => (
            <article
              key={service.title}
              className="surface grid gap-8 overflow-hidden p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr]"
            >
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                  <Icon name={service.icon} className="h-7 w-7" />
                </div>
                <h2 className="mt-6 text-3xl font-semibold tracking-tight text-ink">
                  {service.title}
                </h2>
                <p className="mt-4">{service.summary}</p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-3xl bg-slate-50 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
                    Key benefits
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm text-slate-600">
                    {service.benefits.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl bg-slate-50 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
                    Ideal clients
                  </h3>
                  <p className="mt-4 text-sm text-slate-600">{service.clients}</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
                    Example deliverables
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm text-slate-600">
                    {service.deliverables.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Need a digital solution shaped around your business goals?"
        description="We can help with new websites, tailored software, digital setup and technical support for your next stage of growth."
        primaryHref="/contact"
        primaryLabel="Get a Quote"
        secondaryHref="/about"
        secondaryLabel="Learn About NexuzBee ICT"
      />
    </>
  );
}
