/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './public/images/**/*.{png,jpg,jpeg,gif,svg}'],
  theme: {
    extend: {
      colors: {
        lightgreen: "#18FF6D",
        gray: "#34403A",
        lightergreen: "#F0FFF6",
        darkgreen: "#148A37",
        ash: "#5F5959",
        offwhite: '#D9DBE1'
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif']
      },
      height: {
        '128': '32rem',
      },
      width: {
        '128': '32rem'
      }
    },
  },
  plugins: [require('tailwind-hamburgers')],
}

