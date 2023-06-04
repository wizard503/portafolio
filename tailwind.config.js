/**@type {import ('tailwindcss').Config} */

export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: 'Righteous',
      secondary: 'Poppins',
      tertiary: 'Orbitron',
      quaternary: 'Rajdhani'
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
      },
    },
  },
  plugins: [],
}

