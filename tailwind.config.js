/** @type {import('tailwindcss').Config} */
// @ts-ignore
const filters = require('tailwindcss-filters');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"SF Mono"', 'Fira Code', 'Roboto Mono', 'monospace'],
      },
      colors: {
        customBlack: '#0A1F2F', 
      },
      writingMode: {
        vertical: "vertical-rl",
      },
    },
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
}

