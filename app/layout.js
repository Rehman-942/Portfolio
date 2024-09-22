import "@css/plugins/bootstrap-grid.css";
import { Jost } from "next/font/google";
import "./globals.css";

import "@css/plugins/magnific-popup.css";
import "@css/plugins/swiper.min.css";
import "@fonts/font-awesome/css/all.min.css";

import "@css/style.css";

const jost = Jost({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-jost',
  display: 'swap',
})

export const metadata = {
  title: "Rehman Afzal - Portfolio",
  description: "Portfolio to showcase website development skills and projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jost.variable}`}>
       <Head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-R31P3LD5MH"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-R31P3LD5MH');
            `,
          }}
        />
      </Head>
      <body className="mil-custom-scroll">{children}</body>
    </html>
  );
}
