import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { TranslateAreaProvider } from "@/context/TranslateAreaContext";
import { StyleHtmlProvider } from "@/context/StyleHtmlConext";
import { SocialMediaLinksProvider } from "@/context/SocialMediaLinksContext";
import { AnimatePresence } from "framer-motion";

const japaneseSans = localFont({
  src: "../../public/fonts/japanese3017.otf",
  variable: "--font-japanese",
});
const skyerSans = localFont({
  src: "../../public/fonts/skyer.otf",
  variable: "--font-skyer",
});
const avenirBold = localFont({
  src: "../../public/fonts/avenirBold.otf",
  variable: "--font-avenirBold",
});

export const metadata: Metadata = {
  title: "SATORI",
  description: "Satori",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${japaneseSans.variable} ${skyerSans.variable} ${avenirBold.variable} h-screen w-screen bg-slate-50 antialiased dark:bg-gray-900`}
      >
        <AnimatePresence mode="wait">
          <TranslateAreaProvider>
            <StyleHtmlProvider>
              <SocialMediaLinksProvider>{children}</SocialMediaLinksProvider>
            </StyleHtmlProvider>
          </TranslateAreaProvider>
        </AnimatePresence>
      </body>
    </html>
  );
}
