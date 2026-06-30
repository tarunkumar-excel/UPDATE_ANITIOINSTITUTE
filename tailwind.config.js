module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/styles/**/*.css',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        gold: {
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
        },
      },
      boxShadow: {
        gold:    '0 4px 24px 0 rgba(245,158,11,0.25)',
        blue:    '0 4px 24px 0 rgba(29,78,216,0.25)',
        card:    '0 2px 16px 0 rgba(15,23,42,0.08)',
        'card-lg':'0 8px 40px 0 rgba(15,23,42,0.14)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        ticker: {
          '0%':   { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float:    'float 6s ease-in-out infinite',
        ticker:   'ticker 30s linear infinite',
        'fade-in':'fade-in 0.5s ease-out both',
      },
      fontFamily: {
        display: ["'Playfair Display'", 'serif'],
        body:    ["'DM Sans'", 'sans-serif'],
      },
    },
  },
  plugins: [],
};
