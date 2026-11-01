/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lab: {
          black: "#080A08",
          charcoal: "#151A16",
          dark: "#0F1410",
          card: "#121713",
          border: "#202A22",
          'border-active': "#354A39",
          green: "#80CC28",
          toxic: "#B5E853",
          sand: "#C5A77A",
          muted: "#8B948E",
          amber: "#E5A93C",
          smoke: "rgba(128, 204, 40, 0.15)",
        }
      },
      fontFamily: {
        cinematic: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'glow-green': '0 0 25px rgba(181, 232, 83, 0.35)',
        'glow-sm': '0 0 12px rgba(128, 204, 40, 0.25)',
        'glow-flask': '0 0 50px rgba(128, 204, 40, 0.45)',
        'glow-sand': '0 0 25px rgba(197, 167, 122, 0.25)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'bubble': 'bubble 3s ease-in infinite',
        'flicker': 'flicker 0.15s infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        bubble: {
          '0%': { transform: 'translateY(0) scale(0.8)', opacity: '0.2' },
          '50%': { opacity: '0.9' },
          '100%': { transform: 'translateY(-60px) scale(1.2)', opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}

