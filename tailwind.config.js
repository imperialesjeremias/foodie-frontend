// tailwind.config.js

const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        titulo: ['titulo', 'sans-serif'],
        subtitulo: ['texto', 'sans-serif'],
        texto: ['texto-fino', 'sans-serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [require("daisyui")],
};
