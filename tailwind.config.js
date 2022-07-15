/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      'rubik': ['rubik'],
    },
  },
  plugins: [
    require("preline/plugin", "flowbite/plugin"),
  ],
  darkMode: "class"
}
