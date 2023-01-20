/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0081C9",
          secondary: "#5BC0F8",
          screen: "#FFC93C",
          neutral: "#282D33",
          "base-100": "#FCFCFD",
          info: "#5FAAE7",
          "start-color": "#42275a",
          "end-color": "#734b6d",
          success: "#78EDB6",
          warning: "#F5A651",
          error: "#FC4A5F",
        },
      },
    ],
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        new: "VT323 , monospace",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("daisyui"),
  ],
};
