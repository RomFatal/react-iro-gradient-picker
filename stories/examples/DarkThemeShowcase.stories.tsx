import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import ReactGPicker from '../components/ColorPicker/ReactGPicker';
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
const meta: Meta<typeof ReactGPicker> = {
  title: 'Examples/Dark Theme Showcase',
  component: ReactGPicker,
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
 * Side-by-side comparison of light and dark themes
 */
export const ThemeComparison: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <h2
        style={{
          textAlign: 'center',
          marginBottom: '2rem',
          color: 'var(--colorpicker-text, #1f2937)'
        }}
      >
        🌙 Dark Theme vs ☀️ Light Theme
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        {/* Light Theme Section */}
        <div
          style={{
            background: '#ffffff',
            color: '#1f2937',
            padding: '2rem',
            borderRadius: '12px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}
        >
          <h3
            style={{
              textAlign: 'center',
              marginBottom: '1.5rem',
              color: '#374151'
            }}
          >
            ☀️ Light Theme
          </h3>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: 'center'
            }}
          >
            {lightThemePresets.map((preset: ColorPreset, index: number) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <ReactGPicker
                  {...defaultArgs}
                  solid
                  value={preset.value}
                  colorBoardHeight={80}
                  popupWidth={200}
                />
                <p
                  style={{ margin: '8px 0 0', fontSize: '12px', opacity: 0.7 }}
                >
                  {preset.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Dark Theme Section */}
        <div
          style={{
            background: '#1e293b',
            color: '#f8fafc',
            padding: '2rem',
            borderRadius: '12px',
            border: '1px solid #475569',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)'
          }}
        >
          <h3
            style={{
              textAlign: 'center',
              marginBottom: '1.5rem',
              color: '#e2e8f0'
            }}
          >
            🌙 Dark Theme
          </h3>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: 'center'
            }}
          >
            {darkThemePresets.map((preset: ColorPreset, index: number) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <ReactGPicker
                  {...defaultArgs}
                  solid
                  value={preset.value}
                  colorBoardHeight={80}
                  popupWidth={200}
                />
                <p
                  style={{ margin: '8px 0 0', fontSize: '12px', opacity: 0.7 }}
                >
                  {preset.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Side-by-side comparison showing how the color picker adapts to both light and dark themes.'
      }
    }
  }
};

/**
 * Interactive demo with theme switching
 */
export const InteractiveThemeDemo: Story = {
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
            <ReactGPicker
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
