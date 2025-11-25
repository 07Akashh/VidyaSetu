import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Header } from "@/components/header";
import AnimatedBackground from "@/components/AnimatedBackground";
import { FooterSection } from "@/components/footer-section";
import { AnimatedSection } from "@/components/animated-section";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VidyaSetu",
  description:
    "Transforming Indian education with smart, connected, and automated school management.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64'><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='60' fill='%2378fcd6'>⌘</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased min-h-screen relative`}>
        <AnimatedBackground />
        <Header />
        {children}
        <AnimatedSection
          className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16"
          delay={0.2}
        >
          <FooterSection />
        </AnimatedSection>
        <Analytics />
      </body>
    </html>
  );
}
