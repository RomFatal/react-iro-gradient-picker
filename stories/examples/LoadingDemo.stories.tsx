import React, { useState, useEffect } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ColorPicker from '../../src';

const meta: Meta<typeof ColorPicker> = {
  title: 'Examples/Loading Demo',
  component: ColorPicker,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ColorPicker>;

const LoadingWithPopup = () => {
  const [showPicker, setShowPicker] = useState(false);
  const [currentColor, setCurrentColor] = useState('#ff0000');

  const togglePicker = () => {
    setShowPicker(!showPicker);
  };

  return (
    <div style={{ padding: '40px', textAlign: 'center', minHeight: '400px' }}>
      {/* Main Page Content */}
      <div
        style={{
          width: '300px',
          height: '300px',
          margin: '0 auto',
          background: currentColor,
          borderRadius: '16px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
          transition: 'background 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <div style={{ color: 'white', fontSize: '18px', fontWeight: 'bold', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
          Main Page Color
        </div>
        <button
          onClick={togglePicker}
          style={{
            padding: '12px 24px',
            background: 'rgba(255,255,255,0.2)',
            backdropFilter: 'blur(10px)',
            color: 'white',
            border: '2px solid rgba(255,255,255,0.3)',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: '600',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            transition: 'all 0.2s ease',
          }}
        >
          Open Color Picker
        </button>
        <div style={{ color: 'white', fontSize: '14px', textShadow: '0 2px 4px rgba(0,0,0,0.3)', fontFamily: 'monospace' }}>
          {currentColor}
        </div>
      </div>

      {/* Popup Modal */}
      {showPicker && (
        <>
          {/* Backdrop */}
          <div
            onClick={togglePicker}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0,0,0,0.5)',
              backdropFilter: 'blur(4px)',
              zIndex: 9998,
              animation: 'fadeIn 0.2s ease-in-out',
            }}
          />
          
          {/* Popup Window */}
          <div
            style={{
              position: 'fixed',
              top: '50%',
              right: '40px',
              transform: 'translateY(-50%)',
              zIndex: 9999,
              background: '#1a1a1a',
              borderRadius: '16px',
              padding: '30px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
              animation: 'slideIn 0.3s ease-out',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ margin: 0, color: 'white', fontSize: '20px' }}>Choose Color</h3>
              <button
                onClick={togglePicker}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#999',
                  fontSize: '24px',
                  cursor: 'pointer',
                  padding: '0',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '4px',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#999';
                }}
              >
                ×
              </button>
            </div>
            
            <ColorPicker
              solid
              gradient
              value={currentColor}
              onChange={(color) => {
                setCurrentColor(color);
                return color;
              }}
              theme="dark"
              showWrapper={true}
              wrapperPadding="20px"
              wrapperRounded="12px"
              showAlpha={true}
              showInputs={true}
              colorBoardHeight={150}
              popupWidth={280}
            />
          </div>

          <style>
            {`
              @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
              }
              @keyframes slideIn {
                from { 
                  opacity: 0; 
                  transform: translateY(-50%) translateX(100px);
                }
                to { 
                  opacity: 1; 
                  transform: translateY(-50%) translateX(0);
                }
              }
            `}
          </style>
        </>
      )}
    </div>
  );
};

export const LoadingWithDualMode: Story = {
  render: () => <LoadingWithPopup />,
  parameters: {
    docs: {
      description: {
        story:
          'Click "Open Color Picker" to launch a popup modal with the dual mode picker. ' +
          'As you select colors in the popup, the main page background updates in real-time. ' +
          'Click the × button or the backdrop to close the popup.',
      },
    },
  },
};
