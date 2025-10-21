/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        serioplast: '#55B949',
        'serioplast-dark': '#178E09',
        'serioplast-light': '#99D592',
        'serioplast-yellow': '#EEC200',
        'serioplast-yellow-dark': '#DFB600',
        'serioplast-yellow-light': '#F5DA66',
        'serioplast-red': '#DE3618',
        'serioplast-red-dark': '#BC1C00',
        'serioplast-red-light': '#EB8674',
        'serioplast-blue': '#5285C1',
        'serioplast-blue-dark': '#135097',
        'serioplast-blue-light': '#97B6DA',
      },
    },
  },
  plugins: [],
}
