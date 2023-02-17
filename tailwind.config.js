const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 15s linear infinite",
        "pulse-slow": "pulse 3s linear infinite",
      },
      colors: {
        day: {
          900: "#DC4619",
          800: "#E2542C",
          700: "#E9633F",
          600: "#F07252",
          500: "#F68165",
          400: "#F98F78",
          300: "#FCAE9C",
          200: "#FECDD0",
          100: "#FFEBF4",
        },
      },
    },
    screens: {
      xxs: "350px",
      xs: "400px",
      ...defaultTheme.screens,
    },
  },

  plugins: [],
  darkMode: "class",
};
