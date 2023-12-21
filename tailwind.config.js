/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        ['infinite-slider-rtl']: 'infiniteSliderRTL 20s linear infinite',
      },
      keyframes: {
        infiniteSliderRTL: {
          '0%': { transform: 'translateX(0)' },
          '100%': {
            transform: 'translateX(calc(-250px * 5))',
          },
        },
      },
    },
  },
  plugins: [],
};
