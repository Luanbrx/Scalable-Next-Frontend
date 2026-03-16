/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          950: "#0a0a0f",
          900: "#0f0f17",
          800: "#16161f",
          700: "#1e1e2a",
          600: "#26263a",
        },
        accent: {
          DEFAULT: "#6c63ff",
          hover: "#7c74ff",
          muted: "#6c63ff33",
        },
      },
    },
  },
  plugins: [],
};

export default config;