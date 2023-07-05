/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "index.html"],
  theme: {
    extend: {
      fontFamily: {
        Nunito: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
