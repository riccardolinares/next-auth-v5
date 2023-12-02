"use client";
import Script from "next/script";

export default function Pixel() {
  // return null if we're not in production or we don't have the id
  if (
    !process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ||
    process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID === "" ||
    process.env.NODE_ENV !== "production"
  ) {
    return null;
  }

  return (
    <>
      <Script
        id="gtag-pixel"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-pixel" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
          `}
      </Script>
    </>
  );
}
