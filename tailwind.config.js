/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens:{
      sm:"480",
      md:"768",
      lg:"976",
      xl:"1440",
    },
    extend: {
      color:{
        strongCyan:'hsl(171,66%,44%)',
        strongBlue:'hsl(233,100%,69%)',
        strongGrayishBlue:'hsl(210,10%,33%)',
        strongBlue:'hsl(201,11%,66%)',
      },
      fontFamily:{
        sans:['Bai Jamjuree','sans-serif']
      }
    },
  },
  plugins: [],
}

