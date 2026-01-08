import type { Metadata, Viewport } from "next"

import { Analytics } from "@vercel/analytics/next"

import { SpeedInsights } from "@vercel/speed-insights/next"
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";

export const metadata: Metadata = {
  title: "Ring - 원클릭 성적 확인기",
  description: "간결하고 우아한 학업 성적 확인 도구, 자동 성적 가져오기 기능 포함",
  referrer: "no-referrer"
};
export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1.0,
    maximumScale: 1.0,
    userScalable: false
}

export default function Layout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <Analytics />
      <SpeedInsights />
      <GoogleAnalytics gaId="G-SBWMBXBQJC" />
    </html>
  );
}
