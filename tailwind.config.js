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
        fadeIn: 'fadeIn 1s',
        fadeOut: 'fadeOut 1s'
      },
      keyframes: {
        fadeIn: {
          '0%': {
            bottom: '-5rem',
            left: '1rem',
          },
          '100%': {
            bottom: '1rem',
            left: '1rem',
          },
        },
        fadeOut: {
          '0%': {
            bottom: '1rem',
            left: '1rem',
          },
          '100%': {
            bottom: '-5rem',
            left: '1rem',
          },
        },
      },
      transitionDelay: {
        '2000': '2000ms',
      },
    },
  },
  plugins: [],
}
