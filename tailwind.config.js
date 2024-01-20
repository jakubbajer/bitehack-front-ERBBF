/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
  theme: {
    colors: {
      text: '#191519',
      background: '#f9f6f9',
      primary: '#5b2b5e',
      secondary: '#cf7cd5',
      accent: '#aa27b4',
      white: '#ffffff',
      gray: '#fafafa'
     },
     fontSize: {  
      sm: '0.750rem',
      base: '1rem',
      l: '1.1rem',
      xl: '1.333rem',
      '2xl': '1.777rem',
      '3xl': '2.369rem',
      '4xl': '3.158rem',
      '5xl': '4.210rem',
    },
    fontFamily: {
      heading: 'Nunito Sans',
      body: 'Nunito Sans',
    },
    fontWeight: {
      normal: '400',
      bold: '700',
    },
  }
};
