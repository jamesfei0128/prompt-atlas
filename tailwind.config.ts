import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#18201f",
        paper: "#fbfaf7",
        line: "#e5e0d8",
        sage: "#6f8375",
        clay: "#b26a4c",
        mist: "#edf1ee"
      }
    }
  },
  plugins: []
};

export default config;
