import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { documentationDecorator } from '../utils/decorators';

/**
 * Introduction and overview of React Iro Gradient Picker
 */
const meta: Meta = {
  title: 'Documentation/Introduction',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Welcome to React Iro Gradient Picker - Enhanced color picker with complete dark theme support and reset functionality'
      }
    }
  },
  decorators: [documentationDecorator],
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj;

export const Welcome: Story = {
  render: () => (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem' }}>
      {/* Hero Section */}
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '3rem 2rem',
          borderRadius: '12px',
          color: '#ffffff',
          textAlign: 'center',
          margin: '0 0 3rem 0'
        }}
      >
        <h1
          style={{ color: '#ffffff', margin: '0 0 1rem 0', fontSize: '2.5rem' }}
        >
          🎨 React Iro Gradient Picker
        </h1>
        <p style={{ fontSize: '1.3rem', margin: 0, opacity: 0.9 }}>
          Enhanced Color Picker with Complete Dark Theme Support & Reset
          Functionality
        </p>
      </div>

      {/* What Makes It Special */}
      <section style={{ marginBottom: '3rem' }}>
        <h2
          style={{ color: '#38bdf8', fontSize: '2rem', marginBottom: '1.5rem' }}
        >
          ✨ What Makes It Special
        </h2>
        <p
          style={{
            color: '#cbd5e1',
            fontSize: '1.1rem',
            lineHeight: '1.6',
            marginBottom: '2rem'
          }}
        >
          React Iro Gradient Picker is an enhanced version of
          react-gcolor-picker with{' '}
          <strong style={{ color: '#10b981' }}>
            comprehensive dark theme integration
          </strong>{' '}
          and{' '}
          <strong style={{ color: '#f59e0b' }}>
            built-in reset functionality
          </strong>
          . Every component, modal, input, and control has been redesigned to
          work beautifully in both light and dark themes.
        </p>

        <h3 style={{ color: '#38bdf8', margin: '2rem 0 1rem 0' }}>
          🌙 Dark Theme Revolution
        </h3>
        <ul style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: '1.8' }}>
          <li>
            <strong style={{ color: '#10b981' }}>✅ Fixed Modal Popups</strong>{' '}
            - No more white backgrounds in dark mode
          </li>
          <li>
            <strong style={{ color: '#10b981' }}>
              ✅ Enhanced Input Styling
            </strong>{' '}
            - All form controls support theming
          </li>
          <li>
            <strong style={{ color: '#10b981' }}>✅ Gradient Controls</strong> -
            Color stops, angle selectors, everything works
          </li>
          <li>
            <strong style={{ color: '#10b981' }}>✅ Tab Navigation</strong> -
            Proper dark theme for all navigation elements
          </li>
          <li>
            <strong style={{ color: '#10b981' }}>
              ✅ CSS Custom Properties
            </strong>{' '}
            - Dynamic theming system that just works
          </li>
        </ul>

        <h3 style={{ color: '#f59e0b', margin: '2rem 0 1rem 0' }}>
          🔄 Reset Functionality
        </h3>
        <ul style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: '1.8' }}>
          <li>
            <strong style={{ color: '#f59e0b' }}>
              ✅ Built-in Reset Button
            </strong>{' '}
            - Optional reset functionality in the picker interface
          </li>
          <li>
            <strong style={{ color: '#f59e0b' }}>✅ Custom Callbacks</strong> -
            Handle reset events with your own business logic
          </li>
          <li>
            <strong style={{ color: '#f59e0b' }}>✅ State Management</strong> -
            Easy tracking of reset history and user interactions
          </li>
          <li>
            <strong style={{ color: '#f59e0b' }}>✅ Dual Mode Support</strong> -
            Works seamlessly with both solid and gradient modes
          </li>
        </ul>

        <h3 style={{ color: '#8b5cf6', margin: '2rem 0 1rem 0' }}>
          🎯 Perfect For
        </h3>
        <ul style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: '1.8' }}>
          <li>
            <strong>Design Tools</strong> - Professional color selection
            interfaces
          </li>
          <li>
            <strong>Theme Editors</strong> - Dynamic theme customization panels
          </li>
          <li>
            <strong>Brand Management</strong> - Corporate color palette tools
          </li>
          <li>
            <strong>CSS Generators</strong> - Live gradient and color code
            generation
          </li>
          <li>
            <strong>Modern Apps</strong> - Any application needing sophisticated
            color selection
          </li>
        </ul>
      </section>

      {/* Key Features */}
      <section style={{ marginBottom: '3rem' }}>
        <h2
          style={{ color: '#38bdf8', fontSize: '2rem', marginBottom: '1.5rem' }}
        >
          🚀 Key Features
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            margin: '2rem 0'
          }}
        >
          <div
            style={{
              background: '#1e293b',
              border: '1px solid #334155',
              borderRadius: '8px',
              padding: '1.5rem',
              borderLeft: '4px solid #3b82f6'
            }}
          >
            <h3 style={{ color: '#3b82f6', margin: '0 0 0.5rem 0' }}>
              🎨 Dual Mode
            </h3>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#cbd5e1' }}>
              Switch seamlessly between solid color picker and gradient editor
              modes.
            </p>
          </div>

          <div
            style={{
              background: '#1e293b',
              border: '1px solid #334155',
              borderRadius: '8px',
              padding: '1.5rem',
              borderLeft: '4px solid #10b981'
            }}
          >
            <h3 style={{ color: '#10b981', margin: '0 0 0.5rem 0' }}>
              🌙 Theme Smart
            </h3>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#cbd5e1' }}>
              Every component responds intelligently to light/dark theme
              changes.
            </p>
          </div>

          <div
            style={{
              background: '#1e293b',
              border: '1px solid #334155',
              borderRadius: '8px',
              padding: '1.5rem',
              borderLeft: '4px solid #f59e0b'
            }}
          >
            <h3 style={{ color: '#f59e0b', margin: '0 0 0.5rem 0' }}>
              🔄 Reset Control
            </h3>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#cbd5e1' }}>
              Built-in reset functionality with callback support and state
              tracking.
            </p>
          </div>

          <div
            style={{
              background: '#1e293b',
              border: '1px solid #334155',
              borderRadius: '8px',
              padding: '1.5rem',
              borderLeft: '4px solid #8b5cf6'
            }}
          >
            <h3 style={{ color: '#8b5cf6', margin: '0 0 0.5rem 0' }}>
              🎛️ Flexible
            </h3>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#cbd5e1' }}>
              Extensive props, multiple formats, alpha support, and
              customization options.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Guide */}
      <section style={{ marginBottom: '3rem' }}>
        <h2
          style={{ color: '#38bdf8', fontSize: '2rem', marginBottom: '1.5rem' }}
        >
          🎯 Navigation Guide
        </h2>

        <div style={{ marginBottom: '2rem' }}>
          <h3
            style={{
              color: '#10b981',
              fontSize: '1.3rem',
              marginBottom: '1rem'
            }}
          >
            📚 Documentation
          </h3>
          <ul style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: '1.8' }}>
            <li>
              <strong>Getting Started</strong> - Installation, setup, and basic
              usage including reset functionality
            </li>
            <li>
              <strong>API Reference</strong> - Complete props and configuration
              guide
            </li>
          </ul>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3
            style={{
              color: '#f59e0b',
              fontSize: '1.3rem',
              marginBottom: '1rem'
            }}
          >
            🧩 Components
          </h3>
          <ul style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: '1.8' }}>
            <li>
              <strong>Solid Picker</strong> - Single color selection with
              transparency and reset
            </li>
            <li>
              <strong>Gradient Picker</strong> - Advanced gradient creation and
              editing with reset
            </li>
            <li>
              <strong>Dual Picker</strong> - Combined solid and gradient
              functionality with reset support
            </li>
          </ul>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3
            style={{
              color: '#8b5cf6',
              fontSize: '1.3rem',
              marginBottom: '1rem'
            }}
          >
            🎨 Examples
          </h3>
          <ul style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: '1.8' }}>
            <li>
              <strong>Real World Usage</strong> - Reset functionality, state
              management, and callback integration
            </li>
            <li>
              <strong>Dark Theme Showcase</strong> - Theme comparison and
              interactive demos
            </li>
            <li>
              <strong>Advanced Integration</strong> - Professional interfaces
              and usage patterns
            </li>
          </ul>
        </div>
      </section>

      {/* Theme Comparison */}
      <section style={{ marginBottom: '3rem' }}>
        <h2
          style={{ color: '#38bdf8', fontSize: '2rem', marginBottom: '1.5rem' }}
        >
          🎨 Theme Comparison
        </h2>
        <p style={{ color: '#cbd5e1', fontSize: '1rem', marginBottom: '2rem' }}>
          The color picker adapts beautifully to your application's theme:
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem',
            margin: '2rem 0',
            borderRadius: '8px',
            overflow: 'hidden',
            border: '1px solid #334155'
          }}
        >
          <div
            style={{
              background: '#ffffff',
              padding: '2rem',
              textAlign: 'center',
              color: '#1f2937'
            }}
          >
            <h4 style={{ margin: '0 0 1rem 0', fontSize: '1.2rem' }}>
              ☀️ Light Theme
            </h4>
            <p style={{ fontSize: '0.95rem', margin: 0, opacity: 0.8 }}>
              Clean, professional appearance with subtle shadows and borders.
              Reset button integrates seamlessly with light UI elements.
            </p>
          </div>
          <div
            style={{
              background: '#1e293b',
              padding: '2rem',
              textAlign: 'center',
              color: '#f8fafc'
            }}
          >
            <h4 style={{ margin: '0 0 1rem 0', fontSize: '1.2rem' }}>
              🌙 Dark Theme
            </h4>
            <p style={{ fontSize: '0.95rem', margin: 0, opacity: 0.8 }}>
              Modern dark interface with enhanced contrast and depth. Reset
              functionality styled perfectly for dark environments.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div
        style={{
          textAlign: 'center',
          margin: '3rem 0 2rem',
          padding: '2.5rem',
          background: '#1e293b',
          borderRadius: '12px',
          border: '1px solid #334155'
        }}
      >
        <h3
          style={{
            fontSize: '1.4rem',
            margin: '0 0 1rem',
            color: '#38bdf8'
          }}
        >
          Ready to get started?
        </h3>
        <p
          style={{
            margin: '0 0 1.5rem',
            fontSize: '1rem',
            color: '#cbd5e1'
          }}
        >
          Check out the{' '}
          <strong style={{ color: '#10b981' }}>Getting Started</strong> guide
          for installation and setup, or explore the{' '}
          <strong style={{ color: '#f59e0b' }}>Real World Usage</strong>{' '}
          examples to see the reset functionality in action!
        </p>
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}
        >
          <span
            style={{
              background: '#3b82f6',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '6px',
              fontWeight: 'bold',
              fontSize: '0.9rem'
            }}
          >
            📚 Getting Started
          </span>
          <span
            style={{
              background: '#10b981',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '6px',
              fontWeight: 'bold',
              fontSize: '0.9rem'
            }}
          >
            🎨 Examples
          </span>
        </div>
      </div>
    </div>
  )
};
