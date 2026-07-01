import type { Metadata } from "next";
import { Manrope, Unbounded } from "next/font/google";
import { LocaleProvider } from "@/lib/locale";
import { Atmosphere } from "@/components/Atmosphere";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"],
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"],
  weight: ["400", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Nataliia Viktorova — Senior AI Creator",
  description:
    "Senior AI Creator building AI production pipelines, with a background in graphic and motion design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uk"
      className={`${manrope.variable} ${unbounded.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-fg font-sans">
        <LocaleProvider>
          <Atmosphere />
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
