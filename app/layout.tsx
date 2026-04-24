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
    <html lang="en-US" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="stylesheet" href="/css/app.css" />
        <link rel="stylesheet" href="/css/light-mode.css" />
        <link rel="stylesheet" href="/css/textanimation.css" />
        <link rel="stylesheet" href="/css/responsive.css" />
      </head>
      <body className="body counter-scroll" suppressHydrationWarning>
        {children}
        <Script id="strip-extension-attrs" strategy="beforeInteractive">{`
          (() => {
            const attrNames = ["bis_skin_checked", "bis_size", "bis_id"];
            const selector = attrNames.map((name) => "[" + name + "]").join(",");

            const cleanNode = (node) => {
              if (!(node instanceof Element)) return;
              attrNames.forEach((name) => node.removeAttribute(name));
              if (node.querySelectorAll) {
                node.querySelectorAll(selector).forEach((child) => {
                  attrNames.forEach((name) => child.removeAttribute(name));
                });
              }
            };

            cleanNode(document.documentElement);

            const observer = new MutationObserver((mutations) => {
              mutations.forEach((mutation) => {
                if (mutation.type === "attributes") {
                  cleanNode(mutation.target);
                }

                mutation.addedNodes.forEach((node) => cleanNode(node));
              });
            });

            observer.observe(document.documentElement, {
              attributes: true,
              subtree: true,
              childList: true,
              attributeFilter: attrNames,
            });

            window.addEventListener("load", () => {
              cleanNode(document.documentElement);
              window.setTimeout(() => observer.disconnect(), 2500);
            });
          })();
        `}</Script>
        <Script src="/js/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap.min.js" strategy="beforeInteractive" />
        <Script src="/js/plugin.js" strategy="lazyOnload" />
        <Script src="/js/swiper.js" strategy="lazyOnload" />
        <Script src="/js/countto.js" strategy="lazyOnload" />
        <Script src="/js/lazysize.min.js" strategy="lazyOnload" />
        <Script src="/js/jquery.isotope.min.js" strategy="lazyOnload" />
        <Script src="/js/infinityslide.js" strategy="lazyOnload" />
        <Script src="/js/matter.min.js" strategy="beforeInteractive" />
        <Script src="/js/matter.js" strategy="lazyOnload" />
        <Script src="/js/textanimation.js" strategy="lazyOnload" />
        <Script src="/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
