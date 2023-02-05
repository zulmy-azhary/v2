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
      maxWidth: {
        "8xl": "104rem",
        "9xl": "125rem"
      }
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "2000px",
      "3xl": "2560px",
    },
  },
  plugins: [],
};
