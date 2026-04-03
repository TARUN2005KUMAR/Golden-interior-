import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Golden Interior Decors | Wood Works & Interiors",
  description: "A to Z Wooden Construction & Interior Solutions. Custom furniture, doors, windows, and pan-India delivery. Trichy, Tamil Nadu.",
  openGraph: {
    title: "Golden Interior Decors",
    description: "Premium wooden construction & interior solutions. Visit us in Trichy or contact us for pan-India delivery.",
    url: "https://goldeninteriordecors.com",
    siteName: "Golden Interior Decors",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} font-body bg-golden-sand text-golden-charcoal flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
