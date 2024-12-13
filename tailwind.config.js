/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sakura: 'var(--color-sakura)',
        mint: 'var(--color-mint)',
        lavender: 'var(--color-lavender)',
        'neon-pink': 'var(--color-neon-pink)',
        'neon-blue': 'var(--color-neon-blue)',
        cream: 'var(--color-cream)',
      },
      fontFamily: {
        'vt323': ['VT323', 'monospace'],
      },
    },
  },
  plugins: [],
};