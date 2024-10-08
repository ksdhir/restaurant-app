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
        primary: "#FFB522",
        secondary: "#2F2F2F",
        accent: "#F45D42",
        background: "#FAF3DE",
      },
      screens: {
        sm: '480px',
        md: '600px',
        lg: '768px',
        xl: '1024px',
        '2xl': '1280px',
      },
    },
  },
  plugins: [],
}
