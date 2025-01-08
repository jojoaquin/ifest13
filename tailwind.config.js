/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        quantico: ["Quantico", "serif"],
        jersey: ["'Jersey 10'", "serif"],
        roboto: ["Roboto", "serif"],
      },
    },
  },
  plugins: [],
};
