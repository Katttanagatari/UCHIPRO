/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xl': '1685px'
    },
    extend: {
      colors: {
        'bg': '#F2F8FF',
        'primary-blue': '#0A84FF',
        'grey': {
          1: '#8e8e93',
          2: '#AEAEB2',
          6: "#F8F8F8",
        }
      }
    },
  },
  plugins: [],
}

