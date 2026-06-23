/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', lg: '2rem' },
      screens: { '2xl': '1200px' },
    },
    extend: {
      colors: {
        // Dark navy theme with a blue → cyan gradient accent (Datacentra look).
        ink: { DEFAULT: '#e8edf7', soft: '#c6cfe0', muted: '#8a97b0' },
        coal: { DEFAULT: '#e8edf7', soft: '#c6cfe0', deep: '#ffffff' },
        surface: { DEFAULT: '#0a1020', subtle: '#0f1830', muted: '#22304c' },
        cream: { DEFAULT: '#0a1020', soft: '#0f1830', deep: '#22304c' },
        night: { DEFAULT: '#070c18', soft: '#0d1626', deep: '#05080f' },
        card: { DEFAULT: '#0f1a30', soft: '#152340' },
        brand: {
          50: '#eff6ff', 100: '#dbeafe', 200: '#bfdbfe', 300: '#93c5fd',
          400: '#60a5fa', 500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8',
          800: '#1e40af', 900: '#1e3a8a', 950: '#172554',
        },
        accent: { DEFAULT: '#22d3ee', soft: '#67e8f9', deep: '#0891b2' },
        terracotta: { DEFAULT: '#3b82f6', soft: '#93c5fd', deep: '#1d4ed8' },
        gold: '#22d3ee',
        blue: { lake: '#3b82f6' },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'Cambria', 'serif'],
        bebas: ['"Bebas Neue"', 'Impact', 'Haettenschweiler', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],
      },
      borderRadius: { '4xl': '2rem' },
      boxShadow: {
        soft: '0 1px 2px rgba(0,0,0,0.4), 0 8px 24px -12px rgba(0,0,0,0.6)',
        lift: '0 24px 60px -28px rgba(0,0,0,0.85)',
        glow: '0 0 0 1px rgba(59,130,246,0.35), 0 18px 60px -18px rgba(59,130,246,0.6)',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
        'brand-radial':
          'radial-gradient(120% 120% at 50% 0%, rgba(37,99,235,0.30) 0%, rgba(37,99,235,0) 55%)',
        'lake-gradient': 'linear-gradient(95deg, #2563eb 0%, #3b82f6 42%, #22d3ee 100%)',
        'lake-gradient-soft': 'linear-gradient(120deg, rgba(37,99,235,0.18), rgba(59,130,246,0.16), rgba(34,211,238,0.16))',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'gradient-pan': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.22,1,0.36,1) both',
        marquee: 'marquee 32s linear infinite',
        'gradient-pan': 'gradient-pan 6s ease infinite',
        'spin-slow': 'spin-slow 40s linear infinite',
      },
    },
  },
  plugins: [],
}
