import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // "extend" the colors theme of tailwindcss with your custom-named reusable colors, this creates more consistency inside your application
    extend: {
      colors: {
        // create color theme named "default"
        default: {
          bg: "#0d0c22",
          text: "white",
        },
        // create color theme named "secondary"
        secondary: {
          bgSoft: "#2d2b42",
          textSoft: "#e5e5e5",
        },
        // create color theme named "btn"
        btn: {
          default: "#3673fd",
        },
      },
    },
  },
  plugins: [],
};
export default config;
