/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require("tailwindcss/colors");
module.exports = withMT({
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
	],
  theme: { 
    colors: {
      ...colors,
      primary: "#D6BB9C",
      secundary: "#121212",
      other: "#e1ccbe",
      maincolor: "#F2F2F2"
    }
  },
  plugins: [],
})