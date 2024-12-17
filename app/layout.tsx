import type { Metadata } from "next";
import "./globals.css";

import CustomCursor from "@/components/custom-cursor";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "AravindCodesAllDay",
  description: "coding to crack codes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="cursor-none">
      <ThemeProvider>
        <body className="bg-black text-light">
          <CustomCursor />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
