import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DashboardNav from "@/components/DashboardNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sounak Ghosh | Creative Technologist & AI Strategist",
  description: "Portfolio of Sounak Ghosh, featuring Neuro-tech, XR Automation, and Agentic Workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col md:flex-row relative z-0">
        <DashboardNav />
        <main className="flex-1 w-full relative h-[100dvh] overflow-y-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
