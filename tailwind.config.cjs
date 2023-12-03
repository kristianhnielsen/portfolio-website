/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      animation: {
        orbit: "orbit 10s linear infinite",
        fadeOut: "fadeOut 2s linear",
      },
      keyframes: {
        orbit: {
          "100%": { rotate: "1turn" },
        },
        fadeOut: {
          "100%": { opacity: "0", scale: "0" },
        },
      },
    },
  },
  plugins: [
    "prettier-plugin-tailwindcss",
    "prettier-plugin-astro",
    require("@tailwindcss/typography"),
  ],
};
