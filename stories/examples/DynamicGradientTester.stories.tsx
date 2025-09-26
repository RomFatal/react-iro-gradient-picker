import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { ColorPicker } from '../../src';
const meta: Meta<typeof ColorPicker> = {
  title: 'Testing/Dynamic Gradient Tester',
  component: ColorPicker,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Test any gradient value dynamically by typing it into the input field. Perfect for testing radial gradients, linear gradients, and edge cases.'
      }
    }
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'Dynamic gradient value to test'
    },
    colorBoardHeight: {
      control: { type: 'range', min: 120, max: 300, step: 10 },
      description: 'Color board height'
    }
  }
};

export default meta;
type Story = StoryObj<typeof ColorPicker>;

const GradientTester = ({
  initialGradient,
  colorBoardHeight = 120
}: {
  initialGradient: string;
  colorBoardHeight?: number;
}) => {
  const [gradientValue, setGradientValue] = useState(initialGradient);
  const [inputValue, setInputValue] = useState(initialGradient);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    setError('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleApply();
    }
  };

  const handleApply = () => {
    console.log('🔥 Apply button clicked, inputValue:', inputValue);

    if (!inputValue.trim()) {
      setError('Please enter a gradient value');
      return;
    }
    // More flexible validation - just check if it looks like CSS
    if (
      !inputValue.includes('gradient') &&
      !inputValue.includes('#') &&
      !inputValue.includes('rgb') &&
      !inputValue.includes('hsl')
    ) {
      setError('Please enter a valid CSS color or gradient value');
      return;
    }

    const newValue = inputValue.trim();
    console.log('🎯 Applying gradient:', newValue);
    console.log('🔄 Current gradientValue before update:', gradientValue);

    setGradientValue(newValue);
    setError('');

    // Add a small delay to log the state after update
    setTimeout(() => {
      console.log('✅ gradientValue after update:', gradientValue);
    }, 100);
  };

  const handlePresetClick = (preset: string) => {
    setInputValue(preset);
    setGradientValue(preset);
    setError('');
  };

  const presets = [
    'linear-gradient(90deg, #ff0000, #00ff00, #0000ff)',
    'radial-gradient(circle at 70% 30%, #2ED573, #1EAE98, #004E64)',
    'radial-gradient(circle at 20% 80%, #FFB347, #FFCC33, #FF6347)',
    'radial-gradient(circle at center, #11998E, #38EF7D, #8BC34A)',
    'radial-gradient(50%, #F7971E, #FFD200, #FF512F)',
    'radial-gradient(70, #ff0000, #0000ff)', // Edge case: numeric size only
    'radial-gradient(150%, #FFB347, #FFCC33, #FF6347)', // Edge case: percentage size only
    'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
    'radial-gradient(ellipse at top, #e3ffe7 0%, #d9e7ff 100%)',
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'radial-gradient(circle at 100% 50%, #ffffff 0%, #000000 100%)',
    'linear-gradient(to right, #ff9a00, #ffcd00, #ff9a00)'
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        minWidth: '500px',
        padding: '20px',
        borderRadius: '12px'
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <h3
          style={{
            margin: 0,
            fontSize: '16px',
            fontWeight: '600'
          }}
        >
          🎨 Dynamic Gradient Tester
        </h3>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
          <input
            type='text'
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder='Enter gradient value...'
            style={{
              flex: 1,
              padding: '8px 12px',
              border: `1px solid ${
                error ? '#ff4444' : 'var(--colorpicker-border, #475569)'
              }`,
              borderRadius: '4px',
              fontSize: '14px',
              fontFamily: 'monospace',
              backgroundColor: 'var(--colorpicker-input-bg, #334155)',
              color: 'var(--colorpicker-text, #f8fafc)'
            }}
          />
          <button
            onClick={handleApply}
            style={{
              padding: '8px 16px',
              backgroundColor: '#22c55e',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '600',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}
          >
            ✅ Apply
          </button>
        </div>
        {error && (
          <div
            style={{
              color: '#ff4444',
              fontSize: '12px',
              backgroundColor: '#ffebee',
              padding: '6px 10px',
              borderRadius: '4px',
              border: '1px solid #ffcdd2'
            }}
          >
            ⚠️ {error}
          </div>
        )}
        <div
          style={{
            backgroundColor: 'var(--colorpicker-input-bg, #334155)',
            padding: '10px',
            borderRadius: '4px',
            fontSize: '12px',
            fontFamily: 'monospace',
            wordBreak: 'break-all',
            color: 'var(--colorpicker-text, #f8fafc)',
            border: '1px solid var(--colorpicker-border, #475569)',
            position: 'relative'
          }}
        >
          <strong>Current:</strong> {gradientValue}
          {/* Visual preview of the current gradient */}
          <div
            style={{
              marginTop: '8px',
              height: '20px',
              borderRadius: '4px',
              background: gradientValue,
              border: '1px solid var(--colorpicker-border, #475569)'
            }}
            title='Current gradient preview'
          />
        </div>
      </div>
      <div>
        <h4
          style={{
            margin: '0 0 10px 0',
            fontSize: '14px',
            fontWeight: '500',
            color: 'var(--colorpicker-text, #f8fafc)'
          }}
        >
          📋 Quick Presets
        </h4>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '8px',
            maxHeight: '120px',
            overflowY: 'auto',
            padding: '4px'
          }}
        >
          {presets.map((preset, index) => (
            <button
              key={index}
              onClick={() => handlePresetClick(preset)}
              style={{
                padding: '6px 10px',
                fontSize: '11px',
                fontFamily: 'monospace',
                backgroundColor:
                  gradientValue === preset
                    ? 'var(--colorpicker-accent-bg, #3b82f6)'
                    : 'var(--colorpicker-input-bg, #334155)',
                border: `1px solid ${
                  gradientValue === preset
                    ? 'var(--colorpicker-accent, #60a5fa)'
                    : 'var(--colorpicker-border, #475569)'
                }`,
                borderRadius: '4px',
                cursor: 'pointer',
                textAlign: 'left',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                color: 'var(--colorpicker-text, #f8fafc)'
              }}
              title={preset}
            >
              {preset.length > 30 ? preset.substring(0, 30) + '...' : preset}
            </button>
          ))}
        </div>
      </div>
      <div
        style={{
          border: '2px solid var(--colorpicker-border, #475569)',
          borderRadius: '8px',
          padding: '20px',
          backgroundColor: 'var(--colorpicker-panel-bg, #0f172a)'
        }}
      >
        <h4
          style={{
            margin: '0 0 15px 0',
            fontSize: '14px',
            fontWeight: '500',
            color: 'var(--colorpicker-text, #f8fafc)'
          }}
        >
          🖼️ Gradient Picker Preview
        </h4>
        <ColorPicker
          key={gradientValue} // Force re-render when gradient changes
          gradient={true}
          solid={false}
          value={gradientValue}
          onChange={(color) => {
            console.log('🎨 ColorPicker onChange triggered:', color);
            console.log(
              '🔄 Setting new values - gradientValue and inputValue to:',
              color
            );
            setGradientValue(color as string);
            setInputValue(color as string);
          }}
          colorBoardHeight={colorBoardHeight}
          showInputs={true}
          showAlpha={true}
          showGradientResult={true}
          showGradientStops={true}
          showGradientMode={true}
          showGradientAngle={true}
          showGradientPosition={true}
          allowAddGradientStops={true}
        />
      </div>
      <div
        style={{
          fontSize: '12px',
          color: 'var(--colorpicker-text-muted, #cbd5e1)',
          backgroundColor: 'var(--colorpicker-input-bg, #334155)',
          padding: '10px',
          borderRadius: '4px',
          lineHeight: '1.4',
          border: '1px solid var(--colorpicker-border, #475569)'
        }}
      >
        <div>
          💡 <strong>Tips:</strong>
        </div>
        <div>
          • Test radial gradients:{' '}
          <code>radial-gradient(circle at 50% 50%, red, blue)</code>
        </div>
        <div>
          • Test linear gradients:{' '}
          <code>linear-gradient(90deg, red, blue)</code>
        </div>
        <div>
          • Try edge cases like numeric modifiers:{' '}
          <code>radial-gradient(70, red, blue)</code>
        </div>
        <div>• Watch console for parsing logs and errors</div>
      </div>
    </div>
  );
};

export const DynamicTester: Story = {
  name: '🧪 Dynamic Gradient Tester',
  render: (args) => (
    <GradientTester
      initialGradient={args.value as string}
      colorBoardHeight={args.colorBoardHeight as number}
    />
  ),
  args: {
    value: 'radial-gradient(circle at 70% 30%, #2ED573, #1EAE98, #004E64)',
    colorBoardHeight: 120
  },
  parameters: {
    docs: {
      description: {
        story:
          'Interactive gradient tester with preset gradients and real-time editing. Perfect for testing problematic gradient formats and debugging parsing issues.'
      }
    }
  }
};
// Removed stray, duplicated, and malformed export block after the main export. File now ends cleanly.

export const RadialGradientTests: Story = {
  name: '🔴 Radial Gradient Tests',
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        padding: '20px',
        borderRadius: '12px'
      }}
    >
      <h3 style={{ margin: 0 }}>🔴 Radial Gradient Test Suite</h3>

      {[
        {
          name: 'Circle at Center',
          gradient:
            'radial-gradient(circle at center, #ff0000, #00ff00, #0000ff)'
        },
        {
          name: 'Circle at 70% 30%',
          gradient:
            'radial-gradient(circle at 70% 30%, #2ED573, #1EAE98, #004E64)'
        },
        {
          name: 'Numeric Modifier (70)',
          gradient: 'radial-gradient(70, #FFB347, #FFCC33, #FF6347)'
        },
        {
          name: 'Circle at 20% 80%',
          gradient:
            'radial-gradient(circle at 20% 80%, #F7971E, #FFD200, #FF512F)'
        },
        {
          name: 'Ellipse at Top',
          gradient: 'radial-gradient(ellipse at top, #11998E, #38EF7D, #8BC34A)'
        },
        {
          name: 'Percentage Size (50%)',
          gradient: 'radial-gradient(50%, #667eea, #764ba2)'
        }
      ].map(({ name, gradient }, index) => (
        <div
          key={index}
          style={{
            border: '1px solid var(--colorpicker-border, #475569)',
            borderRadius: '8px',
            padding: '20px',
            backgroundColor: 'var(--colorpicker-panel-bg, #0f172a)'
          }}
        >
          <h4
            style={{
              margin: '0 0 10px 0'
            }}
          >
            {name}
          </h4>
          <div
            style={{
              fontFamily: 'monospace',
              fontSize: '12px',
              color: 'var(--colorpicker-text-muted, #cbd5e1)',
              marginBottom: '15px',
              backgroundColor: 'var(--colorpicker-input-bg, #334155)',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid var(--colorpicker-border, #475569)'
            }}
          >
            {gradient}
          </div>
          <ColorPicker
            gradient={true}
            solid={false}
            value={gradient}
            onChange={(color) => console.log(`${name} changed:`, color)}
            colorBoardHeight={100}
            showInputs={true}
            showGradientResult={true}
          />
        </div>
      ))}
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story:
          'Collection of radial gradient test cases that were previously problematic. Each gradient should maintain its positioning and render correctly.'
      }
    }
  }
};

export const EdgeCases: Story = {
  name: '⚠️ Edge Case Tests',
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        padding: '20px',
        borderRadius: '12px'
      }}
    >
      <h3 style={{ margin: 0 }}>⚠️ Edge Case Test Suite</h3>

      {[
        {
          name: 'Numeric Only Modifier',
          gradient: 'radial-gradient(70, #ff0000, #0000ff)',
          description: 'Tests parsing of numeric-only radial gradient modifiers'
        },
        {
          name: 'Complex Positioning',
          gradient:
            'radial-gradient(circle at 75% 25%, #2ED573 0%, #1EAE98 50%, #004E64 100%)',
          description:
            'Tests complex positioning with explicit stop percentages'
        },
        {
          name: 'Large Percentage Values',
          gradient: 'radial-gradient(150%, #FFB347, #FFCC33, #FF6347)',
          description: 'Tests large percentage values as size modifier'
        },
        {
          name: 'Multiple Color Stops',
          gradient:
            'radial-gradient(circle, #ff0000 0%, #ff8800 25%, #ffff00 50%, #88ff00 75%, #00ff00 100%)',
          description: 'Tests gradients with many color stops'
        },
        {
          name: 'Ellipse Shape',
          gradient:
            'radial-gradient(ellipse 200px 100px at 50% 50%, #667eea, #764ba2)',
          description: 'Tests ellipse shape with explicit dimensions'
        }
      ].map(({ name, gradient, description }, index) => (
        <div
          key={index}
          style={{
            border: '1px solid var(--colorpicker-border, #475569)',
            borderRadius: '8px',
            padding: '20px',
            backgroundColor: 'var(--colorpicker-panel-bg, #0f172a)'
          }}
        >
          <h4
            style={{
              margin: '0 0 5px 0',
              color: 'var(--colorpicker-text, #f8fafc)'
            }}
          >
            {name}
          </h4>
          <p
            style={{
              margin: '0 0 10px 0',
              fontSize: '14px',
              color: 'var(--colorpicker-text-muted, #cbd5e1)'
            }}
          >
            {description}
          </p>
          <div
            style={{
              fontFamily: 'monospace',
              fontSize: '12px',
              color: 'var(--colorpicker-text, #f8fafc)',
              marginBottom: '15px',
              backgroundColor: 'var(--colorpicker-input-bg, #334155)',
              padding: '8px',
              borderRadius: '4px',
              wordBreak: 'break-all',
              border: '1px solid var(--colorpicker-border, #475569)'
            }}
          >
            {gradient}
          </div>
          <ColorPicker
            gradient={true}
            solid={false}
            value={gradient}
            onChange={(color) => console.log(`${name} changed:`, color)}
            colorBoardHeight={100}
            showInputs={true}
            showGradientResult={true}
          />
        </div>
      ))}
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story:
          'Tests edge cases and complex gradient formats to ensure robust parsing and rendering.'
      }
    }
  }
};

// BasicUsage story for simple gradient testing
export const BasicUsage: Story = {
  name: '🎨 Basic Usage',
  render: () => (
    <div
      style={{
        padding: '20px',
        borderRadius: '12px'
      }}
    >
      <h3 style={{ margin: '0 0 20px 0' }}>🎨 Basic Gradient Usage</h3>
      <ColorPicker
        gradient={true}
        solid={false}
        value='linear-gradient(45deg, #ff6b6b, #4ecdc4)'
        onChange={(color) => console.log('Color changed:', color)}
        colorBoardHeight={120}
        showInputs={true}
        showGradientResult={true}
      />
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story:
          'Simple gradient picker with basic linear gradient for quick testing.'
      }
    }
  }
};
