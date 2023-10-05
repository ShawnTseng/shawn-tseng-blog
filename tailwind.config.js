/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    colors: {
      'sky': {
        '50': '#f2fdff',
        '100': '#e6f9fc',
        '200': '#c0eefa',
        '300': '#98e1f5',
        '400': '#51c6f0',
        '500': '#A3D5FC',
        '600': '#0a8cd1',
        '700': '#076bad',
        '800': '#06508c',
        '900': '#033669',
        '950': '#011d42'
      }
    },
    extend: {
      fontFamily: {
        'poppins-medium': ['var(--font-poppins-medium)'],
        'poppins-semibold': ['var(--font-poppins-semibold)'],
        'poppins-bold': ['var(--font-poppins-bold)'],
        'poppins-extrabold': ['var(--font-poppins-extrabold)']
      }
    }
  },
  plugins: [],
}