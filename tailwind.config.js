/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage :{
        'hero-img': "url('./src/assets/gradient.svg')",
        'hero-vector': "url('./src/assets/vector.svg')"
      }
    },
  },
  plugins: [],
}