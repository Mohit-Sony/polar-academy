import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
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

const chopin = localFont({
  src: "../public/fonts/Chopin-Trial-Regular.otf",
  variable: "--font-chopin",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Polar Academy | Sikar's Most Trusted JEE Foundation Program",
  description:
    "Polar JEE Academy provides structured learning, proven methods, and exceptional results for JEE Advanced and NEET. Join our expert faculty in Sikar.",
  keywords: "Polar Academy, JEE Foundation, NEET Preparation, Sikar Coaching, IIT JEE, Education",
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: "Polar Academy | Sikar's Most Trusted JEE Foundation Program",
    description: "Structured learning, proven methods, and exceptional results for JEE and NEET.",
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
      className={`${inter.variable} ${spaceGrotesk.variable} ${chopin.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <SplashScreen />
        {children}
      </body>
    </html>
  );
}
