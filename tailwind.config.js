/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'light-primary': {
          100: '#F0EBFF'
        },
        'light-secondary':{
          100: '#E6DDFF'
        },
        'dark-primary': {
          700: '#343333'
        },
        'dark-secondary': {
          900: '#0A041B'
        },
        'dark-tertiary': {
          800: '#2A232D'
        },
        'brand': {
          500: '#AB58CC'
        },
        'primary': {
          700: '#4B3C90'
        },  
        'secondary': {
          300: '#C89DFF'
        },  
        'tertiary': {
          600: '#752A9B'
        },      
      },
      typography: ({ theme }) => ({
        mine: {
      
          css: {

            // '--tw-prose-body': theme('colors.gray[300]'),
            // '--tw-prose-headings': theme('colors.pink-mine[500]'),
            // '--tw-prose-lead': theme('colors.pink[700]'),
            // '--tw-prose-links': theme('colors.pink[900]'),
            // '--tw-prose-bold': theme('colors.slate[50]'),
            // '--tw-prose-counters': theme('colors.pink[600]'),
            // '--tw-prose-bullets': theme('colors.yellow[400]'),
            // '--tw-prose-hr': theme('colors.yellow[200]'),
            // '--tw-prose-quotes': theme('colors.pink[900]'),
            // '--tw-prose-quote-borders': theme('colors.pink[300]'),
            // '--tw-prose-captions': theme('colors.pink[700]'),
            // '--tw-prose-code': theme('colors.yellow[300]'),
            // '--tw-prose-pre-code': theme('colors.pink[100]'),
            // '--tw-prose-pre-bg': theme('colors.pink[900]'),
            // '--tw-prose-th-borders': theme('colors.pink[300]'),
            // '--tw-prose-td-borders': theme('colors.pink[200]'),
            // '--tw-prose-invert-body': theme('colors.pink[200]'),
            // '--tw-prose-invert-headings': theme('colors.white'),
            // '--tw-prose-invert-lead': theme('colors.pink[300]'),
            // '--tw-prose-invert-links': theme('colors.white'),
            // '--tw-prose-invert-bold': theme('colors.white'),
            // '--tw-prose-invert-counters': theme('colors.pink[400]'),
            // '--tw-prose-invert-bullets': theme('colors.pink[600]'),
            // '--tw-prose-invert-hr': theme('colors.pink[700]'),
            // '--tw-prose-invert-quotes': theme('colors.pink[100]'),
            // '--tw-prose-invert-quote-borders': theme('colors.pink[700]'),
            // '--tw-prose-invert-captions': theme('colors.pink[400]'),
            // '--tw-prose-invert-code': theme('colors.white'),
            // '--tw-prose-invert-pre-code': theme('colors.pink[300]'),
            // '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            // '--tw-prose-invert-th-borders': theme('colors.pink[600]'),
            // '--tw-prose-invert-td-borders': theme('colors.pink[700]'),

          },
        },
      }),
      backgroundImage: {
        'hero-article': "url('/bg-header.jpg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'background-light': 'linear-gradient(150.82deg, #1A094D 12.58%, rgba(74, 44, 159, 0.79) 71.67%, rgba(66, 38, 145, 0.56) 101.4%)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
