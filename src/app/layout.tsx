import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers";
import Header from "@/components/common/header";
import MainHeader from "@/components/common/main-header";
import { siteInfo } from "@/constants";
import Footer from "@/components/common/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteInfo.title,
  description: siteInfo.description,
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
          <div className="mt-4">
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
