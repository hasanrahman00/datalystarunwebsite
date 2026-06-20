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
        // Dark "lakeb2b-style" palette: near-black base, light text, and a
        // blue→purple→magenta gradient accent.
        ink: { DEFAULT: '#ecebf6', soft: '#cfcce0', muted: '#9794ad' },
        coal: { DEFAULT: '#ecebf6', soft: '#cfcce0', deep: '#ffffff' },
        surface: { DEFAULT: '#0b0b16', subtle: '#14141f', muted: '#2a2a3e' },
        cream: { DEFAULT: '#0b0b16', soft: '#14141f', deep: '#2a2a3e' },
        night: { DEFAULT: '#07070f', soft: '#11111c', deep: '#050509' },
        card: { DEFAULT: '#14141f', soft: '#1b1b2b' },
        brand: {
          50: '#f3effe', 100: '#e9e1fd', 200: '#d4c5fb', 300: '#b69bf7',
          400: '#9a72f1', 500: '#8b5cf6', 600: '#7c3aed', 700: '#6d28d9',
          800: '#5b21b6', 900: '#4c1d95', 950: '#2e1065',
        },
        accent: { DEFAULT: '#e64bd0', soft: '#f4a8e8', deep: '#b51fa0' },
        terracotta: { DEFAULT: '#8b5cf6', soft: '#b69bf7', deep: '#6d28d9' },
        gold: '#e64bd0',
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
        glow: '0 0 0 1px rgba(139,92,246,0.35), 0 18px 60px -18px rgba(139,92,246,0.6)',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
        'brand-radial':
          'radial-gradient(120% 120% at 50% 0%, rgba(124,58,237,0.30) 0%, rgba(124,58,237,0) 55%)',
        'lake-gradient': 'linear-gradient(95deg, #3b82f6 0%, #8b5cf6 45%, #e64bd0 100%)',
        'lake-gradient-soft': 'linear-gradient(120deg, rgba(59,130,246,0.18), rgba(139,92,246,0.16), rgba(230,75,208,0.16))',
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
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.22,1,0.36,1) both',
        marquee: 'marquee 32s linear infinite',
        'gradient-pan': 'gradient-pan 6s ease infinite',
      },
    },
  },
  plugins: [],
}
