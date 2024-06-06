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
        m2xl: { max: "1536px" },
        m1xl: { max: "1366px" },
        mxl: { max: "1280px" },
        mlg: { max: "1024px" },
        mmd: { max: "768px" },
        msm: { max: "640px" },
        mxsm: { max: "475px" },
      },
    },
  },
  plugins: [],
};
export default config;
