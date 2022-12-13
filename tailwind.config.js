/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pgreen': '#00C938',
        'pblue': '#1AB8DB'
        
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
      },
    },
    
  },
  plugins: [],
}
