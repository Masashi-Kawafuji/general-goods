const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.tsx'],
  darkMode: false,
  theme: {
    extend: {
      zIndex: {
        '-10': '-10',
      },
    },
    fontFamily: {
      sans: ['Noto Sans JP', 'sans-serif'],
      vollkorn: ['Vollkorn', 'Noto Sans JP', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: ['gatsby-plugin-postcss'],
};
