/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        space: {
          primary: "#0F172A",

          secondary: "#475569",

          accent: "#334155",

          neutral: "#CBD5E1",

          "base-100": "#423e56",

          info: "#6c96d5",

          success: "#57e5c4",

          warning: "#efb343",

          error: "#ee4f49",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
