/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0A0A0A',
          muted: '#333333',
          soft: '#4A4A4A',
          border: '#E5E5E5',
        }
      },
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        dm: ['"DM Sans"', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 22s linear infinite',
      },
      borderRadius: {
        '3xl': '1.75rem',
        '4xl': '2.25rem',
        '5xl': '2.75rem',
      }
    },
  },
  plugins: [],
}
