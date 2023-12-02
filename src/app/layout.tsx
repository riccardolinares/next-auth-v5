import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalyticsPixel from "@/components/pixels/ga";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "SecondSoul - %s",
    default: "SecondSoul - Monetize your community with your AI Clone",
  },
  description:
    "SecondSoul is a chatbot platform that allows you to generate your AI version and offer 24/7 conversations to your fans.",
  keywords: ["secondsoul", "onlyfans", "ai", "content creator"],
  metadataBase: new URL("https://secondsoul.io"),
  icons: {
    icon: "/favicon.ico",
    apple: "favicon/apple-touch-icon.png",
    shortcut: "favicon/favicon-32x32.png",
  },

  openGraph: {
    title: "SecondSoul - Monetize your community with your AI Clone",
    description:
      "SecondSoul is a chat platform that allows you to generate your AI version and offer 24/7 conversations to your fans.",
    images: "https://secondsoul.io/social-preview.png",
    siteName: "SecondSoul",
    type: "website",
    locale: "en_US",
    url: "https://secondsoul.io",
  },
  twitter: {
    card: "summary_large_image",
    title: "SecondSoul - Monetize your community with your AI Clone",
    description:
      "SecondSoul is a chat platform that allows you to generate your AI version and offer 24/7 conversations to your fans.",
    siteId: "1722884090519498752",
    images: ["https://secondsoul.io/social-preview.png"],
  },
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAnalyticsPixel />

        {children}
      </body>
    </html>
  );
}
