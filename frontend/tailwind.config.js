/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          600: '#0284c7',
          900: '#0f172a',
        },
      },
      boxShadow: {
        glow: '0 0 35px rgba(14, 165, 233, 0.25)',
      },
    },
  },
  plugins: [],
};
