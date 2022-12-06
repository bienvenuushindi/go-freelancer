/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bgDefault: '#fff',
        clrPrime: '#97bf0f',
        clrSec: '#ffb400',
        clrText: '#bfc1c2',
      },
    },
  },
  plugins: [],
};
