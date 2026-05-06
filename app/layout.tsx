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
  title: "Kautilya IIT Academy - Best IIT JEE Coaching in Sikar",
  description:
    "Join Kautilya IIT Academy in Sikar for top-quality IIT JEE coaching. Learn from expert teachers, get the best study materials, and achieve success in JEE Main & Advanced.",
  keywords: "Kautilya IIT Academy, IIT JEE coaching Sikar, best IIT coaching Sikar, JEE Main coaching, JEE Advanced coaching",
  icons: {
    icon: '/icon.jpeg',
    apple: '/apple-icon.jpeg',
  },
  openGraph: {
    title: "Kautilya IIT Academy - Best IIT JEE Coaching in Sikar",
    description: "Join Kautilya IIT Academy in Sikar for top-quality IIT JEE coaching. Achieve success in JEE Main & Advanced.",
    type: "website",
    images: ['/icon.jpeg'],
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
