/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1279E0',
        secondary: "#1A3047",
        bold: '#1279E0',
        light: '#00000087',
      },
    },
  },
  plugins: [],
};
