/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Soft Luxury Palette (v4.0)
        alabaster: '#F5F5F0',
        'soft-stone': '#E9E9E2',
        charcoal: '#1A1A1A',
        gold: '#D4AF37',
        'gold-light': '#E5C158',
        'gray-light': '#A9A9A9',
        'gray-dark': '#4A4A4A',
        white: '#FFFFFF',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #C5A059 0%, #D4A565 100%)',
      },
    },
  },
  plugins: [],
}
