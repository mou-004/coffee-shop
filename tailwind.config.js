/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        bean: {
          50: '#fff8ef',
          100: '#f7ead8',
          200: '#e8caa7',
          300: '#ce9d68',
          400: '#9e6534',
          500: '#764326',
          600: '#4f2b1b',
          700: '#2b1711',
          900: '#120907',
        },
        cream: '#fff5e6',
        copper: '#d9894d',
        moss: '#6f7d50'
      },
      boxShadow: {
        glow: '0 25px 80px rgba(118, 67, 38, 0.24)',
        soft: '0 20px 60px rgba(18, 9, 7, 0.12)'
      }
    },
  },
  plugins: [],
}
