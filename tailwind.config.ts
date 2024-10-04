import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        japanese: ["var(--font-japanese)"],
        skyer: ["var(--font-skyer)"],
        baiJamjuree: ["Bai Jamjuree"],
        jetBrains: ["JetBrains Mono"],
        avenirBold: ["var(--font-avenirBold)"],
      },

      colors: {
        darkThemeColor: "#F03373",
        lightThemeColor: "#655dff",
      },
      keyframes: {
        colorsAnimated: {
          "0%": { backgroundPosition: "0%" },
          "100%": { backgroundPosition: "100%" },
        },
        rotation: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },

      animation: {
        colorsAnimated: "colorsAnimated 2s infinite alternate-reverse",
        rotation: "rotation  5s infinite linear",
      },
    },
  },
  plugins: [],
};
export default config;
