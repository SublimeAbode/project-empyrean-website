/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'page-bg': '#F6FFFF',
        'border': {
          DEFAULT: '#94A3B8',  // Darker than before (was gray-300)
          hover: '#0F172A',    // Almost black (was gray-800)
        },
        'text': {
          DEFAULT: '#0F172A',  // Almost black (was gray-800)
          dark: '#020617',     // Pure black (was gray-900)
        }
      },
    },
  },
  plugins: [],
} 