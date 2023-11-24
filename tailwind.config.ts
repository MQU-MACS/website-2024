import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        trebuchet: ["Trebuchet MS", "sans-serif"],
      },
      colors: {
        "primary-black": "#161923",
        "primary-blue": "#95C5F1",
        white: "#FFFFFF",
      },
      animation: {
        marquee: "marquee 35s linear infinite",
        marquee2: "marquee2 35s linear infinite",
        marquee3: "marquee3 5s linear ",
        marquee4: "marquee4 5s linear ",
        marquee5: "marquee5 5s linear ",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        marquee3: {
          "0%": { transform: "translateX(20%)" },
          "100%": { transform: "translateX(0%)" },
        },
        marquee4: {
          "0%": { transform: "translateX(-20%)" },
          "100%": { transform: "translateX(0%)" },
        },
        marquee5: {
          "0%": { transform: "translateY(-40%)" },
          "100%": { transform: "translateY(0%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
