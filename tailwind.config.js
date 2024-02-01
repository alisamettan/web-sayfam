/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "shadow-3xl": " -44px -28px 2px 0px rgba(500,33,77,1)",
      },
    },
  },
  plugins: [],
};
