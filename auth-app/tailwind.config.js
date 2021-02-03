const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors,
      backgroundImage: {
        login: "url('/images/city_blur_gabriel_santiago_unsplash.jpg')"
      }
    }
  },
  variants: {},
  plugins: [],
  // xwind options
  xwind: {
    mode: 'objectstyles'
  }
}
