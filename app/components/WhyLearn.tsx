export default function WhyLearn() {
  const features = [
    {
      icon: "group",
      title: "Industry Mentors",
      description:
        "Learn from leading experts who are actively shaping the blockchain industry.",
    },
    {
      icon: "code",
      title: "Hands-on Projects",
      description:
        "Apply your knowledge with practical, real-world projects and build a strong portfolio.",
    },
    {
      icon: "verified",
      title: "Real Certificates",
      description:
        "Earn verifiable certificates that are recognized by top companies in the tech space.",
    },
  ];

  return (
    <section
      className="flex flex-col gap-10 px-4 py-10 @container"
      aria-labelledby="why-learn-heading"
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="flex flex-col gap-4">
          <h2
            id="why-learn-heading"
            className="text-slate-900 dark:text-white tracking-tight text-3xl font-bold leading-tight @[480px]:text-4xl @[480px]:font-black max-w-[720px]"
          >
            Why Learn With The Corelia Academy?
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base font-normal leading-normal max-w-[720px]">
            We provide a comprehensive learning experience designed for success.
          </p>
        </div>
        <a
          href="#courses"
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-primary/20 text-primary text-sm font-bold leading-normal tracking-[0.015em] w-fit hover:bg-primary/30 transition-colors"
        >
          <span className="truncate">Learn More</span>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <article
            key={index}
            className="flex flex-1 gap-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-background-light dark:bg-slate-800 p-6 flex-col"
          >
            <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary">
              <span className="material-symbols-outlined">{feature.icon}</span>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight">
                {feature.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">
                {feature.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
