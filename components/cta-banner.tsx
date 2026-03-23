import Link from "next/link";

type CtaBannerProps = {
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CtaBanner({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel
}: CtaBannerProps) {
  return (
    <section className="section-shell mt-20">
      <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-12 text-white shadow-soft sm:px-10 lg:px-12">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.3),transparent_50%)] lg:block" />
        <div className="relative max-w-3xl">
          <span className="eyebrow border-brand-400/30 bg-white/10 text-brand-200">
            Start a conversation
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-slate-300">{description}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={primaryHref} className="button-primary bg-white text-slate-950 hover:bg-slate-100">
              {primaryLabel}
            </Link>
            {secondaryHref && secondaryLabel ? (
              <Link
                href={secondaryHref}
                className="button-secondary border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
              >
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
