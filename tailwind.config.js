/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.{html,js}"],
  theme: {
      screens:{
        'small':'388px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        'collection':'434px',
        'offer':'1192px',
      },
    extend: {
      colors:{
        red: '#E71D36',
        blue: '#161925',
        
        gray:'#E4D9FF',
        kerem:'#E4D9FF',
        back:'rgba(228, 217, 255,0.7)'
      },
      fontFamily:{
        navfont:['Days One', 'sans-serif'],
        boldfont:['Rowdies', 'cursive'],
        favboxfont:['Rubik Mono One', 'sans-serif'],
        boldfont2:['Titan One', 'cursive'],
      },
    },
  },
  plugins: [],
}

