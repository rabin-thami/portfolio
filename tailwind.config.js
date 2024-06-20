/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#fff",
      black: "#000",
      yellow: "#DBF52F",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
    fontFamily: {
      SpaceGrotesk: ["Space Grotesk", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
