/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      steel: "#0b090a",
      cwhite: "#ffffff",
    },
    extend: {
      fontFamily: {
        alliance: ["alliance", "sans-serif"],
      },
    },
  },
  plugins: [],
};
