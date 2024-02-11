/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        bgColor:"#ECF9FF",
        shadow: "#64646f33 0px 7px 29px 0px",
        liner: "(135.18deg, #06064000 11.76%, #060640 100%)",
      },
      fontFamily:{
        Rubik: ['Rubik', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

