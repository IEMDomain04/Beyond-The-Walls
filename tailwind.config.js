/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgCard: '#FCD8AE',
        buttonCard: '#E45E24',
      },
      width: {
        widthCard: '562px'
      },
      fontSize: {
        placeTitle: '30px',
        placeDesc: '15px',
      },
    },
  },
  plugins: [],
}

