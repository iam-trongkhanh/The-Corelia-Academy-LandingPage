const streamlinedFeatures = [
  {
    icon: "receipt_long",
    title: "Effortless Payment & Invoicing",
    description:
      "Integration with CPay for automated invoicing and simple payment tracking, reducing administrative overhead.",
  },
  {
    icon: "verified",
    title: "Simple Certification Verification",
    description:
      "A secure, blockchain-based system for HR teams to instantly verify employee certifications and credentials.",
  },
];

export default function StreamlinedSection() {
  return (
    <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-10 md:py-20">
      <div className="layout-content-container flex flex-col max-w-6xl flex-1">
        <div className="flex flex-col gap-10 px-4">
          <div className="flex flex-col gap-4 text-center items-center">
            <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em] max-w-2xl md:text-4xl text-text-light-primary dark:text-text-dark-primary">
              Streamlined for Your Success
            </h2>
            <p className="text-base font-normal leading-normal text-text-light-secondary dark:text-text-dark-secondary max-w-3xl">
              Our enterprise plan is designed to integrate seamlessly into your
              existing workflows, providing tangible benefits for your
              operations and HR teams.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-0">
            {streamlinedFeatures.map((feature, index) => (
              <article
                key={index}
                className="flex flex-1 gap-4 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6 flex-col"
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
    </div>
  );
}
