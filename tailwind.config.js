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
      screens: {
        xs: "350px",
        sm: "480px",
        ms: "600px",
        mss: "911px",
        md: "768px",
        lg: "976px",
        ll: "1030px",
        xl: "1440px",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
