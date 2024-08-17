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
        genmetal: '#2D3142',
        silver: '#BFC0C0',
        white: '#FFFFFF', // Fixed the hex code for white
        coral: '#B5543A',
        payne: '#4F5D75',
      },
      fontFamily: {
        main: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      screens: {
        sm: '480px',
        md: '640px',
        lg: '768px',
        xl: '1024px',
        '2xl': '1280px',
      },
    },
  },
  plugins: [],
}
