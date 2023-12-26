/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "system-ui", "sans-serif"],
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
      typography: ({ theme }) => ({
        "cold-slate": {
          css: {
            "--tw-prose-body": theme("colors.slate[400]"),
            "--tw-prose-headings": theme("colors.slate[200]"),
            "--tw-prose-lead": theme("colors.slate[400]"),
            "--tw-prose-links": theme("colors.emerald[600]"),
            "--tw-prose-bold": theme("colors.slate[400]"),
            "--tw-prose-counters": theme("colors.slate[400]"),
            "--tw-prose-bullets": theme("colors.slate[400]"),
            "--tw-prose-hr": theme("colors.slate[400]"),
            "--tw-prose-quotes": theme("colors.slate[400]"),
            "--tw-prose-quote-borders": theme("colors.slate[400]"),
            "--tw-prose-captions": theme("colors.slate[400]"),
            "--tw-prose-code": theme("colors.slate[400]"),
          },
        },
      }),
    },
  },
  plugins: [
    "prettier-plugin-tailwindcss",
    "prettier-plugin-astro",
    require("@tailwindcss/typography"),
  ],
};
