import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { colorPickerDecorator } from '../../utils/decorators';
import {
  defaultArgs,
  gradientPickerPresets,
  type ColorPreset
} from '../../utils/storyData';
import ReactGPicker from './ReactGPicker';

/**
 * Gradient Color Picker component with dark theme support.
 * Perfect for creating beautiful gradient backgrounds.
 */
const meta: Meta<typeof ReactGPicker> = {
  title: 'Components/Color Picker/Gradient Picker',
  component: ReactGPicker,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
**Gradient Color Picker** - Enhanced with complete dark theme support!

✅ Features:
- **Dark theme compatibility** - All gradient controls respond to theme changes
- **Multiple gradient types** - Linear, radial, conic gradients
- **Color stop management** - Add, remove, and reorder gradient stops
- **Angle control** - Visual angle selector for gradient direction
- **Live preview** - Real-time gradient preview during editing
- **Multiple formats** - CSS gradient string output

🎨 **Dark Theme Integration:**
All gradient controls, color stops, angle selectors, and popup modals now properly support dark theme through CSS custom properties.
        `
      }
    }
  },
  decorators: [colorPickerDecorator],
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'Current gradient value as CSS gradient string'
    },
    format: {
      control: 'select',
      options: ['hex', 'rgb', 'hsl'],
      description: 'Output format for individual color values'
    },
    debounceMS: {
      control: { type: 'range', min: 0, max: 1000, step: 50 },
      description: 'Debounce delay for onChange events'
    },
    colorBoardHeight: {
      control: { type: 'range', min: 80, max: 200, step: 10 },
      description: 'Height of the color selection board'
    },
    popupWidth: {
      control: { type: 'range', min: 200, max: 400, step: 10 },
      description: 'Width of the color picker popup'
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default gradient picker with linear gradient
 */
export const Default: Story = {
  args: {
    ...defaultArgs,
    solid: false,
    gradient: true,
    value: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  }
};

/**
 * Sunset gradient with warm colors
 */
export const SunsetGradient: Story = {
  args: {
    ...defaultArgs,
    solid: false,
    gradient: true,
    value: 'linear-gradient(135deg, #FF6B6B 0%, #FFE66D 100%)'
  }
};

/**
 * Ocean gradient with cool blues
 */
export const OceanGradient: Story = {
  args: {
    ...defaultArgs,
    solid: false,
    gradient: true,
    value: 'linear-gradient(45deg, #36d1dc 0%, #5b86e5 100%)'
  }
};

/**
 * Radial gradient example
 */
export const RadialGradient: Story = {
  args: {
    ...defaultArgs,
    solid: false,
    gradient: true,
    value: 'radial-gradient(circle, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)'
  }
};

/**
 * Complex multi-stop gradient
 */
export const ComplexGradient: Story = {
  args: {
    ...defaultArgs,
    solid: false,
    gradient: true,
    value:
      'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)'
  }
};

/**
 * Gradient preset demonstrations
 */
export const GradientPresets: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      {gradientPickerPresets.map((preset: ColorPreset, index: number) => (
        <div key={index} style={{ textAlign: 'center' }}>
          <ReactGPicker
            {...defaultArgs}
            gradient
            solid={false}
            value={preset.value}
          />
          <p style={{ margin: '8px 0 0', fontSize: '12px', opacity: 0.7 }}>
            {preset.name}
          </p>
          <div
            style={{
              width: '100px',
              height: '20px',
              background: preset.value,
              borderRadius: '4px',
              margin: '4px auto',
              border: '1px solid var(--colorpicker-border, #e2e8f0)'
            }}
          />
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Various gradient presets demonstrating different gradient styles and color combinations.'
      }
    }
  }
};
