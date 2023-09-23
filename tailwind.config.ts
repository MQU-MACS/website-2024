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
    },
  },
  plugins: [],
};
export default config;
