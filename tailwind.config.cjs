/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      },
      colors: {
        gray: {
          50: '#E1E1E6'
        },
        green: {
          600: '#00B37E',
          700: '#07847E'
        },
        violet: {
          500: '#633BBC',
          800: '#282843',
          900: '#1A1924'
        }
      }
    }
  },
  plugins: []
}
