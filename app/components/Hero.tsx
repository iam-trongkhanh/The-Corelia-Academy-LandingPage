import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative py-20 lg:py-32">
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5">
        <div
          className="w-full h-full bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA2beISvoKt4KYNt5HlLZ8bwDKB6orA1H6xd1XhG5XCK4z3vz6EiZlp_7sCGgtyRfKOO-D9AZwXqq91CCiFSn7sqF1lIniB8BH9V5LBnHhQ01EXcVEU9FEbVyCFQj3sc4h6xpr1gv0BEjQP_QwFB90hlpyX8l3KlRykGPZ1XXM-iou1fNYmJ2ol6t1Kizm9gRzM6IC8KC_ASf7SHqTL3BVfWek8YPKy2-ZMzTROxPYq3kSOzkk59cxy1SujMxg-1fqAp0QOOK3xwvw')",
          }}
          aria-hidden="true"
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            The Corelia Academy – Bridging Universities and Industry in Web3
            &amp; AI Education
          </h1>
          <h2 className="text-slate-600 dark:text-slate-300 text-lg font-normal leading-normal max-w-3xl mx-auto">
            Unlock the future of technology with expert-led courses, hands-on
            projects, and real-world skills.
          </h2>
        </div>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Link
            href="#courses"
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
          >
            <span className="truncate">Explore Courses</span>
          </Link>
          <Link
            href="/organizations"
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-transparent text-primary text-base font-bold leading-normal tracking-[0.015em] ring-1 ring-inset ring-primary/50 hover:bg-primary/10 transition-colors"
          >
            <span className="truncate">For Organizations</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
