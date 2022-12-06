/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
        wiggle1d: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
        wiggle3d: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        }
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 3s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'wiggle-3s': 'wiggle3d 3s ease-in-out infinite',
        'wiggle-2s': 'wiggle1d 2s ease-in-out infinite',


      }
    },
  },
  plugins: [require('tailwind-scrollbar'),
],
darkMode: 'class'

}
