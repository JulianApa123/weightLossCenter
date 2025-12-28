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
  title: "Weight Loss Center | Transform Your Health",
  description: "Professional weight loss solutions tailored to your needs. Expert medical guidance for sustainable results.",
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