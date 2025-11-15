import OrganizationsHeader from "./components/OrganizationsHeader";
import OrganizationsHero from "./components/OrganizationsHero";
import CoreFeatures from "./components/CoreFeatures";
import StreamlinedSection from "./components/StreamlinedSection";
import ContactForm from "./components/ContactForm";
import OrganizationsFooter from "./components/OrganizationsFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Organizations",
  description:
    "Transform your workforce with expert-led Web3 & AI training. Custom training programs, bulk course licensing, and employee progress tracking for enterprises.",
  keywords: [
    "enterprise training",
    "corporate education",
    "Web3 training for companies",
    "AI training for organizations",
    "bulk course licensing",
    "employee training programs",
    "enterprise learning solutions",
    "corporate Web3 education",
  ],
  openGraph: {
    title: "The Corelia Academy for Organizations",
    description:
      "Transform your workforce with expert-led training, designed to give your team the competitive edge in the digital economy.",
    type: "website",
  },
  alternates: {
    canonical: "/organizations",
  },
};

export default function OrganizationsPage() {
  return (
    <div
      className="relative flex w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark min-h-screen"
      suppressHydrationWarning
    >
      <div className="layout-container flex h-full grow flex-col">
        <OrganizationsHeader />
        <main className="flex-1">
          <OrganizationsHero />
          <CoreFeatures />
          <StreamlinedSection />
          <ContactForm />
        </main>
        <OrganizationsFooter />
      </div>
    </div>
  );
}
