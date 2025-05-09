import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
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
        baiJamjuree: ["var(--font-baiJamjuree)"],
        jetBrains: ["JetBrains Mono"],
        avenirBold: ["var(--font-avenirBold)"],
      },

      colors: {
        darkPrimaryColor: "#ef4444",
        darkSecondColor: "#171717",
        darkBgColor: "#0F0F0F",
        lightPrimarColor: "#655dff",
        lightSecondColor: "#f8f9fa",
        lightBgColor: "#CDCED0",
        zynexColor: "#5198FB",
        orvyaColor: "#EF7929",
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
