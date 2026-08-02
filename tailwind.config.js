/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0d0805',
          900: '#1a0f0a',
          800: '#241710',
          700: '#3a251a',
        },
        saffron: {
          50: '#fdf6ec',
          100: '#f9e8c8',
          200: '#f0d49a',
          300: '#e6bd6c',
          400: '#d4a574',
          500: '#c0895a',
          600: '#a06d42',
          700: '#7d5232',
        },
        maroon: {
          400: '#d96b4f',
          500: '#c8553d',
          600: '#a8412e',
          700: '#82301f',
        },
        cream: {
          50: '#fbf7f0',
          100: '#f5ede0',
          200: '#ece0cc',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.9s ease-out forwards',
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 40s linear infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.9' },
        },
      },
    },
  },
  plugins: [],
};
