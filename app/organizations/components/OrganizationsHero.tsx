import Link from "next/link";

export default function OrganizationsHero() {
  return (
    <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-10 md:py-20">
      <div className="layout-content-container flex flex-col items-center max-w-6xl flex-1">
        <div className="flex flex-col gap-6 text-center items-center">
          <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl lg:text-6xl max-w-4xl text-text-light-primary dark:text-text-dark-primary">
            The Corelia Academy – Bridging Universities and Industry in Web3
            &amp; AI Education
          </h1>
          <h2 className="text-base font-normal leading-normal text-text-light-secondary dark:text-text-dark-secondary max-w-3xl md:text-lg">
            Transform your workforce with expert-led training, designed to give
            your team the competitive edge in the digital economy.
          </h2>
          <Link
            href="#contact-form"
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 mt-4 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
          >
            <span className="truncate">Contact Us for Enterprise Plan</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
