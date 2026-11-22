import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/shared/ContactForm";
import "./globals.css";
import "@/styles/sections.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn(outfit.variable, "font-sans")}>
      <body>
        <Header />
        {children}
        <ContactForm />
        <Footer />
      </body>
    </html>
  );
}
