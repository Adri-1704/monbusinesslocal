import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "../globals.css";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: { default: "Administration | Monbusinesslocal", template: "%s | Admin Monbusinesslocal" },
  robots: { index: false, follow: false },
};

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={outfit.variable}>
      <body className="min-h-screen font-sans antialiased">
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
