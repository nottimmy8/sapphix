/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#184645",
        secondary: {
          100: "#C90303",
          200: "#F58800",
        },
        bluelight: "#BECBCB47",
        green500: "#184645",
        textblack: "#212021",
      },
    },
  },
  plugins: [],
};
