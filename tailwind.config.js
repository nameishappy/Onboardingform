/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    darkMode:'media',
    darkSelector: '.dark-mode',
    extend: {},
  },
  variants: {},
  plugins: [
    require('tailwindcss-dark-mode')(),
  ],
}


