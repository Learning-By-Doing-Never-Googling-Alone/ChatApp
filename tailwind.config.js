/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "passion-one": ['"Passion One"', "cursive"],
        poppins: ['"poppins"', "cursive"],
      },
    },
  },
  plugins: [],
};
