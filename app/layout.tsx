import type { Metadata } from "next";
import { Montserrat, Lato } from 'next/font/google';
import "./globals.css";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Lunena Clinic and Therapeutics | Medical Weight Loss Center",
    template: "%s | Lunena Clinic and Therapeutics"
  },
  description: "Evidence-based medical weight loss programs with personalized care. DEXA scans, metabolic testing, and comprehensive support from our expert team in Fountain Valley, CA.",
  keywords: ["weight loss", "medical weight loss", "obesity treatment", "DEXA scan", "metabolic testing", "Fountain Valley", "concierge medicine"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${lato.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}