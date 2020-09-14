module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: [
    './resources/**/*.js',
    './resources/**/*.html',
    './resources/**/*.php',
  ],
  theme: {
    extend: {
      inset: {
        '1/2': '50%',
      },
      variants: {
        zIndex: ['responsive', 'hover', 'focus'],
      },
    },
    breakpointHelper: {
      selector: 'html.local body',
    },
    goldenRatio: {
      useCssVars: process.env.NODE_ENV !== 'production',
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss-breakpoint-helper'),
    require('tailwindcss-golden-ratio'),
  ],
};
