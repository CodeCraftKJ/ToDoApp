/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#29292f",
          "200": "#24242d",
          "300": "#1e1f25",
        },
        slategray: "#7d7d94",
        darkslategray: "#434343",
        gainsboro: "#dadada",
        black: "#000",
        lightslategray: "#9494b8",
        white: "#fff",
      },
      fontFamily: {
        inter: "Inter",
      },
    },
    fontSize: {
      lg: "1.13rem",
      "5xl": "1.5rem",
      base: "1rem",
      "37xl": "3.5rem",
      "13xl": "2rem",
    },
    screens: {
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
