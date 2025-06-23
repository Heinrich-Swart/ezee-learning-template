import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ezee Learning Centre",
  description:"Ezee Learning Centre offers flexible, self-paced online GED preparation with personalized tutoring, AI-powered learning paths, and SAQA-recognized certification support in South Africa.",
  icons: [
    { rel: "icon", url: "/ezee-icon.png" },
    { rel: "shortcut icon", url: "/logo.svg" }, // fallback
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <ToastContainer position="bottom-center" />
      </body>
    </html>
  );
}
