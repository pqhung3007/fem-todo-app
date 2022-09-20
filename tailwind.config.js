/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif']
      },
      backgroundImage: {
        'desktop-dark': "url('./images/bg-desktop-dark.jpg')",
        'desktop-light': "url('./images/bg-desktop-light.jpg')",
        'mobile-dark': "url('./images/bg-mobile-dark.jpg')",
        'mobile-light': "url('./images/bg-mobile-light.jpg')",
      }
    },
  },
  plugins: [],
}
