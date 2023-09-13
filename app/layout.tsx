import "./globals.css";
import type { Metadata } from "next";
import { Righteous } from "next/font/google";

const righteous = Righteous({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ian Streator | Portfolio",
  description: "Ian Streator software development portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme={"space"}>
      <body className={righteous.className}>{children}</body>
    </html>
  );
}
