/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#F8F6F4',
          100: '#E6D7D0',
          200: '#E5CEC1',
          300: '#D7B9AA',
          400: '#C4A494',
          500: '#BA9785',
          600: '#AA9183',
          700: '#8B7A6B',
          800: '#6B5D52',
          900: '#4A3F37',
        },
        taupe: {
          50: '#F5F3F1',
          100: '#E6D7D0',
          200: '#D7B9AA',
          300: '#C4A494',
          400: '#BA9785',
          500: '#AA9183',
          600: '#9A8173',
          700: '#8B7A6B',
          800: '#6B5D52',
          900: '#4A3F37',
        },
        rose: {
          50: '#F8F5F3',
          100: '#E5CEC1',
          200: '#D7B9AA',
          300: '#C4A494',
          400: '#BA9785',
          500: '#B08A78',
          600: '#A67D6B',
          700: '#8B7A6B',
          800: '#6B5D52',
          900: '#4A3F37',
        },
        cream: {
          50: '#FEFEFE',
          100: '#F8F6F4',
          200: '#F0EDE9',
          300: '#E6D7D0',
          400: '#E5CEC1',
          500: '#D7B9AA',
        },
        gold: {
          400: '#D4AF37',
          500: '#B8860B',
          600: '#9A7B0A',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
        'scale-hover': 'scaleHover 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        scaleHover: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
};