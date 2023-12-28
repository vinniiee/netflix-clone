import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "red-100": "#faced0",
        "red-200": "#f59da1",
        "red-300": "#ef6b72",
        "red-400": "#ea3a43",
        "red-500": "#e50914",
        "red-600": "#b70710",
        "red-700": "#89050c",
        "red-800": "#5c0408",
        "red-900": "#2e0204",
      },
    },
  },
  plugins: [],
};
export default config;
