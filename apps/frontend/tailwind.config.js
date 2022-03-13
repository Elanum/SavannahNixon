const { join } = require('path');
const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');

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
      },
    },
  },
  plugins: [],
};
