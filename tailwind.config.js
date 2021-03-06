module.exports = {
  purge: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      backgroundImage: () => ({
        banner: "url('/5.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
