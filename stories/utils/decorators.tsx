import type { Decorator } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from '../../src/components/providers/ThemeContext';

export const colorPickerDecorator = (Story: any) => (
  <ThemeProvider defaultTheme='dark'>
    <div
      className='dark'
      style={{
        padding: '2rem',
        background: '#1e293b',
        border: '1px solid #475569',
        borderRadius: '12px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '400px',
        width: '100%'
      }}
    >
      <Story />
    </div>
  </ThemeProvider>
);

export const documentationDecorator: Decorator = (Story) => (
  <ThemeProvider defaultTheme='dark'>
    <div
      className='dark'
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '2rem',
        background: '#1e293b',
        color: '#f8fafc',
        borderRadius: '8px',
        minHeight: '100vh'
      }}
    >
      <Story />
    </div>
  </ThemeProvider>
);

export const examplesDecorator: Decorator = (Story) => (
  <ThemeProvider defaultTheme='dark'>
    <div
      className='dark'
      style={{
        padding: '2rem',
        background: '#1e293b',
        color: '#f8fafc',
        borderRadius: '8px',
        minHeight: '100vh'
      }}
    >
      <Story />
    </div>
  </ThemeProvider>
);
