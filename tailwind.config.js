/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "*.html"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 0px 50px -2px rgba(5, 7, 41, 0.11)",
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["hover"],
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
