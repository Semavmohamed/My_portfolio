/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#101722',
        textColor: '#eee',
        hoverColor: '#466b9a',
        blueColor: "#3b82f6",
        blureBackground: "#101722ed",
        card: '#ffffff24'
      },
      boxShadow: {
        customBlue: '0px 0px 8px 0px #3B82F6',
      },
      keyframes: {
        fadeDown: {
          '0%': { opacity: 0, transform: 'translateY(-10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(5px)' },
        },
      },
      animation: {
        wiggle: 'wiggle 0.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
