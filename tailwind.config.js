/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
      gray: "#5A5959",
      yellow: "#FFEAAE",
      "dark-yellow":"#FCCAAF",
      orange:"#F6820C"
      },
    },
  },
  plugins: [],
}