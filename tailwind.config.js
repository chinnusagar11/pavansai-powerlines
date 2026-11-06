/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f5fa',
          100: '#e1ecf6',
          200: '#c5daf0',
          300: '#99bfe6',
          400: '#649dd9',
          500: '#3d7dcb',
          600: '#2b62b0',
          700: '#234f90',
          800: '#1b3e71',
          900: '#0f2445',
          950: '#0a162b',
        },
        sky: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        industrial: {
          dark: '#0B1528',
          card: '#111E38',
          charcoal: '#1E293B',
          gray: '#64748B',
          light: '#F8FAFC',
          border: '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
