import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import GoogleAnalytics from "@/components/ga";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Grida Studios",
    template: `%s | Grida Studios`,
  },
  description: "Welcome to Grida Studios",
  metadataBase: new URL("https://studio.grida.co"),
  openGraph: {
    images: "https://studios.grida.co/og-image.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleAnalytics gaid={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ?? ""} />
      <body className={inter.className}>
        {/* TODO: fix min-h-screen */}
        {children}
      </body>
    </html>
  );
}
