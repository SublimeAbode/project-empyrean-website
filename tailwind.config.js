/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'page-bg': {
          DEFAULT: '#FFFFFF',
          dark: '#000000'
        },
        'border': {
          DEFAULT: '#404040',
          hover: '#000000',
          dark: '#D4D4D4',
          'dark-hover': '#FFFFFF'
        },
        'text': {
          DEFAULT: '#000000',
          dark: '#FFFFFF',
          'dark-dark': '#FFFFFF'
        }
      },
    },
  },
  plugins: [],
} 