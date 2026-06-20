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
        // Core tokens remapped to the warm editorial palette so every page
        // (which uses ink/brand/accent/surface) matches the homepage.
        ink: {
          DEFAULT: '#1a1a1a',
          soft: '#2a2a2a',
          muted: '#6e655b',
        },
        brand: {
          50: '#fcf1ec',
          100: '#f8e0d6',
          200: '#f0c2b0',
          300: '#e69c82',
          400: '#db7657',
          500: '#cf5c3e',
          600: '#c8553d',
          700: '#a8432e',
          800: '#8a3827',
          900: '#723125',
          950: '#3e1710',
        },
        accent: {
          DEFAULT: '#c9a24a',
          soft: '#e3c77f',
          deep: '#9c7a2e',
        },
        surface: {
          DEFAULT: '#fbf1e5',
          subtle: '#f4e7d4',
          muted: '#ece0cd',
        },
        // Warm editorial palette (matches cricket-club.daddy-leads.com)
        cream: {
          DEFAULT: '#fbf1e5',
          soft: '#f4e7d4',
          deep: '#ece0cd',
        },
        coal: {
          DEFAULT: '#1a1a1a',
          soft: '#2a2a2a',
          deep: '#0a0a0a',
        },
        terracotta: {
          DEFAULT: '#c8553d',
          soft: '#e08368',
          deep: '#a8432e',
        },
        gold: '#c9a24a',
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
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(11,16,32,0.04), 0 8px 24px -12px rgba(11,16,32,0.18)',
        lift: '0 24px 60px -28px rgba(31,27,90,0.45)',
        glow: '0 0 0 1px rgba(200,85,61,0.18), 0 18px 50px -20px rgba(200,85,61,0.55)',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(to right, rgba(11,16,32,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,16,32,0.045) 1px, transparent 1px)',
        'brand-radial':
          'radial-gradient(120% 120% at 50% 0%, rgba(200,85,61,0.20) 0%, rgba(200,85,61,0) 55%)',
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
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.22,1,0.36,1) both',
        marquee: 'marquee 32s linear infinite',
      },
    },
  },
  plugins: [],
}
