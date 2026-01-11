import type { Metadata } from "next";
import { Noto_Sans, Mukta } from "next/font/google"; // Import standard Google Fonts
import "./globals.css";
import { GovHeader } from "@/components/GovHeader";
import { GovFooter } from "@/components/GovFooter";
import { AccessibilityControls } from "@/components/AccessibilityControls";
import { AutoBreadcrumb } from "@/components/AutoBreadcrumb";
import { LanguageProvider } from "@/contexts/LanguageContext";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
  weight: ["300", "400", "500", "600", "700", "800"], // Comprehensive weights
});

const mukta = Mukta({
  subsets: ["latin", "devanagari"],
  variable: "--font-mukta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Satya Verify - Government Fact Check Portal",
  description: "Official portal to verify news and combat misinformation - Government of India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable} ${mukta.variable} font-sans antialiased bg-[#fbfaf9]`}>
        <LanguageProvider>
          <GovHeader />
          <AccessibilityControls />
          <AutoBreadcrumb />
          {children}
          <GovFooter />
        </LanguageProvider>
      </body>
    </html>
  );
}
