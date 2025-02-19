/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

const { nextui } = require('@nextui-org/react');

module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',

      screens: {
        xl: '1184px',
      },
    },
    extend: {
      fontFamily: {
        roboto: 'Roboto',
        sans: 'DM Sans',
      },
      fontSize: {
        base: '16px',
        standard: '14px',
      },

      colors: {
       
      },
    },
  },
  plugins: [nextui()],
};
