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
        andika: "var(--andika)"
      },
      colors: {
        bgColor: "#121212",
        primary: "#6D31EF", //#6D31EF
        gray: "#FFFFFF",
        accent: "#4338D9",
        springGreen: "#2AF598", //#50D9B3
        pigmentBlue: "#3437AA",
        card: "#282C34"
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
