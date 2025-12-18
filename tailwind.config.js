/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#5b2d8b",
        primary: "#7c3aed",
        accent: "#f59e0b",
        dark: "#313337ff",
        customBg: "#EDEDEB",
      },
    },
  },
  plugins: [],
}

