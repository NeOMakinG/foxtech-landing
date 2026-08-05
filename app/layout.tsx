import type { Metadata } from "next";
import { Anton, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://foxtechslu.com"),
  title: "FOXTECH SLU — Web, Mobile & AI",
  description: "FOXTECH conçoit et développe des sites web, applications mobiles et agents IA depuis l’Andorre.",
  openGraph: {
    title: "FOXTECH — Web · Mobile · AI",
    description: "Nous transformons les idées ambitieuses en produits digitaux.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "FOXTECH — Web, Mobile et IA depuis l’Andorre" }],
  },
  twitter: { card: "summary_large_image", title: "FOXTECH — Web · Mobile · AI", images: ["/og.png"] },
  icons: {
    icon: "/foxtech-logo.png",
    shortcut: "/foxtech-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
