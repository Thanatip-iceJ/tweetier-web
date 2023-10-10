/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        irish: ["Irish Grover", "cursive"],
      },
      colors: {
        main: "#1D9BF1",
      },
    },
  },
  plugins: [],
};
