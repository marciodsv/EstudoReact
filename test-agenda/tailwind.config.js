/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        teste: {
          500: '#005596',
        },
        ink: {
          DEFAULT: '#1c1c1c',
          muted: '#666666',
        },
        'success-ink': '#00875a',
      },
      borderRadius: {
        card: '12px',
      },
      boxShadow: {
        card: '0 2px 8px rgba(0, 0, 0, 0.08)',
      },
      fontSize: {
        caption: ['12px', '16px'],
        body: ['14px', '20px'],
        'title-sm': ['18px', '24px'],
        title: ['22px', '28px'],
      },
    },
  },
  plugins: [],
};