/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandPrimary: "#4299E1",
        neutralDGrey: "#4D4D4D",
        neutralGrey: "#717171",
        neutralSilver: "#F5F7FA",
        gray900: "#18191F",
        neutralBlack: "#263238",
        yellow400: "#ECC94B",
        yellow300: "#F6E05E",
        red400: "#F56565",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

