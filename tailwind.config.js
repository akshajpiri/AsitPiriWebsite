/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        apple: {
          blue: '#0071E3',
          'blue-hover': '#0077ED',
          'blue-light': '#EBF3FF',
          gray: {
            50: '#F5F5F7',
            100: '#E8E8ED',
            200: '#D1D1D6',
            300: '#AEAEB2',
            400: '#8E8E93',
            500: '#636366',
            600: '#48484A',
            700: '#3A3A3C',
            800: '#2C2C2E',
            900: '#1C1C1E',
          },
          text: '#1D1D1F',
          secondary: '#6E6E73',
          tertiary: '#86868B',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        display: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        float: 'float 5s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'apple-sm': '0 1px 4px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.04)',
        apple: '0 2px 8px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)',
        'apple-md': '0 4px 12px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.06)',
        'apple-lg': '0 8px 24px rgba(0,0,0,0.08), 0 20px 40px rgba(0,0,0,0.06)',
        'apple-xl': '0 16px 48px rgba(0,0,0,0.10), 0 32px 64px rgba(0,0,0,0.08)',
        'apple-blue': '0 4px 16px rgba(0,113,227,0.24)',
      },
    },
  },
  plugins: [],
}
