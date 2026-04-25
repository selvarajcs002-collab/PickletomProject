/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F44725",
        background: "transparent",
        surface: "#1e2128",
        accent: "#D92626",
        white: "#FFFFFF",
      },
    },
  },
  presets: [require("nativewind/preset")],
  plugins: [],
}
