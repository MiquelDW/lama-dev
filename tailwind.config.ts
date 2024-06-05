import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // "extend" the themes of tailwindcss with your custom-named reusable values, this creates more consistency inside your application
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
      screens: {
        xl: "1280px", // override tailwind's default "xl" value
        "1xl": "1366px",
      },
    },
  },
  plugins: [],
};
export default config;
