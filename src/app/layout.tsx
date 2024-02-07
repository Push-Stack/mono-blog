import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers";
import Header from "@/components/common/header";
import MainHeader from "@/components/common/main-header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mono Blog.",
  description:
    "Welcome to our vibrant blog hub, where inspiration meets insight! Discover a diverse array of articles covering topics from technology to travel, fashion to food, and everything in between",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <MainHeader />
          {children}
        </Providers>
      </body>
    </html>
  );
}
