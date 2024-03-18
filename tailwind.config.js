const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto Condensed", "sans- serif"],
      },
      backgroundImage: {
        'hero': "url('./src/Assets/Computer_BG3.jpg')",
      }
    },
  },
  plugins: [],
});
