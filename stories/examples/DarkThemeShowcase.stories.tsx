import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import ColorPickerDemo from '../components/ColorPicker/ColorPickerDemo';
import { examplesDecorator } from '../utils/decorators';
import {
  darkThemePresets,
  defaultArgs,
  lightThemePresets,
  type ColorPreset
} from '../utils/storyData';

/**
 * Dark Theme Examples - Showcasing the enhanced dark theme capabilities
 */
const meta: Meta<typeof ColorPickerDemo> = {
  title: 'Examples/Dark Theme Showcase',
  component: ColorPickerDemo,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
**Dark Theme Showcase** - Demonstrating the comprehensive dark theme integration!

This showcase highlights all the dark theme enhancements that make React Iro Gradient Picker perfect for modern applications:

🌙 **What's Fixed:**
- Modal popups now respect dark theme
- All input fields and labels properly styled
- Gradient controls work in dark mode
- Tab navigation supports theming
- No more hardcoded white backgrounds!

🎨 **Features:**
- CSS custom properties for dynamic theming
- Theme persistence across sessions
- Smooth transitions between themes
- Professional dark color palette
        `
      }
    }
  },
  decorators: [examplesDecorator],
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Interactive demo with theme switching
 */
export const InteractiveTheme: Story = {
  render: () => {
    const [isDark, setIsDark] = React.useState(true);
    const [currentColor, setCurrentColor] = React.useState('#38bdf8');

    React.useEffect(() => {
      // Apply theme to the demo container
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }, [isDark]);

    return (
      <div
        style={{
          minHeight: '500px',
          background: isDark ? '#0f172a' : '#ffffff',
          color: isDark ? '#f8fafc' : '#1f2937',
          transition: 'all 0.3s ease',
          padding: '2rem',
          borderRadius: '12px'
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>🎨 Interactive Theme Demo</h2>
          <button
            onClick={() => setIsDark(!isDark)}
            style={{
              padding: '12px 24px',
              borderRadius: '8px',
              border: isDark ? '1px solid #475569' : '1px solid #d1d5db',
              background: isDark ? '#374151' : '#f9fafb',
              color: isDark ? '#f3f4f6' : '#374151',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}
          >
            {isDark ? '☀️' : '🌙'} Switch to {isDark ? 'Light' : 'Dark'} Theme
          </button>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2rem',
            flexWrap: 'wrap'
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <ColorPickerDemo
              {...defaultArgs}
              solid
              gradient
              value={currentColor}
              onChange={(value: string) => {
                setCurrentColor(value);
                return value;
              }}
            />
            <p style={{ margin: '16px 0 0', fontSize: '14px', opacity: 0.8 }}>
              Dual Picker
            </p>
          </div>

          <div
            style={{
              width: '120px',
              height: '120px',
              background: currentColor,
              borderRadius: '12px',
              border: isDark ? '2px solid #475569' : '2px solid #e2e8f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              boxShadow: isDark
                ? '0 8px 25px -5px rgba(0, 0, 0, 0.3)'
                : '0 8px 25px -5px rgba(0, 0, 0, 0.1)'
            }}
          >
            <div
              style={{
                color: isDark ? '#f8fafc' : '#1f2937',
                fontSize: '24px',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }}
            >
              🎨
            </div>
          </div>
        </div>

        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <p style={{ opacity: 0.7, fontSize: '14px' }}>
            Current color:{' '}
            <code
              style={{
                background: isDark ? '#374151' : '#f3f4f6',
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: '12px'
              }}
            >
              {currentColor}
            </code>
          </p>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Interactive demo where you can switch themes and see real-time updates to the color picker.'
      }
    }
  }
};
