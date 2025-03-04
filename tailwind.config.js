/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      "gray-900":"#121212",
      "gray-800":"#1E1E1E",
      "gray-200":"#EAEAEA",
      "gray-400":"#B3B3B3",
      "cyan-400":"#00A8E8",
      "purple-900":"#8A2BE2",
      "green-400":"#00FF7F",
      "pink-500":"#FF007F"
    }
  },
  plugins: [],
}