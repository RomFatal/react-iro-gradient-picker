import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import ColorPicker from '../../src/components/core/Colorpicker';

const meta: Meta<typeof ColorPicker> = {
  title: 'Examples/Light Theme Showcase',
  component: ColorPicker,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Showcase of the color picker in light theme mode. Clean and professional appearance.'
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Basic light theme picker
 */
export const BasicLight: Story = {
  render: () => {
    const [color, setColor] = useState('#3B82F6');
    return (
      <div
        style={{
          padding: '40px',
          background: '#ffffff',
          minHeight: '500px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <ColorPicker
          theme='light'
          value={color}
          onChange={setColor}
          solid={true}
          gradient={false}
          popupWidth={280}
        />
      </div>
    );
  },
  decorators: [],
  parameters: {
    docs: {
      description: {
        story: 'Basic solid color picker in light theme.'
      }
    }
  }
};

/**
 * Light theme with gradient
 */
export const GradientLight: Story = {
  render: () => {
    const [gradient, setGradient] = useState(
      'linear-gradient(90deg, rgb(91, 76, 253) 0%, rgb(167, 139, 250) 100%)'
    );
    return (
      <div
        style={{
          padding: '40px',
          background: '#ffffff',
          minHeight: '500px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <ColorPicker
          theme='light'
          value={gradient}
          onChange={setGradient}
          solid={false}
          gradient={true}
          popupWidth={300}
          showGradientAngle={true}
          showGradientStops={true}
        />
      </div>
    );
  },
  decorators: [],
  parameters: {
    docs: {
      description: {
        story: 'Gradient picker in light theme with angle and stops controls.'
      }
    }
  }
};

/**
 * Light theme with wrapper
 */
export const WithWrapper: Story = {
  render: () => {
    const [color, setColor] = useState('#8b5cf6');
    return (
      <div
        style={{
          padding: '40px',
          background: '#ffffff',
          minHeight: '500px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <ColorPicker
          theme='light'
          showWrapper={true}
          value={color}
          onChange={setColor}
          solid={true}
          gradient={true}
          popupWidth={300}
        />
      </div>
    );
  },
  decorators: [],
  parameters: {
    docs: {
      description: {
        story:
          'Light theme color picker with wrapper - wrapper shows current color.'
      }
    }
  }
};

/**
 * Light vs Dark comparison
 */
export const LightVsDark: Story = {
  render: () => {
    const [lightColor, setLightColor] = useState('#5b4cfd');
    const [darkColor, setDarkColor] = useState('#5b4cfd');

    return (
      <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
        <div>
          <h3 style={{ marginBottom: '10px', color: '#1a1d23' }}>
            Light Theme
          </h3>
          <div
            style={{
              padding: '20px',
              background: '#ffffff',
              borderRadius: '8px'
            }}
          >
            <ColorPicker
              theme='light'
              value={lightColor}
              onChange={setLightColor}
              solid={true}
              gradient={false}
              popupWidth={260}
            />
          </div>
        </div>

        <div>
          <h3 style={{ marginBottom: '10px', color: '#f7f8f9' }}>Dark Theme</h3>
          <div
            style={{
              padding: '20px',
              background: '#1e293b',
              borderRadius: '8px'
            }}
          >
            <ColorPicker
              theme='dark'
              value={darkColor}
              onChange={setDarkColor}
              solid={true}
              gradient={false}
              popupWidth={260}
            />
          </div>
        </div>
      </div>
    );
  },
  decorators: [],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'Side-by-side comparison of light and dark themes.'
      }
    }
  }
};
