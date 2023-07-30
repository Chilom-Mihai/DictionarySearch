/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    extend: {},
    colors: {
      fullBlack: "#050505",
      fullBlack2: "#1F1F1F",
      fullBlack3: "#2D2D2D",
      fullBlack4: "#3A3A3A",
      fullWhite: "#FFFFFF",
      fullWhite2: "#F4F4F4",
      fullWhite3: "#E9E9E9",
      fullWhite4: "#757575",
      fullRed: "#FF5252",
      fullPink: "#A445ED",
    },
    fontFamily: {
      "Sans Serif": ["Inter", "Sans Serif"],
      Serif: ["Lora", " Serif"],
      Mono: ["Inconsolata", "Mono"],
    },
    screens: {
      md: "900px",
    },
    fontSize: {
      "heading-l": ["6.4rem", { lineHeight: "7.7rem" }],
      "heading-2": ["2.4rem", { lineHeight: "2.9rem" }],
      "heading-3": ["2rem", { lineHeight: "2.4rem" }],
      "heading-4": ["1.8rem", { lineHeight: "2.4rem" }],
      "heading-5": ["1.4rem", { lineHeight: "1.7rem" }],
    },
    boxShadow: {
      shadow1: "0px 5px 30px 0px rgba(0, 0, 0, 0.10)",
    },
  },
  plugins: [],
};
