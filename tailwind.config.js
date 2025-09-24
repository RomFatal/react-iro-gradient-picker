/** @type {import('@tailwindcss/postcss').Config} */

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './stories/**/*.{js,jsx,ts,tsx}',
    './example/src/**/*.{js,jsx,ts,tsx}',
    './.storybook/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors for the color picker
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e'
        },
        // Dark theme colors
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a'
        }
      },
      boxShadow: {
        'color-picker': '0 2px 4px 0 rgba(0, 0, 0, 0.24)',
        'color-picker-dark': '0 2px 4px 0 rgba(0, 0, 0, 0.5)',
        popup: '0 8px 24px 0 rgba(0, 0, 0, 0.12)',
        'popup-dark': '0 8px 24px 0 rgba(0, 0, 0, 0.3)'
      }
    }
  }
};
