import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { TranslateAreaProvider } from "@/context/TranslateAreaContext";
import { ThemeProvider } from "next-themes";
import { Bai_Jamjuree } from "next/font/google";

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});
const skyerSans = localFont({
  src: "../../public/fonts/skyer.otf",
  variable: "--font-skyer",
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
        className={` ${skyerSans.variable} ${baiJamjuree.className} flex h-screen w-screen items-center justify-center bg-lightBgColor antialiased transition-all dark:bg-darkBgColor`}
      >
        <ThemeProvider attribute="class">
          <TranslateAreaProvider>{children}</TranslateAreaProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
