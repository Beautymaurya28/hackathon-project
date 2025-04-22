/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary))',
        'primary-light': 'rgb(var(--color-primary) / 0.8)',
        secondary: 'rgb(var(--color-secondary))',
        'secondary-light': 'rgb(var(--color-secondary) / 0.8)',
        accent: 'rgb(var(--color-accent))',
        'accent-light': 'rgb(var(--color-accent) / 0.8)',
        success: 'rgb(var(--color-success))',
        warning: 'rgb(var(--color-warning))',
        error: 'rgb(var(--color-error))',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};