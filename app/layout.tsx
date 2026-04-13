import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Vineta - Multipurpose eCommerce HTML Template",
  description:
    "Discover our Template, crafted for seamless performance, modern design, and unmatched versatility.",
  authors: [{ name: "themesflat.com" }],
  openGraph: {
    title: "HTML Starter Template by Vineta",
    description: "Free responsive HTML template for modern web projects.",
    url: "https://themesflat.co/html/vineta/index.html",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HTML Starter Template by Vineta",
  },
  icons: {
    icon: "/images/logo/Favicon.png",
    apple: "/images/logo/Favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="stylesheet" href="/css/app.css" />
        <link rel="stylesheet" href="/css/textanimation.css" />
        <link rel="stylesheet" href="/css/responsive.css" />
      </head>
      <body className="body counter-scroll" suppressHydrationWarning>
        {children}
        <Script src="/js/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap.min.js" strategy="beforeInteractive" />
        <Script src="/js/plugin.js" strategy="afterInteractive" />
        <Script src="/js/swiper.js" strategy="afterInteractive" />
        <Script src="/js/countto.js" strategy="afterInteractive" />
        <Script src="/js/lazysize.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.isotope.min.js" strategy="afterInteractive" />
        <Script src="/js/infinityslide.js" strategy="afterInteractive" />
        <Script src="/js/matter.min.js" strategy="afterInteractive" />
        <Script src="/js/matter.js" strategy="afterInteractive" />
        <Script src="/js/textanimation.js" strategy="afterInteractive" />
        <Script src="/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
