import { redirect } from "next/navigation";
import { SectionHeading } from "@/components/section-heading";
import { ensureSchema, getPool } from "@/lib/db";
import type { EnquiryRecord } from "@/lib/enquiries";

export const dynamic = "force-dynamic";

type AdminPageProps = {
  searchParams: Promise<{
    token?: string;
  }>;
};

async function getEnquiries() {
  await ensureSchema();
  const pool = getPool();

  const result = await pool.query<EnquiryRecord>(
    `
      SELECT id, name, email, phone, company, service, message, created_at
      FROM enquiries
      ORDER BY created_at DESC
    `
  );

  return result.rows;
}

export default async function AdminEnquiriesPage({ searchParams }: AdminPageProps) {
  const params = await searchParams;
  const configuredToken = process.env.ADMIN_DASHBOARD_TOKEN;

  if (!configuredToken || params.token !== configuredToken) {
    redirect("/contact");
  }

  const enquiries = await getEnquiries();

  return (
    <section className="section-shell py-16 sm:py-20">
      <SectionHeading
        eyebrow="Admin"
        title="Enquiries dashboard"
        description="Private view of contact submissions stored in the Postgres database."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <article className="surface p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
            Total enquiries
          </p>
          <p className="mt-4 text-4xl font-semibold text-ink">{enquiries.length}</p>
        </article>
        <article className="surface p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
            Most recent
          </p>
          <p className="mt-4 text-sm text-slate-600">
            {enquiries[0]?.created_at
              ? new Date(enquiries[0].created_at).toLocaleString("en-GB")
              : "No enquiries yet"}
          </p>
        </article>
        <article className="surface p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
            Storage
          </p>
          <p className="mt-4 text-sm text-slate-600">Postgres-backed storage for Vercel deployment.</p>
        </article>
      </div>

      <div className="mt-10 space-y-5">
        {enquiries.length === 0 ? (
          <div className="surface p-8">
            <p className="text-sm text-slate-600">No enquiries have been submitted yet.</p>
          </div>
        ) : (
          enquiries.map((enquiry) => (
            <article key={enquiry.id} className="surface p-6 sm:p-8">
              <div className="flex flex-col gap-4 border-b border-slate-200 pb-5 md:flex-row md:items-start md:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-ink">{enquiry.name}</h2>
                  <p className="mt-2 text-sm text-slate-500">
                    {enquiry.company || "Independent enquiry"} - {enquiry.service}
                  </p>
                </div>
                <p className="text-sm text-slate-500">
                  {new Date(enquiry.created_at).toLocaleString("en-GB")}
                </p>
              </div>

              <div className="mt-5 grid gap-5 md:grid-cols-3">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
                    Email
                  </p>
                  <a href={`mailto:${enquiry.email}`} className="mt-2 block text-sm text-slate-600">
                    {enquiry.email}
                  </a>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
                    Phone
                  </p>
                  <p className="mt-2 text-sm text-slate-600">{enquiry.phone || "Not provided"}</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
                    Company
                  </p>
                  <p className="mt-2 text-sm text-slate-600">{enquiry.company || "Not provided"}</p>
                </div>
              </div>

              <div className="mt-5 rounded-2xl bg-slate-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
                  Message
                </p>
                <p className="mt-3 whitespace-pre-line text-sm text-slate-600">{enquiry.message}</p>
              </div>
            </article>
          ))
        )}
      </div>
    </section>
  );
}
