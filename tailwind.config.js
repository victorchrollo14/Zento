/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#333333",
        lBlue: "#38B5FF",
        drkBlue: "#1C1CFB",
        drkstBlue: "#00008C",
        lYellow: "#FFEE00",
        drkYellow: "#FFDE59",
        drkPurple: "#641281",
        drkstPurple: "#2D2848",
        "neon-green": "#9FFFB3",
        "light-green": "#C1FF72",
      },
    },
    // fontSize: {
    //   clamp: "clamp(1rem, 5vw, 1.2rem)",
    // },
  },
  plugins: [require("flowbite/plugin")],
};
