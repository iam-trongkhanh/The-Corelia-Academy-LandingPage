import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://corelia-academy.com"
  ),
  title: {
    default:
      "The Corelia Academy – Bridging Universities and Industry in Web3 & AI Education",
    template: "%s | The Corelia Academy",
  },
  description:
    "Unlock the future of technology with expert-led courses, hands-on projects, and real-world skills in Web3 and AI. Learn from industry mentors and earn verifiable certificates recognized by top tech companies.",
  keywords: [
    "Web3 education",
    "AI courses",
    "blockchain training",
    "smart contract development",
    "DeFi strategies",
    "cryptocurrency education",
    "blockchain certification",
    "Web3 academy",
    "AI training",
    "blockchain fundamentals",
    "university-industry bridge",
    "tech education",
  ],
  authors: [{ name: "The Corelia Academy" }],
  creator: "The Corelia Academy",
  publisher: "The Corelia Academy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "The Corelia Academy",
    title:
      "The Corelia Academy – Bridging Universities and Industry in Web3 & AI Education",
    description:
      "Unlock the future of technology with expert-led courses, hands-on projects, and real-world skills in Web3 and AI.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Corelia Academy - Web3 & AI Education",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "The Corelia Academy – Bridging Universities and Industry in Web3 & AI Education",
    description:
      "Unlock the future of technology with expert-led courses, hands-on projects, and real-world skills in Web3 and AI.",
    images: ["/og-image.jpg"],
    creator: "@coreliaacademy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  category: "education",
  classification: "Educational Technology",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

// JSON-LD Structured Data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "The Corelia Academy",
  description:
    "Bridging Universities and Industry in Web3 & AI Education. Expert-led courses, hands-on projects, and real-world skills.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://corelia-academy.com",
  logo: `${
    process.env.NEXT_PUBLIC_SITE_URL || "https://corelia-academy.com"
  }/logo.png`,
  sameAs: [
    "https://twitter.com/coreliaacademy",
    "https://linkedin.com/company/corelia-academy",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    availableLanguage: "English",
  },
  offers: {
    "@type": "Offer",
    category: "Education",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} font-display antialiased`}
        suppressHydrationWarning
        style={{ minHeight: "100vh" }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
