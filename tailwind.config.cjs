/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        firaCode: ["Fira Code"],
      },
      colors: {
        bgColor: "#282C33",
        primary: "#C778DD",
        gray: "#ABB2BF",
      },
    },
  },
  screens: {
    sm: "375px",
    md: "768px",
    lg: "1024px",
    xl: "1440px",
  },
  plugins: [],
};
