import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

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
  description:"Ezee Learning Centre offers flexible, self-paced online American Curriculum preparation with personalized tutoring, AI-powered learning paths, and SAQA-recognized certification support in South Africa.",
  icons: {
  icon: "broswer-icon-background.ico",
  shortcut: "broswer-icon-background.ico",
}
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
