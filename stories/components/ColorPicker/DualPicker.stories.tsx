import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { colorPickerDecorator } from '../../utils/decorators';
import { defaultArgs } from '../../utils/storyData';
import ReactGPicker from './ReactGPicker';

/**
 * Dual Color Picker component - Both solid and gradient modes.
 * Perfect for applications that need both solid and gradient color selection.
 */
const meta: Meta<typeof ReactGPicker> = {
  title: 'Components/Color Picker/Dual Picker',
  component: ReactGPicker,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
**Dual Color Picker** - Enhanced with complete dark theme support!

✅ Features:
- **Both modes available** - Switch between solid colors and gradients
- **Dark theme compatibility** - All components respond to theme changes
- **Seamless switching** - Easy toggle between solid and gradient modes
- **Persistent settings** - Settings maintained when switching modes
- **Unified interface** - Consistent experience across both modes

🎨 **Dark Theme Integration:**
All tabs, controls, inputs, and modals properly support dark theme through CSS custom properties.
        `
      }
    }
  },
  decorators: [colorPickerDecorator],
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'Current color/gradient value'
    },
    format: {
      control: 'select',
      options: ['hex', 'rgb', 'hsl'],
      description: 'Output format for color values'
    },
    solid: {
      control: 'boolean',
      description: 'Enable solid color picker mode'
    },
    gradient: {
      control: 'boolean',
      description: 'Enable gradient picker mode'
    },
    showAlpha: {
      control: 'boolean',
      description: 'Show alpha transparency controls'
    },
    debounceMS: {
      control: { type: 'range', min: 0, max: 1000, step: 50 },
      description: 'Debounce delay for onChange events'
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default dual picker starting with gradient
 */
export const Default: Story = {
  args: {
    ...defaultArgs,
    solid: true,
    gradient: true,
    value: 'linear-gradient(135deg, #D9AFD9 0%, #97D9E1 100%)'
  }
};

/**
 * Dual picker starting with solid color
 */
export const StartWithSolid: Story = {
  args: {
    ...defaultArgs,
    solid: true,
    gradient: true,
    value: '#3B82F6'
  }
};

/**
 * Dual picker with alpha transparency enabled
 */
export const WithAlpha: Story = {
  args: {
    ...defaultArgs,
    solid: true,
    gradient: true,
    value: 'rgba(59, 130, 246, 0.8)',
    showAlpha: true
  }
};

/**
 * Compact dual picker for smaller spaces
 */
export const Compact: Story = {
  args: {
    ...defaultArgs,
    solid: true,
    gradient: true,
    value: 'linear-gradient(45deg, #fa709a 0%, #fee140 100%)',
    colorBoardHeight: 100,
    popupWidth: 240
  }
};

/**
 * Large dual picker for detailed work
 */
export const Large: Story = {
  args: {
    ...defaultArgs,
    solid: true,
    gradient: true,
    value: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    colorBoardHeight: 160,
    popupWidth: 320
  }
};

/**
 * Interactive demo showing mode switching
 */
export const InteractiveDemo: Story = {
  render: () => {
    const [currentValue, setCurrentValue] = React.useState(
      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    );

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          padding: '20px'
        }}
      >
        <ReactGPicker
          {...defaultArgs}
          solid
          gradient
          value={currentValue}
          onChange={(value: string) => {
            setCurrentValue(value);
            return value;
          }}
        />

        <div
          style={{
            textAlign: 'center',
            maxWidth: '400px',
            width: '100%'
          }}
        >
          <p
            style={{
              margin: '0 0 8px 0',
              fontSize: '14px',
              fontWeight: 'bold',
              color: '#64748b'
            }}
          >
            Current color:
          </p>
          <code
            style={{
              background: '#1e293b',
              color: '#f8fafc',
              padding: '8px 12px',
              borderRadius: '6px',
              border: '1px solid #475569',
              fontSize: '12px',
              wordBreak: 'break-all',
              display: 'inline-block',
              maxWidth: '100%',
              fontFamily: 'Monaco, Consolas, monospace'
            }}
          >
            {currentValue}
          </code>

          <div
            style={{
              width: '200px',
              height: '40px',
              background: currentValue,
              borderRadius: '8px',
              margin: '16px auto 0',
              border: '2px solid #e2e8f0',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}
          />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Interactive demo that shows the current color/gradient value and updates in real-time.'
      }
    }
  }
};
