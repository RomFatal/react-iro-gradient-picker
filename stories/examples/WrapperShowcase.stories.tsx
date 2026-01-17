import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ColorPicker from '../../src/components/core/Colorpicker';
import { examplesDecorator } from '../utils/decorators';
import { ThemeProvider } from '../../src/components/providers/ThemeContext';

const meta: Meta<typeof ColorPicker> = {
  title: 'Examples/Wrapper Showcase',
  component: ColorPicker,
  decorators: [examplesDecorator],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Showcase of the new wrapper feature that automatically uses the color value as background.'
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Basic wrapper - background automatically matches the picker color
 */
export const AutomaticBackground: Story = {
  render: () => {
    const [color, setColor] = useState('#e77ab');
    return (
      <div style={{ padding: '20px' }}>
        <ColorPicker
          showWrapper={true}
          value={color}
          onChange={setColor}
          solid={true}
          gradient={true}
          popupWidth={300}
        />
        <p style={{ marginTop: '20px', textAlign: 'center', color: '#fff' }}>
          Current: {color}
        </p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'The wrapper background automatically matches the selected color. Try changing colors to see it update!'
      }
    }
  }
};

/**
 * Solid color with wrapper
 */
export const SolidColorWrapper: Story = {
  render: () => {
    const [color, setColor] = useState('#3B82F6');
    return (
      <ColorPicker
        showWrapper={true}
        value={color}
        onChange={setColor}
        solid={true}
        gradient={false}
        popupWidth={280}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Solid color picker with automatic background wrapper.'
      }
    }
  }
};

/**
 * Gradient with wrapper
 */
export const GradientWrapper: Story = {
  render: () => {
    const [color, setColor] = useState(
      'linear-gradient(90deg, rgb(255, 177, 153) 0%, rgb(255, 8, 68) 100%)'
    );
    return (
      <ColorPicker
        showWrapper={true}
        value={color}
        onChange={setColor}
        solid={false}
        gradient={true}
        popupWidth={300}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Gradient picker with wrapper - the background shows the current gradient!'
      }
    }
  }
};

/**
 * Preset gradient backgrounds
 */
export const PresetGradients: Story = {
  render: () => {
    const [color, setColor] = useState('#667eea');
    const [preset, setPreset] = useState('');

    const presets = [
      { name: 'Default (Auto)', className: '' },
      { name: 'Sunset', className: 'gradient-sunset' },
      { name: 'Ocean', className: 'gradient-ocean' },
      { name: 'Forest', className: 'gradient-forest' },
      { name: 'Fire', className: 'gradient-fire' },
      { name: 'Cool', className: 'gradient-cool' },
      { name: 'Rose', className: 'gradient-rose' },
      { name: 'Purple', className: 'gradient-purple' }
    ];

    return (
      <div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ color: '#fff', marginRight: '10px' }}>
            Background Preset:
          </label>
          <select
            value={preset}
            onChange={(e) => setPreset(e.target.value)}
            style={{
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
          >
            {presets.map((p) => (
              <option key={p.className} value={p.className}>
                {p.name}
              </option>
            ))}
          </select>
        </div>

        <ColorPicker
          showWrapper={true}
          wrapperClassName={preset}
          value={color}
          onChange={setColor}
          solid={true}
          gradient={true}
          popupWidth={300}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Choose from preset gradient backgrounds, or leave default to use the picker color automatically.'
      }
    }
  }
};

/**
 * Custom wrapper background override
 */
export const CustomBackground: Story = {
  render: () => {
    const [color, setColor] = useState('#10b981');
    return (
      <ColorPicker
        showWrapper={true}
        wrapperBackground="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        value={color}
        onChange={setColor}
        solid={true}
        gradient={false}
        popupWidth={280}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Override the automatic background with a custom gradient or solid color.'
      }
    }
  }
};

/**
 * Custom wrapper size
 */
export const CustomSize: Story = {
  render: () => {
    const [color, setColor] = useState('#f59e0b');
    return (
      <ColorPicker
        showWrapper={true}
        wrapperHeight="600px"
        wrapperWidth="450px"
        wrapperPadding="40px"
        value={color}
        onChange={setColor}
        solid={true}
        gradient={true}
        popupWidth={350}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Customize wrapper size, padding, and dimensions.'
      }
    }
  }
};

/**
 * Without rounded corners
 */
export const NoRoundedCorners: Story = {
  render: () => {
    const [color, setColor] = useState('#ec4899');
    return (
      <ColorPicker
        showWrapper={true}
        wrapperRounded={false}
        value={color}
        onChange={setColor}
        solid={true}
        gradient={false}
        popupWidth={280}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Wrapper without rounded corners for a more angular design.'
      }
    }
  }
};

/**
 * Comparison: With and Without Wrapper
 */
export const Comparison: Story = {
  render: () => {
    const [color1, setColor1] = useState('#3B82F6');
    const [color2, setColor2] = useState('#3B82F6');

    return (
      <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
        <div>
          <h3 style={{ color: '#fff', marginBottom: '10px' }}>
            Without Wrapper
          </h3>
          <ColorPicker
            showWrapper={false}
            value={color1}
            onChange={setColor1}
            solid={true}
            gradient={false}
            popupWidth={260}
          />
        </div>

        <div>
          <h3 style={{ color: '#fff', marginBottom: '10px' }}>With Wrapper</h3>
          <ColorPicker
            showWrapper={true}
            value={color2}
            onChange={setColor2}
            solid={true}
            gradient={false}
            popupWidth={260}
          />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Side-by-side comparison of the color picker with and without the wrapper.'
      }
    }
  }
};

/**
 * Live gradient editing with wrapper
 */
export const LiveGradientEdit: Story = {
  render: () => {
    const [gradient, setGradient] = useState(
      'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f857a6 100%)'
    );

    return (
      <div>
        <ColorPicker
          showWrapper={true}
          value={gradient}
          onChange={setGradient}
          solid={false}
          gradient={true}
          popupWidth={320}
          showGradientAngle={true}
          showGradientStops={true}
          allowAddGradientStops={true}
        />
        <div
          style={{
            marginTop: '20px',
            padding: '10px',
            background: 'rgba(0,0,0,0.5)',
            borderRadius: '8px',
            maxWidth: '350px'
          }}
        >
          <p style={{ color: '#fff', fontSize: '12px', wordBreak: 'break-all' }}>
            {gradient}
          </p>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Edit gradients and watch the wrapper background update in real-time!'
      }
    }
  }
};

/**
 * Light theme picker with wrapper
 */
export const LightTheme: Story = {
  render: () => {
    const [color, setColor] = useState('#3B82F6');
    return (
      <ThemeProvider defaultTheme='light'>
        <div className='light'>
          <ColorPicker
            showWrapper={true}
            value={color}
            onChange={setColor}
            solid={true}
            gradient={true}
            popupWidth={300}
          />
        </div>
      </ThemeProvider>
    );
  },
  decorators: [],
  parameters: {
    docs: {
      description: {
        story: 'Color picker in light theme with wrapper - the picker UI is light while wrapper shows the color.'
      }
    }
  }
};
