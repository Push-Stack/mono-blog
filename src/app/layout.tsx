import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/providers";
import Header from "@/components/common/header";
import MainHeader from "@/components/common/main-header";
import { siteInfo } from "@/constants";
import Footer from "@/components/common/footer";
import { roboto, rubik } from "@/lib/fonts";

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
      <body className={`${roboto.className} ${rubik.variable}`}>
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
