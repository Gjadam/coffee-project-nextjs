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
        'nudgeMouse': 'nudgeMouse 2.4s cubic-bezier(0.000,0.000,0.725,1.000) infinite',
        'trackBallSlide': 'trackBallSlide 2.4s cubic-bezier(0.000,0.000,0.725,1.000) infinite',
      },
      keyframes: {
        nudgeMouse: {
          '0%' : {transform: 'translateY(0)' },
          '45%' : {transform: 'translateY(8px)' },
          '65%' : {transform: 'translateY(0)' },
          '100%' : {transform: 'translateY(0)' },
        },
        trackBallSlide: {
          '0%' : { opacity: '1',transform: 'scaleY(0)', transform: 'translateY(-12px)' },
          '45%' : { opacity: '0',transform: 'scaleY(0.5)', transform: 'translateY(12px)' },
          '46%' : { opacity: '0',transform: 'scaleY(0.5)', transform: 'translateY(12px)' },
          '65%' : { opacity: '0',transform: 'scaleY(1)', transform: 'translateY(-12px)' },
          '100%' : { opacity: '1',transform: 'scaleY(1)', transform: 'translateY(-12px)' },

        },
      }
    },
  },
  plugins: [],
}
