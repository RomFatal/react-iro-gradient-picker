import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { colorPickerDecorator } from '../../utils/decorators';
import {
  defaultArgs,
  solidPickerPresets,
  type ColorPreset
} from '../../utils/storyData';
import ColorPickerDemo from './ColorPickerDemo';

/**
 * Solid Color Picker component with dark theme support.
 * Perfect for selecting solid colors with alpha transparency.
 */
const meta: Meta<typeof ColorPickerDemo> = {
  title: 'Components/Color Picker/Solid Picker',
  component: ColorPickerDemo,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
**Solid Color Picker** - Enhanced with complete dark theme support!

✅ Features:
- **Dark theme compatibility** - All components respond to theme changes
- **Alpha transparency** - Full RGBA support with visual transparency
- **Multiple formats** - HEX, RGB, HSL output formats
- **Debounced updates** - Smooth performance during color selection
- **Accessible controls** - Keyboard navigation and ARIA support

🎨 **Dark Theme Integration:**
All input fields, popup modals, and color controls now properly support dark theme through CSS custom properties.
        `
      }
    }
  },
  decorators: [colorPickerDecorator],
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'color',
      description: 'Current color value in any supported format'
    },
    format: {
      control: 'select',
      options: ['hex', 'rgb', 'hsl'],
      description: 'Output format for color values'
    },
    showAlpha: {
      control: 'boolean',
      description: 'Show alpha transparency controls'
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
 * Default solid color picker with standard settings
 */
export const Default: Story = {
  args: {
    ...defaultArgs,
    solid: true,
    gradient: false,
    value: '#3B82F6',
    popupWidth: 300
  }
};

/**
 * Compact solid picker for smaller spaces
 */
export const Compact: Story = {
  args: {
    ...defaultArgs,
    solid: true,
    gradient: false,
    value: '#10B981',
    colorBoardHeight: 100,
    popupWidth: 220
  }
};

/**
 * Large solid picker for detailed color selection
 */
export const Large: Story = {
  args: {
    ...defaultArgs,
    solid: true,
    gradient: false,
    value: '#F59E0B',
    colorBoardHeight: 160,
    popupWidth: 400
  }
};

/**
 * Preset color demonstrations
 */
export const ColorPresets: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      {solidPickerPresets.map((preset: ColorPreset, index: number) => (
        <div key={index} style={{ textAlign: 'center' }}>
          <ColorPickerDemo {...defaultArgs} solid value={preset.value} />
          <p style={{ margin: '8px 0 0', fontSize: '12px', opacity: 0.7 }}>
            {preset.name}
          </p>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Various solid Popular Colors demonstrating different color values and alpha settings.'
      }
    }
  }
};
