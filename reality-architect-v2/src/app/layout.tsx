import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const description =
  "Sounak Ghosh designs and ships XR interaction systems, spatial AI experiences for smartglasses, and the AI tooling that scales XR production.";

export const metadata: Metadata = {
  metadataBase: new URL("https://hellosounak.com"),
  title: "Sounak Ghosh | XR Designer & Creative Technologist",
  description,
  openGraph: {
    title: "Sounak Ghosh | XR Designer & Creative Technologist",
    description,
    url: "/",
    siteName: "Sounak Ghosh",
    type: "website",
    images: ["/projects/hand-signals-1pov-poster.jpg"],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}>
      <body className="min-h-dvh flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:bg-surface focus:text-ink focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to content
        </a>
        <SiteNav />
        <main id="main" className="flex-1 w-full">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
