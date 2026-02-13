import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        primary: "rgb(var(--primary) / <alpha-value>)",
        secondary: "rgb(var(--secondary) / <alpha-value>)",

        "primary-accent": "rgb(var(--primary-accent) / <alpha-value>)",
        "foreground-accent": "rgb(var(--foreground-accent) / <alpha-value>)",
        "hero-background": "rgb(var(--hero-background) / <alpha-value>)",
      },
      fontFamily: {
        moniqa: ['var(--font-moniqa)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
