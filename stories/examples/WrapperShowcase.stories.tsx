import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import ColorPicker from '../../src/components/core/Colorpicker';
import { ThemeProvider } from '../../src/components/providers/ThemeContext';
import { examplesDecorator } from '../utils/decorators';

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
