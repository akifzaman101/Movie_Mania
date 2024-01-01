module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkMode: 'class',
    theme: {
      extend: {
        Screen: {
          "Other": {'min': '340px', 'max': '1200px'},
        },
        colors: {
          darkbg: "#1E293B"
        }
      },
    },
    plugins: [],
  }