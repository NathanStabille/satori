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
        className={`${japaneseSans.variable} ${skyerSans.variable} box-border h-screen w-screen bg-[url('/images/bg-light.webp')] bg-cover bg-no-repeat antialiased dark:bg-[url('/images/bg-dark.webp')]`}
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
