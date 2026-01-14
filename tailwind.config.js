/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        montserratAlt: ['"Montserrat Alternates"', "sans-serif"],
        josefin: ['"Josefin Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
