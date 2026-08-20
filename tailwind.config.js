module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          deep: '#06172C',
          DEFAULT: '#0B2347',
          dark: '#123A70',
        },
        primary: '#2563EB',
        royal: '#1D4ED8',
        accent: '#0EA5E9',
        clinical: {
          light: '#EAF4FF',
          ice: '#F2F8FF',
          off: '#F8FBFF',
        },
        surface: '#F2F8FF',
        border: '#D7E4F2',
        text: {
          primary: '#0F172A',
          secondary: '#475569',
          muted: '#64748B',
        },
        error: '#ef4444',
        success: '#22c55e',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
      fontSize: {
        hero: ['clamp(3rem, 6vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        display: ['clamp(2.4rem, 4.5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        h1: ['clamp(2rem, 3.2vw, 2.75rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        h2: ['clamp(1.75rem, 2.6vw, 2.25rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        h3: ['1.375rem', { lineHeight: '1.35', letterSpacing: '0' }],
        metric: ['clamp(2.75rem, 5vw, 4.25rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
        eyebrow: ['0.8125rem', { lineHeight: '1.4', letterSpacing: '0.14em' }],
        base: ['1.0625rem', { lineHeight: '1.65' }],
        sm: ['0.9375rem', { lineHeight: '1.55' }],
        xs: ['0.875rem', { lineHeight: '1.4' }],
      },
      maxWidth: {
        edit: '1400px',
      },
    },
  },
  plugins: [],
};
