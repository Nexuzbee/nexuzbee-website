import Link from "next/link";
import { Icon } from "@/components/icons";

type ServiceCardProps = {
  title: string;
  summary: string;
  icon: "monitor" | "code" | "shield" | "lock" | "spark";
};

export function ServiceCard({ title, summary, icon }: ServiceCardProps) {
  return (
    <article className="surface group p-6 transition hover:-translate-y-1 hover:border-brand-200">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
        <Icon name={icon} />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-ink">{title}</h3>
      <p className="mt-3 text-sm">{summary}</p>
      <Link
        href="/services"
        className="mt-5 inline-flex text-sm font-semibold text-brand-700 transition group-hover:text-brand-800"
      >
        View service details
      </Link>
    </article>
  );
}
