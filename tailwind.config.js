/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: { primary: '#09090f', card: '#0f0f1a', elevated: '#161625' },
        accent: { purple: '#8b5cf6', indigo: '#6366f1', blue: '#3b82f6', cyan: '#22d3ee', emerald: '#34d399', pink: '#ec4899', amber: '#fbbf24' },
        txt: { primary: '#eef0f6', secondary: '#9ca3b5', muted: '#5b6178' },
      },
      fontFamily: { display: ['Sora','sans-serif'], body: ['DM Sans','sans-serif'] },
    },
  },
  plugins: [],
}
