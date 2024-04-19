/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: { lg:{max: "1500px"},  md: { max: "1250px" }, sm: { max: "782px" } },
    fontFamily: {
      'Satoshi': 'Satoshi'
    },
    colors: {
      'red': 'red',
      "lemon": "#F3FAE9",
      "green": {
        100: "#CFE8A6",
        200: "#8AC825",
      },
      'transparent': 'transparent',
      'white': '#ffffff',
      'black': {
        30: '#797A76',
        40: '#797A76',
        50: '#5B5D58',
        200: '#014022',
        300: '#3F423C',
        500: '#21241E'
      },
      "grey": "#afb5c0a1"
    },
    extend: {},
  },
  plugins: [],
}

