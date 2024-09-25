/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00246B",
        secondary: "#CADCFC",
        textColor: "#1F2937",
        heading: "#111827",
        active: "#97BC62",
        overlayColor: "#080d2696",
      },
    },
  },
  plugins: [],
};
