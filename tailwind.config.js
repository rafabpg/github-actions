export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3d': '0 20px 40px rgba(0, 0, 0, 0.4), 0 10px 10px rgba(0, 0, 0, 0.3)',
        '3d-hover': '0 30px 60px rgba(0, 0, 0, 0.5), 0 15px 15px rgba(0, 0, 0, 0.4)',
      },
      transform: {
        'rotateX-10': 'rotateX(10deg)',
        'rotateY-10': 'rotateY(10deg)',
      },
      perspective: {
        '500': '500px',
      },
      colors: {
        "gray-900": "#121212",
        "gray-700": "#2E2E2E",
        "gray-600": "#424242",
        "cyan-400": "#00A8E8",
        "purple-900": "#8A2BE2",
        "pink-500": "#FF007F",
        "green-400": "#00FF7F",
        "blue-500": "#007BFF",
      }
    },
  },
  plugins: [],
};