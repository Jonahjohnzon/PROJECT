/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '655px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1025px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      // => @media (min-width: 1536px) { ... }
      '3xl' : '1700px'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      red:"#FF0035",
      'white': '#ffffff',
      'black': '#000000',
      'midnight': '#E3E5ED',
      'metal': '#F5F5F5',
      'green': '#00CB75',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'pinktop':"#EBCFE6",
      "bluetop":"#CBDFF6",
      "textbrown":"#2D2D2D",
      "thirdblue":"#EBF4FF"
    },
    extend: {
      fontFamily:{
        Open:['Open Sans', 'sans-serif'],
        Work:['Work Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

