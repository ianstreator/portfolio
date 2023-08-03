/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        righteous: "Righteous",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        theme: {
          primary: "#0F172A",

          secondary: "#475569",

          accent: "#334155",

          neutral: "#CBD5E1",
        },
        300: {
          indigo: "#A5B4FC",
          teal: "#5EEAD4",
          sky: "#7DD3FC",
          cyan: "#67E8F9",
          red: "#FCA5A5",
          yellow: "#FDE047",
          green: "#86EFAC",
          grey: "#D4D4D8",
        },
      },
    },
  },
  plugins: [],
};
