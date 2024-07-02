/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'main': ['SF Pro Display', 'sans-serif'],
      'rubik': ['Rubik', 'sans-serif'],
      'inter': ['Inter', 'sans-serif']
    },
    screens: {
      'xl': '1880px',
    },
    extend: {
      colors: {
        'bg': '#F2F8FF',
        'primary-blue': '#0A84FF',
        'grey': {
          1: '#8E8E93',
          2: '#AEAEB2',
          3: '#C7C7CC',
          4: '#D1D1D6',
          6: '#F8F8F8',
          7: '#A0A0A0',
        }
      }
    },
  },
  plugins: [],
}

