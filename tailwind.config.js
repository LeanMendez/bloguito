/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        mine: {
          css: {
            '--tw-prose-links': theme('colors.orange[300]'),
            '--tw-prose-bold': theme('colors.yellow[900]'),

            '--tw-prose-quotes': theme('colors.orange[400]'),
            '--tw-prose-quote-borders': theme('colors.orange[300]'),
            '--tw-prose-captions': theme('colors.yellow[700]'),
            '--tw-prose-code': theme('colors.orange[400]'),
            '--tw-prose-pre-code': theme('colors.gray[100]'),
            '--tw-prose-pre-bg': theme('colors.gray[600]'),
            '--tw-prose-th-borders': theme('colors.pink[300]'),
            '--tw-prose-td-borders': theme('colors.pink[200]'),
            '--tw-prose-invert-body': theme('colors.gray[300]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.yellow[300]'),
            '--tw-prose-invert-links': theme('colors.white'),

            '--tw-prose-invert-bullets': theme('colors.orange[500]'),
            '--tw-prose-invert-hr': theme('colors.yellow[700]'),
            '--tw-prose-invert-quotes': theme('colors.yellow[400]'),
            '--tw-prose-invert-quote-borders': theme('colors.yellow[700]'),
            '--tw-prose-invert-captions': theme('colors.yellow[400]'),

            '--tw-prose-invert-th-borders': theme('colors.yellow[600]'),
            '--tw-prose-invert-td-borders': theme('colors.yellow[700]'),
          },
        },
      }),
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':  'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
