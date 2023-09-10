/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        red: '#E71D36',
        blue: '#02182b',
        gray:'#E4D9FF',
        kerem:'#F9F5E3',
        back:'rgba(228, 217, 255,0.7)'
      },
      fontFamily:{
        navfont:['Days One', 'sans-serif'],
        boldfont:['Rowdies', 'cursive'],
        favboxfont:['Rubik Mono One', 'sans-serif'],
        boldfont2:['Titan One', 'cursive'],
      }
    },
  },
  plugins: [],
}
