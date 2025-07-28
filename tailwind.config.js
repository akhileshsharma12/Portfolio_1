// tailwind.config.js
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', 
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        scroll: 'scroll 20s linear infinite',
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.btn-primary': {
          padding: '0.75rem 1.5rem',
          backgroundColor: '#6EACDA',
          color: 'white',
          borderRadius: '0.5rem',
          fontWeight: '600',
        },
      });
    }),
    require('daisyui') // if you're using daisyui
  ],
};
