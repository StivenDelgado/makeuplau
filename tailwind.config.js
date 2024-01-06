/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require("tailwindcss/colors");
module.exports = withMT({
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx,tsx}',
    './components/**/*.{js,jsx,tsx}',
    './app/**/*.{js,jsx,tsx}',
    './src/**/*.{js,jsx,tsx}',
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