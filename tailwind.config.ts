import type { Config } from "tailwindcss";

const config: Config = {
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
      },
      keyframes: {
        colorsAnimated: {
          "0%": { backgroundPosition: "0%" },
          "100%": { backgroundPosition: "100%" },
        },
      },

      animation: {
        colorsAnimated: "colorsAnimated 2s infinite alternate-reverse",
      },
    },
  },
  plugins: [],
};
export default config;
