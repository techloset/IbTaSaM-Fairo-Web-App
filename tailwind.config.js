/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        _greenColor: "#184640",
        _lightGreenColor: "#23CE9D",
        _grayColor: "#A3A7B0",
        _grayDark: "#121828",
        _grayLight: "#E8E9EB",
        _grayborder: "#EEEFF1",
        _blackColor: "#030306",
        _redColor: "#E2414B",
        _paratColor: "#23CE9D",
        _blueColor: "#6E41E2",
        _verificationCOlor: "#6551E0",
        _bgSlateColor: "#F6FBFE",
      },
    },
  },
  plugins: [],
};
