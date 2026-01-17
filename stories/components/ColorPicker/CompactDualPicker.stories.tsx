import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import ReactGPickerComp from '../../../src/components/core/Colorpicker';
import { ThemeProvider } from '../../../src/components/providers/ThemeContext';
import { defaultArgs } from '../../utils/storyData';

/**
 * Compact Dual Mode Picker - A new compact horizontal design with close button
 * Perfect for embedding in applications where space is limited
 *
 * ⚠️ **Note: Still in development**
 */
const meta: Meta = {
  title: 'Components/Color Picker/~Compact (In Development)',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# ⚠️ **STILL IN DEVELOPMENT - NOT PRODUCTION READY**

**Compact Dual Mode Picker** - New streamlined horizontal design!

✅ Features:
- **Horizontal Layout** - Everything side by side
- **Close Button** - Built-in close functionality
- **Space Efficient** - Compact square design
- **Modern Design** - Clean, minimal interface
- **Dark Theme** - Full theme support

🎨 **Perfect for:**
- Modal dialogs
- Dropdown menus
- Sidebar panels
- Embedded color pickers
        `
      }
    }
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj;

const CompactDualPickerDemo = ({ onClose }: { onClose?: () => void }) => {
  const [color, setColor] = useState(
    'linear-gradient(90deg, #667eea 0%, #764ba2 100%)'
  );
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    onClose?.();
  };

  if (!isOpen) {
    return (
      <div
        style={{
          padding: '2rem',
          textAlign: 'center',
          color: '#94a3b8'
        }}
      >
        <p>Picker closed</p>
        <button
          onClick={() => setIsOpen(true)}
          style={{
            padding: '0.5rem 1rem',
            background: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '0.875rem',
            fontWeight: '500'
          }}
        >
          Reopen Picker
        </button>
      </div>
    );
  }

  return (
    <ThemeProvider defaultTheme='dark'>
      <div
        className='dark compact-picker-wrapper'
        style={{
          background: '#1e293b',
          borderRadius: '12px',
          padding: '1rem',
          border: '1px solid #334155',
          position: 'relative',
          width: 'fit-content',
          maxWidth: '90vw'
        }}
      >
        <style>{`
          /* Show only the iro wheel */
          .compact-picker-wrapper .w-full.rounded-xl {
            display: block !important;
          }

          /* Remove vertical spacing */
          .compact-picker-wrapper .space-y-2 > * + * {
            margin-top: 0 !important;
          }

          /* Iro picker - 50% smaller, visible */
          .compact-picker-wrapper .relative {
            transform: scale(0.5) !important;
            transform-origin: left top !important;
            display: block !important;
          }

          /* Hue slider - hidden */
          .compact-picker-wrapper .rounded-lg.colorpicker-glass.px-4:first-of-type {
            display: none !important;
          }

          /* Popular colors - hide completely */
          .compact-picker-wrapper .pt-4.px-2 {
            display: none !important;
          }

          /* Color value display - hide completely */
          .compact-picker-wrapper .rounded-lg.colorpicker-glass.flex.items-center.gap-2 {
            display: none !important;
          }

          /* Hide text inputs */
          .compact-picker-wrapper input[type="text"] {
            display: none !important;
          }

          /* Hide tabs header (SOLID/GRADIENT tabs) */
          .compact-picker-wrapper .popup-tabs-header {
            display: none !important;
          }

          /* Hide gradient bar/slider */
          .compact-picker-wrapper .gradient-interaction {
            display: none !important;
          }

          .compact-picker-wrapper .popup-tabs-body-item {
            min-height: auto !important;
            padding: 0 !important;
          }

          .compact-picker-wrapper .color-picker-panel {
            max-width: 200px !important;
          }
        `}</style>

        {/* Close Button */}
        <button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'transparent',
            border: 'none',
            color: '#94a3b8',
            cursor: 'pointer',
            fontSize: '1.25rem',
            lineHeight: 1,
            padding: '0.25rem 0.5rem',
            borderRadius: '4px',
            transition: 'all 0.2s',
            zIndex: 10
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#334155';
            e.currentTarget.style.color = '#f8fafc';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#94a3b8';
          }}
          title='Close'
        >
          ✕
        </button>

        <ReactGPickerComp
          {...defaultArgs}
          value={color}
          solid={true}
          gradient={true}
          onChange={setColor}
          popupWidth={520}
          colorBoardHeight={140}
          showGradientAngle={false}
          showGradientPosition={false}
          showInputs={false}
        />

        {/* Footer with Actions */}
        <div
          style={{
            marginTop: '1rem',
            paddingTop: '1rem',
            borderTop: '1px solid #334155',
            display: 'flex',
            gap: '0.5rem',
            justifyContent: 'flex-end'
          }}
        >
          <button
            onClick={() =>
              setColor('linear-gradient(90deg, #667eea 0%, #764ba2 100%)')
            }
            style={{
              padding: '0.5rem 1rem',
              background: '#334155',
              color: '#f8fafc',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '0.75rem',
              fontWeight: '600',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#475569';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#334155';
            }}
          >
            Reset
          </button>
          <button
            onClick={handleClose}
            style={{
              padding: '0.5rem 1.5rem',
              background: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '0.75rem',
              fontWeight: '600',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#2563eb';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#3b82f6';
            }}
          >
            Apply
          </button>
        </div>
      </div>
    </ThemeProvider>
  );
};

/**
 * Default compact dual mode picker
 */
export const Default: Story = {
  render: () => <CompactDualPickerDemo />
};

/**
 * Compact picker in a modal context
 */
export const InModal: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <button
          onClick={() => setIsOpen(true)}
          style={{
            padding: '0.75rem 1.5rem',
            background: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '0.875rem',
            fontWeight: '600'
          }}
        >
          Open Color Picker
        </button>

        {isOpen && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0, 0, 0, 0.7)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000
            }}
            onClick={() => setIsOpen(false)}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <CompactDualPickerDemo onClose={() => setIsOpen(false)} />
            </div>
          </div>
        )}
      </div>
    );
  }
};

/**
 * Multiple compact pickers side by side
 */
export const MultiplePickers: Story = {
  render: () => {
    return (
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <CompactDualPickerDemo />
        <CompactDualPickerDemo />
      </div>
    );
  }
};
