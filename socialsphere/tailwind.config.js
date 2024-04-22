// /** @type {import('tailwindcss').Config} */
// // module.exports = {
// //   content: [],
// //   theme: {
// //     extend: {},
// //   },
// //   plugins: [],
// // }

// // module.exports = {
// //   mode: "jit",
// //   purge: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
// //   darkMode: false, // or 'media' or 'class'
// //   theme: {
// //     extend: {},
// //   },
// //   variants: {
// //     extend: {},
// //   },
// //   plugins: [],
// // };

// module.exports = {
//   plugins: [
//     require("tailwindcss"),
//     require("autoprefixer"),
//     // Other Tailwind CSS plugins if needed
//   ],
// };


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
//     // Or if using `src` directory:
//     "./src/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
  purge: [
    './pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};