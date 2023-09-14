import "./globals.css";
import type { Metadata } from "next";
import { Righteous } from "next/font/google";

const righteous = Righteous({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ian Streator | Portfolio",
  description:
    "Ian Streator a self-taught developer with a passion for continuous learning and building intuitive solutions with software.",
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
