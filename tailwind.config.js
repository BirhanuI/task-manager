/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "rgb(255 237 213)",
          200: "rgb(254 215 170)",
          300: "rgb(253 186 116)",
          400: "rgb(251 146 60)",
          500: "rgb(249 115 22)",
          600: "rgb(234 88 12)",
          700: "rgb(194 65 12)",
          800: "rgb(154 52 18)",
          900: "rgb(124 45 18)",
        },
      },
    },
  },
  plugins: [],
};
