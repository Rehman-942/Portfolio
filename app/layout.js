"use client"; // Client component directive

import "@css/plugins/bootstrap-grid.css";
import { Jost } from "next/font/google";
import "./globals.css";
import "@css/plugins/magnific-popup.css";
import "@css/plugins/swiper.min.css";
import "@fonts/font-awesome/css/all.min.css";
import Head from "next/head";
import Script from "next/script";
import "@css/style.css";

const jost = Jost({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-jost',
  display: 'swap',
});

// Load the EmailJS script and initialize it directly
const emailJsInitScript = `
  (function() {
    var script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    script.onload = function() {
      if (window.emailjs) {
        emailjs.init("v_cio44FtDNs83qLs"); // Replace with your public key
      } else {
        console.error('EmailJS failed to load');
      }
    };
    document.body.appendChild(script);
  })();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jost.variable}`}>
      <Head>
        <title>Rehman Afzal - Portfolio</title>
        <meta name="description" content="Portfolio to showcase website development skills and projects" />
      </Head>
      <body className="mil-custom-scroll">
        {children}
        {/* Google Analytics */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-R31P3LD5MH" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R31P3LD5MH');
          `}
        </Script>
        {/* EmailJS Initialization */}
        <Script id="emailjs-init" dangerouslySetInnerHTML={{ __html: emailJsInitScript }} />
      </body>
    </html>
  );
}
