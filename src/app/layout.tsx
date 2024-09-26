import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { TranslateAreaProvider } from '@/context/TranslateAreaContext'

const japaneseSans = localFont({
  src: "../../public/fonts/japanese3017.otf",
  variable: "--font-japanese",
});
const skyerSans = localFont({
  src: "../../public/fonts/skyer.otf",
  variable: "--font-skyer",
});

export const metadata: Metadata = {
  title: "EMPTHY",
  description: "EMPTHY",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${japaneseSans.variable} ${skyerSans.variable} antialiased h-screen w-screen`}
        >
        <TranslateAreaProvider>
          {children}
        </TranslateAreaProvider>
      </body>
    </html>
  );
}
