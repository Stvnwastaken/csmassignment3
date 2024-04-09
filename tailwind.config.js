// const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./*.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    colors: {
      text: "#e3ebe8",
      background: "#0e1412",
      primary: "#b4c9c3",
      secondary: "#41535a",
      accent: "#8293a6",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      dropShadow: {
        lg: "1px 3px 40px #ffffff",
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["night"], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
