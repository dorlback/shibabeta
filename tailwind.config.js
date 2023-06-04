/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bgshiba': '#E8F1F5',
        'brownshiba': '#482D1B',
        'shibayellow': '#F9EE35',
        'shibaskin':'#F5DEC3'
        
      },
      minHeight: {
        'vh': 'calc(var(--vh, 1vh) * 100)',
      },
    },
  },
  plugins: [],
}

