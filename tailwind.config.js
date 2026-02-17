module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af', // Medical soft blue (darker, trustworthy)
        accent: '#0369a1', // Medical teal-blue (accent use only)
        clinical: '#fafbfc', // Off-white background
        surface: '#f5f7fa', // Light gray for cards
        border: '#e0e5eb', // Subtle border gray
        text: {
          primary: '#1f2937', // Dark neutral gray
          secondary: '#6b7280', // Muted gray
          muted: '#9ca3af', // Light gray text
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
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
