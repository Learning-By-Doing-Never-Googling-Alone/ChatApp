/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5865F2",
      },
      fontFamily: {
        "passion-one": ['"Passion One"', "cursive"],
        poppins: ['"poppins"', "cursive"],
      },
    },
  },
  plugins: [],
};
