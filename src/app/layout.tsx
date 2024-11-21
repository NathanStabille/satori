import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { TranslateAreaProvider } from "@/context/TranslateAreaContext";
import { StyleHtmlProvider } from "@/context/StyleHtmlContext";
import { SocialMediaLinksProvider } from "@/context/SocialMediaLinksContext";
import { ThemeProvider } from "next-themes";
import { Bai_Jamjuree } from "next/font/google";

const japaneseSans = localFont({
  src: "../../public/fonts/japanese3017.otf",
  variable: "--font-japanese",
});
const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
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
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={`${japaneseSans.variable} ${skyerSans.variable} ${avenirBold.variable} ${baiJamjuree.className} flex h-screen w-screen items-center justify-center bg-lightBgColor antialiased transition-all dark:bg-darkBgColor`}
      >
        <ThemeProvider attribute="class">
          <TranslateAreaProvider>
            <StyleHtmlProvider>
              <SocialMediaLinksProvider>{children}</SocialMediaLinksProvider>
            </StyleHtmlProvider>
          </TranslateAreaProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
