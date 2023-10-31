import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

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
      <body className={inter.className}>
        {/* TODO: fix min-h-screen */}
        <main className="md:pl-12 md:pr-12 m-auto max-w-screen-2xl pl-4 pr-4 min-h-screen">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
