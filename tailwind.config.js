/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Meddon: ['Meddon', 'cursive'],
        NotoSerif: ['Noto Serif', 'serif'],
        Ubuntu: ['Ubuntu', 'sans-serif'],
        NotoSansCHT: ['Noto Sans TC', 'sans-serif'],
      },
      screens: {
        'usm': '320px',
        // => @media (min-width: 320px) { ... }

        'sm': '480px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      animation: {
        flyInAndOut: 'flyInAndOut 4s ease-out',
        flyIn: 'flyIn 0.6s ease-out forwards',
        flyOut: 'flyOut 0.4s ease-out forwards',
      },
      keyframes: {
        flyInAndOut: {
          '0%': {
            bottom: '-5rem',
            left: '1rem',
          },
          '15%': {
            bottom: '1rem',
            left: '1rem',
          },
          '90%': {
            bottom: '1rem',
            left: '1rem',
          },
          '100%': {
            bottom: '-5rem',
            left: '1rem',
          },
        },
        flyIn: {
          '0%': {
            bottom: '-5rem',
            left: '1rem',
          },
          '100%': {
            bottom: '1rem',
            left: '1rem',
          },
        },
        flyOut: {
          '0%': {
            bottom: '1rem',
            left: '1rem',
          },
          '100%': {
            bottom: '-8rem',
            left: '1rem',
          },
        },
      },
    },
  },
  plugins: [],
}
