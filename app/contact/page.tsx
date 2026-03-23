import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Icon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact NexuzBee ICT for project enquiries, IT support, software development, website work or tutoring requests."
};

export default function ContactPage() {
  return (
    <section className="section-shell py-16 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let’s discuss your project, support request or tutoring enquiry."
            description="We welcome enquiries from businesses, students and organisations looking for practical technology support."
          />

          <div className="mt-8 grid gap-4">
            <div className="surface p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                  <Icon name="mail" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">Business email</p>
                  <a href={`mailto:${siteConfig.email}`} className="text-sm text-slate-500">
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="surface p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                  <Icon name="phone" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">Phone</p>
                  <a href={`tel:${siteConfig.phone}`} className="text-sm text-slate-500">
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="surface p-5">
              <p className="text-sm font-semibold text-ink">Typical enquiries</p>
              <p className="mt-2 text-sm">
                Website projects, custom software, IT support, digital setup, cybersecurity support
                and tutoring or training requests.
              </p>
            </div>

            <div className="surface p-5">
              <p className="text-sm font-semibold text-ink">Submission handling</p>
              <p className="mt-2 text-sm">
                Form submissions are stored in the site database through the backend. For a private
                admin view, configure <code>ADMIN_DASHBOARD_TOKEN</code> in your environment file.
              </p>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
