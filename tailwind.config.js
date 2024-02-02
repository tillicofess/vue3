/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
        '168': '42rem'
      }
    },
  },
  plugins: [
    require("daisyui"),
    "prettier-plugin-tailwindcss"
  ],
  daisyui: {
    themes: ["light"],
  },
}
