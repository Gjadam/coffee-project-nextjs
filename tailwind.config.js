/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#be9c79',
        'secondary': '#1c1c1c',
      },
      borderWidth: {
        '1': '1px'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'toBottomFromTop': 'toBottomFromTop 0.9s linear infinite',
      },
      keyframes: {
        toBottomFromTop: {
          '49%' : {opacity: '0', transform: 'translateY(10px)' },
          '50%' : { opacity: '0', transform: 'translateY(-100%)' },
          '51%' : { opacity: '0' },
        },
      }
    },
  },
  plugins: [],
}
