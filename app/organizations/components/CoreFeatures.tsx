const features = [
  {
    icon: "model_training",
    title: "Custom Training Programs",
    description:
      "Tailored curriculum and expert instructors to meet your specific business needs and goals.",
  },
  {
    icon: "collections_bookmark",
    title: "Bulk Course Licensing",
    description:
      "Provide scalable and cost-effective access to our entire course library for your team.",
  },
  {
    icon: "monitoring",
    title: "Employee Progress Dashboard",
    description:
      "Track team learning, monitor performance, and measure the impact of your training investment.",
  },
];

export default function CoreFeatures() {
  return (
    <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-10">
      <div className="layout-content-container flex flex-col max-w-6xl flex-1">
        <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] px-4 pb-5 pt-5 text-center md:text-3xl text-text-light-primary dark:text-text-dark-primary">
          Core Features for Your Enterprise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {features.map((feature, index) => (
            <article
              key={index}
              className="flex flex-1 gap-4 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6 flex-col hover:shadow-lg transition-shadow"
            >
              <div className="text-primary">
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "32px" }}
                >
                  {feature.icon}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-bold leading-tight text-text-light-primary dark:text-text-dark-primary">
                  {feature.title}
                </h3>
                <p className="text-sm font-normal leading-normal text-text-light-secondary dark:text-text-dark-secondary">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
