import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rizon Agency - Custom E-Learning",
  description:
    "Launch your online learning platform without vendor lock-in. We build custom e-learning solutions for course creators, schools, and companies. Own 100% of your code, no templates, no revenue sharing.",
  keywords:
    "custom e-learning platform, online learning platform development, course platform development, custom LMS, school portal development, corporate training platform, Moodle alternative, Canvas alternative, educational platform development",
  authors: [{ name: "Rizon Agency" }],
  creator: "Rizon Agency",
  publisher: "Rizon Agency",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://rizon.agency"),
  alternates: {
    canonical: "https://rizon.agency",
  },
  openGraph: {
    title: "Rizon Agency - Build Your Own Online Learning Platform",
    description:
      "Custom e-learning platforms designed around how you teach. No monthly fees, no feature limits, no vendor lock-in. Built for course creators, schools, and companies.",
    url: "https://rizon.agency",
    siteName: "Rizon Agency",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/general-og.webp",
        width: 1200,
        height: 630,
        alt: "Rizon Agency - Custom E-Learning Platform Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rizon Agency - Custom E-Learning Platform Development",
    description:
      "Launch your online learning platform without monthly fees or vendor lock-in. Own your platform, own your revenue.",
    creator: "@rizon_agency",
    images: ["/general-og.webp"],
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
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "48x48",
      url: "/favicon-48x48.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "manifest",
      url: "/manifest.json",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
