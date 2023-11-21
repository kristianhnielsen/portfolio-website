/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [
    "prettier-plugin-tailwindcss",
    "prettier-plugin-astro",
    require("@tailwindcss/typography"),
  ],
};
