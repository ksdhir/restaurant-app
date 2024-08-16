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
        coral: '#EF8354',
        payne: '#4F5D75',
      },
      fontFamily: {
        main: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}
