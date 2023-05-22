/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        stripes:
          'linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1) 12.5%, transparent 12.5%, transparent)',
      },

      backgroundSize: {
        stripes: '100% 8px',
      },

      blur: {
        full: '194px',
      },

      colors: {
        gray: {
          50: '#fffffe',
          100: '#a7a9be',
          200: '#9e9ea0',
          300: '#727275',
          400: '#56565a',
          500: '#2c2c31',
          600: '#28282d',
          700: '#1f1f23',
          800: '#18181b',
          900: '#0f0e17',
        },
        red: {
          50: '#ffffff',
          100: '#fde7e4',
          200: '#fac5be',
          300: '#f8a398',
          400: '#f25f4c',
          500: '#ef3d26',
          600: '#dc2710',
          700: '#b6210d',
          800: '#901a0a',
          900: '#6a1308',
        },
        orange: {
          50: '#fffdfb',
          100: '#ffead2',
          200: '#ffd6a9',
          300: '#ffc380',
          400: '#ffb058',
          500: '#ff8906',
          600: '#dc7400',
          700: '#b35e00',
          800: '#8b4900',
          900: '#623300',
        },
        pink: {
          50: '#fce6ee',
          100: '#f7c2d5',
          200: '#f39ebb',
          300: '#ee79a2',
          400: '#e53170',
          500: '#d31b5b',
          600: '#ae164b',
          700: '#8a113c',
          800: '#660d2c',
          900: '#42081c',
        },
      },

      fontFamily: {
        sans: 'var(--font-roboto)',
        alt: 'var(--font-bai-jamjuree)',
      },

      fontSize: {
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
}
