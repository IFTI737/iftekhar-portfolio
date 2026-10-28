import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Effects from "@/components/Effects";
import { profile } from "@/data/site";
import "./globals.css";

const display = localFont({
  src: "./fonts/bricolage-grotesque-latin-wght-normal.woff2",
  variable: "--font-display",
  weight: "200 800",
  display: "swap",
});
const body = localFont({
  src: "./fonts/dm-sans-latin-wght-normal.woff2",
  variable: "--font-body",
  weight: "100 1000",
  display: "swap",
});
const mono = localFont({
  src: "./fonts/jetbrains-mono-latin-wght-normal.woff2",
  variable: "--font-mono",
  weight: "100 800",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${profile.name} — ${profile.designation}`,
    template: `%s — ${profile.name}`,
  },
  description: profile.intro,
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — ${profile.designation}`,
    description: profile.intro,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <Effects />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
