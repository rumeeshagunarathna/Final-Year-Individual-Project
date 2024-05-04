/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

const defaultTheme = require("tailwindcss/defaultConfig");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  important: true,
  theme: {
    ...defaultTheme,
    colors: {
      ...defaultTheme.colors,
      primary: "#CBD5E0",
      white: "#000000",
      text: {
        DEFAULT: "#1F2937",
        light: "#6C7281",
      },
      light: {
        DEFAULT: "#FAFBFC",
        lighter: "#F3F4F6",
      },
    },
    extend: {},
    // Adding a button style
    button: {
      base: "py-2 px-4 rounded",
      primary: "bg-blue-500 hover:bg-blue-700 text-white font-bold",
      danger: "bg-red-500 hover:bg-red-700 text-white font-bold",
    },
  },
  plugins: [],
};


