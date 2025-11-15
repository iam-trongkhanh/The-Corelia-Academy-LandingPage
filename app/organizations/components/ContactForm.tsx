"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      (e.target as HTMLFormElement).reset();
    }, 3000);
  };

  return (
    <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-10">
      <div className="layout-content-container flex flex-col items-center max-w-6xl flex-1 bg-primary/10 dark:bg-primary/20 rounded-xl p-10 md:p-16">
        <div className="flex flex-col gap-8 w-full max-w-2xl">
          <div className="text-center">
            <h2
              id="contact-form"
              className="text-3xl font-bold leading-tight tracking-[-0.015em] text-text-light-primary dark:text-text-dark-primary"
            >
              Ready to Upskill Your Team?
            </h2>
            <p className="mt-2 text-base font-normal leading-normal text-text-light-secondary dark:text-text-dark-secondary">
              Fill out the form below and we&apos;ll get in touch to create a
              plan that fits your needs.
            </p>
          </div>
          {submitted ? (
            <div className="rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4 text-center">
              <p className="text-sm font-medium text-green-800 dark:text-green-200">
                Thank you! We&apos;ll be in touch soon.
              </p>
            </div>
          ) : (
            <form
              action="#"
              className="space-y-6"
              method="POST"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  className="block text-sm font-medium leading-6 text-text-light-primary dark:text-text-dark-primary"
                  htmlFor="company-name"
                >
                  Company Name
                </label>
                <div className="mt-2">
                  <input
                    autoComplete="organization"
                    className="block w-full rounded-lg border-0 py-2.5 px-4 bg-background-light dark:bg-background-dark shadow-sm ring-1 ring-inset ring-border-light dark:ring-border-dark placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 text-text-light-primary dark:text-text-dark-primary"
                    id="company-name"
                    name="company-name"
                    placeholder="Your Company Inc."
                    type="text"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-sm font-medium leading-6 text-text-light-primary dark:text-text-dark-primary"
                  htmlFor="email"
                >
                  Work Email
                </label>
                <div className="mt-2">
                  <input
                    autoComplete="email"
                    className="block w-full rounded-lg border-0 py-2.5 px-4 bg-background-light dark:bg-background-dark shadow-sm ring-1 ring-inset ring-border-light dark:ring-border-dark placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 text-text-light-primary dark:text-text-dark-primary"
                    id="email"
                    name="email"
                    placeholder="you@company.com"
                    type="email"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-sm font-medium leading-6 text-text-light-primary dark:text-text-dark-primary"
                  htmlFor="message"
                >
                  How can we help?
                </label>
                <div className="mt-2">
                  <textarea
                    className="block w-full rounded-lg border-0 py-2.5 px-4 bg-background-light dark:bg-background-dark shadow-sm ring-1 ring-inset ring-border-light dark:ring-border-dark placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 text-text-light-primary dark:text-text-dark-primary"
                    id="message"
                    name="message"
                    placeholder="Tell us about your training needs..."
                    rows={4}
                    required
                  />
                </div>
              </div>
              <div>
                <button
                  className="flex w-full justify-center rounded-lg bg-primary px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
