/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      body: ["Lato", "sans-serif"],
      title: ["pacifico", "sans-serif"],
    },
    extend: {
      colors: {
        "dyode-green": "#10504F",
      },
    },
  },
  plugins: [],
};
