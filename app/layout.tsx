import type {Metadata} from "next";
import {Poppins} from "next/font/google";
import {Analytics} from "@vercel/analytics/react";
import ConvexClientProvider from "@/app/ConvexClientProvider";
import {ThemeProvider} from "@/contexts/ThemeProvider";

import Progress from "@/components/Progress";
import {Toaster} from "@/components/ui/toaster";

import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.travelplannerai.online"),
  title: {
    default: "Travel Planner AI - Your Smart Travel Planner",
    template: "%s | Travel Planner AI - Your Smart Travel Planner",
  },
  description:
    "Travel Planner AI provides intelligent travel suggestions, personalized itineraries, and seamless trip planning. Plan your perfect trip with ease.",
  keywords:
    "travel planner, AI travel planner, smart travel, travel suggestions, destination insights, personalized itineraries, trip planning, travel tips, vacation planning",
  openGraph: {
    title: "Travel Planner AI - Your Smart Travel Planner",
    description:
      "Travel Planner AI provides intelligent travel suggestions, personalized itineraries, and seamless trip planning. Plan your perfect trip with ease.",
    url: "https://www.travelplannerai.online",
    type: "website",
    siteName: "TravelPlannerAI",
    images: [
      {
        url: "opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Travel Planner AI",
      },
    ],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ConvexClientProvider>{children}</ConvexClientProvider>
          <Progress />
          <Analytics />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
