import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Chatbot from "@/components/Chatbot";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vatsal Kumar | AI Engineer & Full Stack Developer",
  description:
    "Vatsal Kumar builds AI agents and full stack products that ship, from LangGraph agents in production to award-winning hackathon prototypes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        <div className="grain-overlay" aria-hidden="true" />
        <CustomCursor />
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
