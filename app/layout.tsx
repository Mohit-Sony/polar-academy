import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "EduLearn — Best Online Platform for Education",
  description:
    "Online courses from the world's leading experts. Join 17 million learners today and advance your career with our flexible, expert-led online education platform.",
  keywords: "online learning, e-learning, courses, education, skills, certification",
  openGraph: {
    title: "EduLearn — Best Online Platform for Education",
    description: "Join 17 million learners. Expert-led online courses at your own pace.",
    type: "website",
  },
};

import SplashScreen from "@/components/layout/SplashScreen";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <SplashScreen />
        {children}
      </body>
    </html>
  );
}
