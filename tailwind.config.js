/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          300: 'rgb(214, 66, 0, .6)',
          500: 'rgb(214, 66, 0, .8)',
          700: 'rgb(214, 66, 0, 1)',
        }
      }
    },
  },
  plugins: [],
}

