/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        poppins_bold: ["Poppins-Bold"],
        poppins_black: ["Poppins-Black"],
        poppins_extraBold: ["Poppins-ExtraBold"],
        poppins_extraLight: ["Poppins-ExtraLight"],
        poppins_light: ["Poppins-Light"],
        poppins_medium: ["Poppins-Medium"],
        



      },
      
      colors: {
        primary: "#04e5d2",
        secondary: "#EEF500",
        tertiary: "#0be754",
        quaternary: "#0f0f30",
        quinary: "#4e4eef",
        senary: "#065ee2",
        senary: "#FBFBFB",
      },
      
    },
  },
  plugins: [],
}

