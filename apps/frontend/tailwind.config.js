const colors = require('tailwindcss/colors');
const { join } = require('path');
const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    join(__dirname, 'pages/**/*.{ts,tsx,js,jsx}'),
    join(__dirname, 'components/**/*.{ts,tsx,js,jsx}'),
    join(__dirname, 'templates/**/*.{ts,tsx,js,jsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      colors: {
        primary: {
          light: '#ab6666',
          DEFAULT: '#872424',
          dark: '#5f1919',
        },
        gray: colors.zinc,
      },
    },
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        h1: {
          marginBottom: theme('spacing.3'),
          fontWeight: theme('fontWeight.bold'),
          fontSize: theme('fontSize.4xl'),
        },
        h2: {
          marginBottom: theme('spacing.3'),
          fontWeight: theme('fontWeight.bold'),
          fontSize: theme('fontSize.3xl'),
        },
        h3: {
          marginBottom: theme('spacing.3'),
          fontWeight: theme('fontWeight.bold'),
          fontSize: theme('fontSize.2xl'),
        },
        h4: {
          marginBottom: theme('spacing.3'),
          fontWeight: theme('fontWeight.bold'),
          fontSize: theme('fontSize.xl'),
        },
        h5: {
          marginBottom: theme('spacing.3'),
          fontWeight: theme('fontWeight.bold'),
          fontSize: theme('fontSize.lg'),
        },
        h6: {
          marginBottom: theme('spacing.3'),
          fontWeight: theme('fontWeight.bold'),
        },
        p: {
          marginBottom: theme('spacing.2'),
        },
        a: {
          color: theme('colors.primary.DEFAULT'),
          '&:hover': {
            color: theme('colors.primary.dark'),
            textDecoration: 'underline',
            textUnderlineOffset: theme('textUnderlineOffset.2'),
          },
        },
        section: {
          paddingTop: theme('spacing.8'),
          paddingBottom: theme('spacing.8'),
        },
      });
    }),
  ],
};
