import Link from "next/link";

export default function CTASection() {
  return (
    <section
      id="organizations"
      className="bg-primary/10 dark:bg-primary/20 rounded-xl p-10 lg:p-16"
      aria-labelledby="cta-heading"
      suppressHydrationWarning
    >
      <div className="flex flex-col items-center text-center gap-4">
        <h2
          id="cta-heading"
          className="text-slate-900 dark:text-white text-3xl font-bold leading-tight tracking-tight max-w-xl"
        >
          Upskill Your Team with The Corelia Academy for Organizations
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-base font-normal leading-normal max-w-2xl">
          Provide your employees with cutting-edge Web3 &amp; AI training to
          drive innovation and stay ahead of the competition.
        </p>
        <Link
          href="/contact"
          className="mt-4 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
        >
          <span className="truncate">Request a Demo</span>
        </Link>
      </div>
    </section>
  );
}
