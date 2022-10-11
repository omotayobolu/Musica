/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Quicksand: ["Quicksand", "sans-serif"],
      },
      fontSize: {
        base: "14px",
      },
      colors: {
        light: "#EFEEE0",
        dark: "#1D2123",
        naviconColor: "rgba(239,238,224,25%)",
        secondary: "#FACD66",
        primary: "#A4C7C6",
        darkAlt: "#1A1E1F",
      },
    },
  },
  plugins: [],
};
