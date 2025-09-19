import type { Decorator } from '@storybook/react';
import React from 'react';

export const colorPickerDecorator = (Story: any) => (
  <div
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
);

export const documentationDecorator: Decorator = (Story) => (
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
);

export const examplesDecorator: Decorator = (Story) => (
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
);
