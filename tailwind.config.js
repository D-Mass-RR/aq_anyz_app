const colors = require('./src/ui/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ['Gilroy'],
        fontWeight: {
          light: 'Gilroy-Light',
          normal: 'Gilroy-Medium',
          bold: 'Gilroy-Black',
        },
      },
      colors,
    },
  },
  plugins: [],
};
