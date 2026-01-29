/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#fef7ee',
          100: '#fdedd6',
          200: '#f9d7ac',
          300: '#f4ba77',
          400: '#ee9240',
          500: '#ea751c',
          600: '#db5b12',
          700: '#b54411',
          800: '#903616',
          900: '#742f16',
          950: '#3f1509',
        },
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0,0,0,0.08)',
        'soft-lg': '0 10px 40px rgba(0,0,0,0.12)',
        'glow': '0 0 30px rgba(234, 117, 28, 0.3)',
      },
    },
  },
  plugins: [],
}
