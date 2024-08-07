/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scrollbar: {
        'thin': 'thin',
        'rounded': 'rounded',
        '::-webkit-scrollbar': { display: 'none' },
      },
    },
  },
  plugins: [],
}

