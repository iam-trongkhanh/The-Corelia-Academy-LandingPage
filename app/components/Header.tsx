"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div
        className="w-full bg-slate-100 dark:bg-slate-800"
        suppressHydrationWarning
      >
        <div className="flex items-center justify-end px-4 sm:px-6 lg:px-8 xl:px-12 py-2">
          <div className="flex items-center gap-6 text-xs font-medium text-slate-600 dark:text-slate-300">
            <Link
              href="#learners"
              className="hover:text-primary transition-colors"
            >
              For Learners
            </Link>
            <Link
              href="/organizations"
              className="hover:text-primary transition-colors"
            >
              For Organizations
            </Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className="sticky top-0 z-50 w-full border-b border-solid border-slate-200 dark:border-slate-700 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md"
        suppressHydrationWarning
      >
        <div className="flex items-center justify-between whitespace-nowrap px-4 sm:px-6 lg:px-8 xl:px-12 py-4">
          {/* Logo and name */}
          <Link
            href="/"
            className="flex items-center gap-4 text-slate-900 dark:text-white"
          >
            <div className="size-6 text-primary">
              <svg
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <g clipPath="url(#clip0_6_535)">
                  <path
                    clipRule="evenodd"
                    d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_6_535">
                    <rect fill="white" height="48" width="48" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h1 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">
              The Corelia Academy
            </h1>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex flex-1 items-center justify-end gap-8">
            <div className="flex items-center gap-9">
              <Link
                href="/contact"
                className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary transition-colors"
              >
                Contact
              </Link>
              <a
                href="http://localhost:5173/profile"
                className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary transition-colors"
              >
                View Profile
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-slate-900 dark:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="material-symbols-outlined">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-700 bg-background-light dark:bg-background-dark">
            <div className="px-4 py-4 space-y-3">
              <Link
                href="/contact"
                className="block text-slate-700 dark:text-slate-300 text-sm font-medium hover:text-primary dark:hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <a
                href="http://localhost:5173/profile"
                className="block text-slate-700 dark:text-slate-300 text-sm font-medium hover:text-primary dark:hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                View Profile
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
