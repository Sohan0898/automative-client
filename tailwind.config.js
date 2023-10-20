/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {


      fontFamily: {
        gabarito: ['Gabarito', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        racing: ['Racing Sans One', 'sans-serif'],
      },
      colors: {
        FusionGray: '#DDDDDD',
        FusionDark: '#222831',
        FusionBlue: '#30475E',
        FusionRed: '#F05454',
      },

      
    },
   
  },
  plugins: [require("daisyui")],
}

