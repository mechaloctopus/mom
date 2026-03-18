/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4ff',
          100: '#dbe4ff',
          200: '#bac8ff',
          300: '#91a7ff',
          400: '#748ffc',
          500: '#5c7cfa',
          600: '#4c6ef5',
          700: '#4263eb',
          800: '#3b5bdb',
          900: '#364fc7',
        },
        warm: {
          50: '#fff9f0',
          100: '#fff3e0',
          200: '#ffe0b2',
          300: '#ffcc80',
          400: '#ffb74d',
          500: '#ffa726',
        },
        sage: {
          50: '#f1f8e9',
          100: '#dcedc8',
          200: '#c5e1a5',
          300: '#aed581',
          400: '#9ccc65',
          500: '#8bc34a',
          600: '#7cb342',
          700: '#689f38',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  safelist: [
    { pattern: /bg-(teal|pink|indigo|orange)-(50|100|200|300|400|500|600|700|800|900)/ },
    { pattern: /text-(teal|pink|indigo|orange)-(50|100|200|300|400|500|600|700|800|900)/ },
    { pattern: /border-(teal|pink|indigo|orange)-(100|200|300|400|500)/ },
  ],
  plugins: [],
}
