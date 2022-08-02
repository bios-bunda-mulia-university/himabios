/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      margin: {
        70: '70rem',
      },
      colors: {
        'primary': {
          light: {
            main: '#1F8843',
            surface: '#D2E7D9',
            border: '#B4D7C0',
            hover: '#1A7138',
            pressed: '#0F4421',
            focus: '#D9FBE5'
          },
          dark: {
            main: '#43E97B',
            surface: '#D9FBE5',
            border: '#C0F8D3',
            hover: '#38C266',
            pressed: '#21743D',
            focus: '#43E97B'
          },
        },
        'carribean-green': '#3ED9A1',
        turquoise: '#31D9BB',
        black: '#000000',
        white: '#FFFFFF',
      },
      opacity: {
        '08': '0.08',
        '38': '0.38',
      },
      backdropBlur: {
        5: '5px',
      },
      dropShadow: {
        'custom': '0 10px 30px rgba(0, 0, 0, 0.05)',
      }
    },
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
  darkMode: 'class',
}
