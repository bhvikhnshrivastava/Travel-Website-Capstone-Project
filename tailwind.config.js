/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0A192F',
          sunset: '#F59E0B',
          sand: '#FDFBF7',
          gray: '#64748B',
        }
      },
      fontFamily: {
        cursive: ['"Alex Brush"', 'cursive'],
        sans: ['Montserrat', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      backgroundImage: {
        'sunset-gradient': 'linear-gradient(to right, #F59E0B, #EA580C)',
      }
    },
  },
  plugins: [],
}