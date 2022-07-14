/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js"
  ],
  theme: {
    extend: {},
    fontFamily: {
      'rubik': ['rubik'],
    },
  },
  plugins: [
    require("preline/plugin")
  ],
  darkMode: "class"
}
