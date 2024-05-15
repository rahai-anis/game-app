module.exports = {
  purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: 'media', // or 'media' or 'class'
   theme: {
    extend: {
      keyframes: {
        fade: {
          to: {
            scale: '1',
            opacity: '1',
          },
        },
      },
      animation: {
        fade: 'fade linear forwards',
      },
    },
  },
   variants: {
     extend: {
      colors: {
        midBlue: '#08535d',
      },
     },
   },
   plugins: [
    require('flowbite/plugin')
   ],
   content: [
    "./node_modules/flowbite/**/*.js"
]
 }