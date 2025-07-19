/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#AF99FF",
        secondary: "#FFF422",
        buttonText: "#4B4B4B",
        paragraphTwo: "#4B4B4B",
        paragraph: "#5A5F6A",
        TextD: "#1A1A1A",
        background: "#F9F9F9",
        borderPrimary: "#E8E0FF",
        StatusesBG: "#DFF2E5",
        StatusesTG: "#3B7A57",
        StatusesBR: "#FDEDEC",
        StatusesTR: "#C0392B",
      },
    },
  },
  plugins: [],
};
