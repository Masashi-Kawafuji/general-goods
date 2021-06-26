/* eslint-disable global-require */

module.exports = {
  purge: ['./src/**/*.tsx'],
  darkMode: false,
  theme: {
    extend: {
      zIndex: {
        '-10': '-10',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.300'),
            h1: {
              color: theme('colors.gray.300'),
            },
            h2: {
              color: theme('colors.gray.300'),
            },
            a: {
              color: theme('colors.gray.400'),
            },
            strong: {
              color: theme('colors.gray.300'),
            },
          },
        },
      }),
    },
    fontFamily: {
      sans: ['Noto Sans JP', 'sans-serif'],
      vollkorn: ['Vollkorn', 'Noto Sans JP', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: ['gatsby-plugin-postcss', require('@tailwindcss/typography')],
};
