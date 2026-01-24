import type { Metadata } from "next";
import { Inter, Noto_Sans_KR, JetBrains_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-kr",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "kimfriendship.log",
  description: "매일 1% 성장하는 개발자가 되기 위한 여정을 공유합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={cn(
          `${inter.variable} ${notoKr.variable} ${mono.variable} antialiased`,
          "mx-auto flex h-screen w-full max-w-4xl flex-col p-4",
        )}
      >
        <Header />
        <main className="my-20 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
