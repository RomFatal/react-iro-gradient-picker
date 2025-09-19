import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { documentationDecorator } from '../utils/decorators';

/**
 * Getting Started documentation for React Iro Gradient Picker
 */
const meta: Meta = {
  title: 'Documentation/Getting Started',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Complete guide to getting started with React Iro Gradient Picker'
      }
    }
  },
  decorators: [documentationDecorator],
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj;

export const Installation: Story = {
  render: () => (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1
        style={{
          color: '#38bdf8', // Bright blue for dark theme
          marginBottom: '2rem'
        }}
      >
        🚀 Getting Started with React Iro Gradient Picker
      </h1>

      <div style={{ marginBottom: '3rem' }}>
        <h2>📦 Installation</h2>
        <div
          style={{
            background: '#1e293b', // Dark code background
            color: '#f8fafc', // Light text
            padding: '1rem',
            borderRadius: '8px',
            fontFamily: 'Monaco, "Cascadia Code", monospace',
            fontSize: '14px',
            margin: '1rem 0'
          }}
        >
          <div>npm install react-iro-gradient-picker</div>
          <div style={{ opacity: 0.6, marginTop: '8px' }}># or</div>
          <div>yarn add react-iro-gradient-picker</div>
        </div>
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h2>🎨 Basic Usage</h2>
        <div
          style={{
            background: '#1e293b', // Dark code background
            color: '#f8fafc', // Light text
            padding: '1rem',
            borderRadius: '8px',
            fontFamily: 'Monaco, "Cascadia Code", monospace',
            fontSize: '14px',
            margin: '1rem 0',
            whiteSpace: 'pre'
          }}
        >
          {`import ReactGPicker from 'react-iro-gradient-picker';
import { ThemeProvider } from 'react-iro-gradient-picker/context/ThemeContext';

function App() {
  const [color, setColor] = useState('#3B82F6');

  return (
    <ThemeProvider defaultTheme="dark">
      <ReactGPicker
        solid
        value={color}
        onChange={setColor}
      />
    </ThemeProvider>
  );
}`}
        </div>
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h2>✨ Dark Theme Integration</h2>
        <p>React Iro Gradient Picker comes with complete dark theme support:</p>
        <ul>
          <li>✅ All components respond to theme changes</li>
          <li>✅ CSS custom properties for easy theming</li>
          <li>✅ Theme persistence with localStorage</li>
          <li>✅ Smooth transitions between themes</li>
        </ul>

        <div
          style={{
            background: '#1e293b', // Dark code background
            color: '#f8fafc', // Light text
            padding: '1rem',
            borderRadius: '8px',
            fontFamily: 'Monaco, "Cascadia Code", monospace',
            fontSize: '14px',
            margin: '1rem 0',
            whiteSpace: 'pre'
          }}
        >
          {`import { ThemeToggle } from 'react-iro-gradient-picker/components/ThemeToggle';

<ThemeProvider defaultTheme="dark">
  <ThemeToggle />
  <ReactGPicker gradient solid />
</ThemeProvider>`}
        </div>
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h2>🎛️ Available Props</h2>
        <div
          style={{
            background: '#1e293b', // Dark surface background
            border: '1px solid #475569', // Dark border
            borderRadius: '8px',
            padding: '1rem',
            margin: '1rem 0'
          }}
        >
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr
                style={{
                  borderBottom: '1px solid #475569' // Dark border
                }}
              >
                <th style={{ textAlign: 'left', padding: '8px' }}>Prop</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Type</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '8px', fontFamily: 'monospace' }}>
                  solid
                </td>
                <td style={{ padding: '8px' }}>boolean</td>
                <td style={{ padding: '8px' }}>Enable solid color picker</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', fontFamily: 'monospace' }}>
                  gradient
                </td>
                <td style={{ padding: '8px' }}>boolean</td>
                <td style={{ padding: '8px' }}>Enable gradient picker</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', fontFamily: 'monospace' }}>
                  value
                </td>
                <td style={{ padding: '8px' }}>string</td>
                <td style={{ padding: '8px' }}>Current color/gradient value</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', fontFamily: 'monospace' }}>
                  onChange
                </td>
                <td style={{ padding: '8px' }}>function</td>
                <td style={{ padding: '8px' }}>Callback when value changes</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', fontFamily: 'monospace' }}>
                  showAlpha
                </td>
                <td style={{ padding: '8px' }}>boolean</td>
                <td style={{ padding: '8px' }}>
                  Show alpha transparency controls
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
};
