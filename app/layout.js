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
      <body className="mil-custom-scroll">{children}</body>
    </html>
  );
}
