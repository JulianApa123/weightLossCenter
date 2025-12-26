import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
