/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        'service': ['40px', {
          lineHeight: '1',
          letterSpacing: '-0.02em',
          fontWeight: '300',
        }],
        'service-md': ['60px', {
          lineHeight: '1',
          letterSpacing: '-0.02em',
          fontWeight: '300',
        }],
        'service-lg': ['80px', {
          lineHeight: '1',
          letterSpacing: '-0.02em',
          fontWeight: '300',
        }],
        '100px': ['100px', {
          lineHeight: '0.9',
          letterSpacing: '-0.02em',
          fontWeight: 'bold',
        }],
      },
      fontFamily: {
        montreal: ['Montreal', 'sans-serif'],
      },
      screens: {
        'xs': '320px',
        'sm': '481px',
        'md': '769px',
        'lg': '1025px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
    },
  },
  plugins: [],
};