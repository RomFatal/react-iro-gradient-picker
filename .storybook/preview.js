import React from 'react';
import { ThemeProvider } from '../src/context/ThemeContext';
import '../src/styles/tailwind.css';
import './storybook-dark.css';

export const parameters = {
  options: {
    storySort: (a, b) => {
      const aName = a[0];
      const bName = b[0];
      return aName < bName ? 1 : -1;
    }
  },
  controls: { expanded: true },
  // Configure Storybook to use dark theme
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#0f172a'
      },
      {
        name: 'light',
        value: '#ffffff'
      }
    ]
  },
  // Set docs page to dark theme
  docs: {
    theme: {
      base: 'dark',
      colorPrimary: '#0ea5e9',
      colorSecondary: '#38bdf8',

      // UI
      appBg: '#0f172a',
      appContentBg: '#1e293b',
      appBorderColor: '#475569',
      appBorderRadius: 4,

      // Typography
      fontBase: '"Open Sans", sans-serif',
      fontCode: 'monospace',

      // Text colors
      textColor: '#f8fafc',
      textInverseColor: '#0f172a',

      // Toolbar default and active colors
      barTextColor: '#94a3b8',
      barSelectedColor: '#38bdf8',
      barBg: '#1e293b',

      // Form colors
      inputBg: '#334155',
      inputBorder: '#475569',
      inputTextColor: '#f8fafc',
      inputBorderRadius: 4
    }
  }
};

export const decorators = [
  (Story) =>
    React.createElement(
      ThemeProvider,
      { defaultTheme: 'dark' }, // Set dark as default theme
      React.createElement(
        'div',
        {
          style: {
            padding: '20px',
            backgroundColor: 'var(--colorpicker-bg)',
            color: 'var(--colorpicker-text)',
            minHeight: '100vh'
          },
          className: 'dark' // Ensure dark class is applied
        },
        React.createElement(Story)
      )
    )
];
