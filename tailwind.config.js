/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",

  "./src/**/*.{js,ts,jsx,tsx}",'node_modules/flowbite-react/lib/esm/**/*.js'
],
  theme: {
    extend: {
      colors: {
        brightBackground : "#fdf8ee",
        brightGreen: "#539165",
        lightText: "#959595",
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

