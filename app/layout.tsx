import type { Metadata } from "next";
import "./globals.css";

import CustomCursor from "@/components/custom-cursor";
import { ThemeProvider } from "@/components/theme-provider";

import { Playfair_Display } from "next/font/google";

export const metadata: Metadata = {
  title: "AravindCodesAllDay",
  description: "coding to crack code",
};

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.className} cursor-none`}>
      <ThemeProvider>
        <body className="bg-black text-light">
          <CustomCursor />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
