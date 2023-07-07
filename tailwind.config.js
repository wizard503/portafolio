/**@type {import ('tailwindcss').Config} */

export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
      // primary: 'Righteous',
      // secondary: 'Poppins',
      // tertiary: 'Orbitron',
      // quaternary: 'Rajdhani'
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      xs: '370px',
      sm: '480px',
      md: '640px',
      lg: '768px',
      xl: '1024px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
      },
      fontFamily: {
        'rajdhani': ['Rajdhani', 'sans-serif'],
      },
      fontWeight: {
        '500': 500,
        '700': 700,
      },
    },
  },
  plugins: [],
}

