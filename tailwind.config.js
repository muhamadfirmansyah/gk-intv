/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          'lg': '4rem',
          'md': '2rem',
          DEFAULT: '1rem'
        }
      }
    },
  },
  plugins: [],
}
