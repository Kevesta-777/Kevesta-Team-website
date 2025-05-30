/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#c7e0ff',
          300: '#a0c8fe',
          400: '#71a8fc',
          500: '#4287f5',
          600: '#2f6aea',
          700: '#2558d8',
          800: '#2448af',
          900: '#234089',
          950: '#172654',
        },
        secondary: {
          50: '#f5f7fa',
          100: '#ebeef3',
          200: '#d2dae3',
          300: '#adbaca',
          400: '#8295ac',
          500: '#637792',
          600: '#4f6079',
          700: '#414e63',
          800: '#394252',
          900: '#333a47',
          950: '#1b1f28',
        },
        accent: {
          50: '#fef2f2',
          100: '#fde6e6',
          200: '#fbd0d0',
          300: '#f8adad',
          400: '#f37d7d',
          500: '#ea4e4e',
          600: '#d62e2e',
          700: '#b42121',
          800: '#951f1f',
          900: '#7c2020',
          950: '#430c0c',
        },
      },
      keyframes: {
        'scroll-x': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'scroll-x': 'scroll-x 25s linear infinite',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
      },
    },
  },
  plugins: [],
};