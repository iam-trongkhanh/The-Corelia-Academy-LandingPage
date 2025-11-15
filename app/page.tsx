import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import FeaturedCourses from "./components/FeaturedCourses";
import WhyLearn from "./components/WhyLearn";
import Testimonials from "./components/Testimonials";
import CTASection from "./components/CTASection";

export default function Home() {
  return (
    <div
      className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden"
      suppressHydrationWarning
    >
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="layout-content-container flex flex-col gap-12">
              <FeaturedCourses />
              <WhyLearn />
              <Testimonials />
              <CTASection />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
