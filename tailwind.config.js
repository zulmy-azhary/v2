/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        firaCode: "var(--firaCode)",
      },
      colors: {
        bgColor: "#282C33",
        primary: "#C778DD",
        gray: "#ABB2BF",
        accent: "#4338D9",
        springGreen: "#2AF598",
        pigmentBlue: "#3437AA",
      },
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
  },
  plugins: [],
};
