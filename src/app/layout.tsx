import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CORP. | テクノロジーでビジネスを加速",
  description: "私たちは、革新的なデジタルソリューションでお客様のビジネス成長をサポートします。コンサルティング、システム開発、DX支援など幅広いサービスを提供。",
  keywords: ["コンサルティング", "システム開発", "DX", "デジタルトランスフォーメーション", "IT"],
  openGraph: {
    title: "CORP. | テクノロジーでビジネスを加速",
    description: "革新的なデジタルソリューションでビジネス成長をサポート",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} font-sans antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
