import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

// Import exactly as a real user would
import GradientColorPicker from '../../src/index';

const meta: Meta<typeof GradientColorPicker> = {
  title: 'Examples/Real World Usage',
  component: GradientColorPicker,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'This story shows how the component looks when imported normally by end users, demonstrating the actual user experience.'
      }
    }
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

// Exactly how a user would use it - basic import
export const BasicUserImport: Story = {
  render: () => {
    const [color, setColor] = useState('#3B82F6');

    return (
      <div
        style={{
          padding: '20px',
          background: '#0f0f0f',
          color: '#ffffff',
          minHeight: '100vh'
        }}
      >
        <h3>How users actually import and use the component:</h3>
        <pre
          style={{
            background: '#2a2a2a',
            color: '#ffffff',
            padding: '10px',
            borderRadius: '4px',
            marginBottom: '20px',
            fontSize: '12px'
          }}
        >
          {`import GradientColorPicker from 'react-iro-gradient-picker';

function App() {
  const [color, setColor] = useState('#3B82F6');

  return (
    <GradientColorPicker
      value={color}
      onChange={(newColor) => setColor(newColor)}
      gradient
      solid
    />
  );
}`}
        </pre>

        <div
          style={{
            border: '1px solid #333',
            padding: '10px',
            borderRadius: '8px',
            background: '#1a1a1a',
            color: '#ffffff'
          }}
        >
          <p>
            Current color: <strong>{color}</strong>
          </p>
          <GradientColorPicker
            value={color}
            onChange={(newColor: string) => setColor(newColor)}
            gradient
            solid
          />
        </div>
      </div>
    );
  }
};

// Just solid color picker
export const SolidOnly: Story = {
  render: () => {
    const [color, setColor] = useState('#FF6B6B');

    return (
      <div
        style={{
          padding: '20px',
          background: '#0f0f0f',
          color: '#ffffff',
          minHeight: '100vh'
        }}
      >
        <h3>Solid color picker only:</h3>
        <pre
          style={{
            background: '#2a2a2a',
            color: '#ffffff',
            padding: '10px',
            borderRadius: '4px',
            marginBottom: '20px',
            fontSize: '12px'
          }}
        >
          {`<GradientColorPicker
  value={color}
  onChange={setColor}
  solid
/>`}
        </pre>

        <div
          style={{
            border: '1px solid #333',
            padding: '10px',
            borderRadius: '8px',
            background: '#1a1a1a',
            color: '#ffffff'
          }}
        >
          <p>
            Current color: <strong>{color}</strong>
          </p>
          <GradientColorPicker
            value={color}
            onChange={(newColor: string) => setColor(newColor)}
            solid
          />
        </div>
      </div>
    );
  }
};

// Just gradient picker
export const GradientOnly: Story = {
  render: () => {
    const [gradient, setGradient] = useState(
      'linear-gradient(45deg, #FF6B6B, #4ECDC4)'
    );

    return (
      <div
        style={{
          padding: '20px',
          background: '#0f0f0f',
          color: '#ffffff',
          minHeight: '100vh'
        }}
      >
        <h3>Gradient picker only:</h3>
        <pre
          style={{
            background: '#2a2a2a',
            color: '#ffffff',
            padding: '10px',
            borderRadius: '4px',
            marginBottom: '20px',
            fontSize: '12px'
          }}
        >
          {`<GradientColorPicker
  value={gradient}
  onChange={setGradient}
  gradient
/>`}
        </pre>

        <div
          style={{
            border: '1px solid #333',
            padding: '10px',
            borderRadius: '8px',
            background: '#1a1a1a',
            color: '#ffffff'
          }}
        >
          <p>Current gradient:</p>
          <div
            style={{
              background: gradient,
              height: '40px',
              borderRadius: '4px',
              marginBottom: '10px'
            }}
          ></div>
          <code
            style={{
              fontSize: '12px',
              wordBreak: 'break-all',
              color: '#ffffff'
            }}
          >
            {gradient}
          </code>

          <GradientColorPicker
            value={gradient}
            onChange={(newGradient: string) => setGradient(newGradient)}
            gradient
          />
        </div>
      </div>
    );
  }
};

// Default import with minimal props
export const MinimalUsage: Story = {
  render: () => {
    const [color, setColor] = useState('#ffffff');

    return (
      <div
        style={{
          padding: '20px',
          background: '#0f0f0f',
          color: '#ffffff',
          minHeight: '100vh'
        }}
      >
        <h3>Minimal usage (just the basics):</h3>
        <pre
          style={{
            background: '#2a2a2a',
            color: '#ffffff',
            padding: '10px',
            borderRadius: '4px',
            marginBottom: '20px',
            fontSize: '12px'
          }}
        >
          {`import GradientColorPicker from 'react-iro-gradient-picker';

<GradientColorPicker
  value={color}
  onChange={setColor}
/>`}
        </pre>

        <div
          style={{
            border: '1px solid #333',
            padding: '10px',
            borderRadius: '8px',
            background: '#1a1a1a',
            color: '#ffffff'
          }}
        >
          <p>
            Current color: <strong>{color}</strong>
          </p>
          <GradientColorPicker
            value={color}
            onChange={(newColor: string) => setColor(newColor)}
          />
        </div>
      </div>
    );
  }
};

// With custom width
export const CustomWidth: Story = {
  render: () => {
    const [color, setColor] = useState('#9C27B0');

    return (
      <div
        style={{
          padding: '20px',
          background: '#0f0f0f',
          color: '#ffffff',
          minHeight: '100vh'
        }}
      >
        <h3>With custom width:</h3>
        <pre
          style={{
            background: '#2a2a2a',
            color: '#ffffff',
            padding: '10px',
            borderRadius: '4px',
            marginBottom: '20px',
            fontSize: '12px'
          }}
        >
          {`<GradientColorPicker
  value={color}
  onChange={setColor}
  popupWidth={400}
  gradient
  solid
/>`}
        </pre>

        <div
          style={{
            border: '1px solid #333',
            padding: '10px',
            borderRadius: '8px',
            background: '#1a1a1a',
            color: '#ffffff'
          }}
        >
          <p>
            Current color: <strong>{color}</strong>
          </p>
          <GradientColorPicker
            value={color}
            onChange={(newColor: string) => setColor(newColor)}
            popupWidth={400}
            gradient
            solid
          />
        </div>
      </div>
    );
  }
};
