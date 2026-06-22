/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0e9b6f',
        'primary-dark': '#0b7a57',
        'primary-light': '#e3f6ed',
        gold: '#d4a94c',
        'gold-soft': '#e6c578',
        ink: '#16241f',
        'ink-soft': '#3d5048',
        cream: '#f7f4ef',
        line: '#e2ece5',
      },
      fontFamily: {
        vazir: ['var(--font-vazir)', 'Vazirmatn', 'sans-serif'],
        latin: ['var(--font-latin)', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
