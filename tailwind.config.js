/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#061A30',
          deep: '#030E1C',
          mid: '#0D2E52',
          rim: '#15427A',
        },
        sky: {
          DEFAULT: '#0383C9',
          light: '#3AABDF',
        },
        saffron: {
          DEFAULT: '#F5A623',
          light: '#FBC860',
        },
        jade: {
          DEFAULT: '#1A9612',
        },
        cream: '#F4F7FB',
      },
    },
  },
  plugins: [],
};