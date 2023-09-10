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
      },
    extend: {
      colors:{
        red: '#ed1c24',
        blue: '#050517',
        gray:'#E4D9FF',
        kerem:'#F9F5E3',
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

