module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb', // Brighter blue
        accent: '#06b6d4', // Vibrant cyan accent
        clinical: '#f8fafc', // Slightly lighter off-white
        surface: '#f1f5f9', // Softer card background
        border: '#e2e8f0', // Lighter border
        text: {
          primary: '#0f172a', // Deeper neutral
          secondary: '#64748b', // Modern muted
          muted: '#94a3b8', // Lighter muted
        },
        highlight: '#fbbf24', // Gold for highlights
        error: '#ef4444',
        success: '#22c55e',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
      fontSize: {
        'hero': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'h1': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h2': ['1.875rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        'h3': ['1.25rem', { lineHeight: '1.35', letterSpacing: '0' }],
        'base': ['1rem', { lineHeight: '1.6' }],
        'sm': ['0.9375rem', { lineHeight: '1.5' }],
        'xs': ['0.875rem', { lineHeight: '1.4' }],
      },
    },
  },
  plugins: [],
};
