import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "엘쯔의 바이브코딩 - 퍼블리셔, 프런트엔드 개발자 엘쯔의 정보공유",
  description: "UX디자인, 퍼블리싱, 프런트엔드 개발 지식을 공유하는 엘쯔의 바이브코딩입니다.",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
