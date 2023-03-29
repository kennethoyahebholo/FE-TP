/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Satoshi: ["Satoshi", "sans-serif"],
    },
    fontSize: {
      lg: ["16px"],
      base: ["12px"],
      sm: [
        "10px",
        {
          fontWeight: "500",
        },
      ],
    },
    extend: {
      colors: {
        //  put default colors and default styles Here, because of time i couldn't do it
        background: "##F8F9FC",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
