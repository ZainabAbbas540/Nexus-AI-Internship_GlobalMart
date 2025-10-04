/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          bg: '#0B0F1A',      // very dark navy/black base
          text: '#E5E7EB',    // light gray for readable text
          accent: '#FFB84C'   // golden accent for highlights
        },
        'primary-dark': '#1A1F2E', // slightly lighter dark for contrast sections
        brand: {
          DEFAULT: '#FF6B6B', // coral red for CTAs / buttons
          hover: '#E85C5C'    // darker coral hover state
        },
        secondary: {
          DEFAULT: '#4ECDC4', // teal for badges / discounts
          hover: '#3AB9B0'
        },
        surface: {
          DEFAULT: '#151923', // card / panel background
          border: '#2D3347'   // borders + dividers
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif']
      },
      animation: {
        'fly-to-cart': 'flyToCart 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'fade-in': 'fadeIn 0.3s ease-out forwards',
        'scale-in': 'scaleIn 0.2s ease-out forwards'
      },
      keyframes: {
        flyToCart: {
          '0%': { transform: 'scale(1) translate(0, 0)', opacity: '1' },
          '50%': { transform: 'scale(0.8) translate(50px, -30px)', opacity: '0.8' },
          '100%': { transform: 'scale(0.3) translate(200px, -100px)', opacity: '0' }
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        }
      }
    },
  },
  plugins: [],
};
