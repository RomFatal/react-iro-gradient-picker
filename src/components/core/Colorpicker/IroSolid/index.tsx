import iro from '@jaames/iro';
import React, { FC, useEffect, useRef, useState } from 'react';
import tinycolor from 'tinycolor2';

import { InputRgba } from '../../../forms';
import IroColorPicker from '../../IroColorPicker';
import DefaultColorsPanel from '../DefaultColorPanel';

import { useDebounce } from '../../../../hooks';
import { checkFormat, getHexAlpha } from '../../../../utils';

import { IPropsComp, TPropsChange } from '../../../../lib/types';

const IroSolidColorPicker: FC<IPropsComp> = ({
  value = '#ffffff',
  onChange = () => ({}),
  format = 'rgb',
  debounceMS = 300,
  debounce = true,
  showAlpha = true,
  showInputs = true,
  defaultColors,
  showReset = false,
  onReset
}) => {
  const node = useRef<HTMLDivElement | null>(null);
  const iroPickerRef = useRef<any>(null);
  // Store the initial value for reset functionality
  const initialValue = useRef(value);
  const [init, setInit] = useState<boolean>(true);
  const [color, setColor] = useState(getHexAlpha(value));
  const [pickerWidth, setPickerWidth] = useState<number>(200);
  const pickerWidthRef = useRef<number>(200);

  // Update ref when state changes
  useEffect(() => {
    pickerWidthRef.current = pickerWidth;
    console.log('📊 Picker width state changed to:', pickerWidth);
  }, [pickerWidth]);

  // Calculate responsive width based on container
  const getResponsiveWidth = (containerWidth: number) => {
    const padding = 40; // Total padding and margins
    const available = containerWidth - padding;

    // Simple responsive calculation
    if (available <= 200) {
      return Math.max(150, available - 10); // Very small containers - fixed logic
    } else if (available <= 320) {
      return Math.min(available * 0.85, 250); // Medium containers
    } else {
      return Math.min(available * 0.8, 280); // Large containers
    }
  };

  // Handle container resize
  useEffect(() => {
    if (!node.current) return;

    const updateSize = () => {
      if (node.current) {
        const rect = node.current.getBoundingClientRect();
        if (rect.width > 0) {
          const newWidth = Math.floor(getResponsiveWidth(rect.width));
          if (Math.abs(newWidth - pickerWidthRef.current) > 5) {
            // Only update if significant change
            console.log('� Size update:', { container: rect.width, newWidth });
            setPickerWidth(newWidth);
          }
        }
      }
    };

    // Initial size calculation
    updateSize();

    // Set up ResizeObserver
    const resizeObserver = new ResizeObserver(() => {
      updateSize();
    });

    resizeObserver.observe(node.current);

    // Window resize backup
    window.addEventListener('resize', updateSize);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateSize);
    };
  }, []); // Empty dependency array is now safe

  // Debug helper for testing - create it once and update functions
  useEffect(() => {
    if (!(window as any).debugPicker) {
      (window as any).debugPicker = {};
    }

    const debug = (window as any).debugPicker;
    debug.getCurrentWidth = () => {
      console.log('Current picker width:', pickerWidth);
      return pickerWidth;
    };
    debug.getContainerWidth = () => {
      const width = node.current?.getBoundingClientRect().width;
      console.log('Current container width:', width);
      return width;
    };
    debug.forceResize = () => {
      if (node.current) {
        const rect = node.current.getBoundingClientRect();
        const newWidth = Math.floor(getResponsiveWidth(rect.width));
        console.log('🔧 Force resize:', { container: rect.width, newWidth });
        setPickerWidth(newWidth);
      }
    };
    debug.getPickerRef = () => iroPickerRef.current;

    // Don't cleanup on unmount so user can access it
  }, [pickerWidth]);

  const debounceColor = useDebounce(color, debounceMS);

  useEffect(() => {
    if (debounce && debounceColor && init === false) {
      if (value === 'transparent' && color.alpha === 0) {
        color.alpha = 100;
      }

      const rgba = tinycolor(color.hex);
      rgba.setAlpha(color.alpha / 100);

      if (tinycolor(rgba).toRgbString() === tinycolor(value).toRgbString()) {
        return;
      }

      const formattedColor = checkFormat(
        rgba.toRgbString(),
        format,
        showAlpha,
        debounceColor.alpha
      );

      onChange?.(formattedColor);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceColor]);

  useEffect(() => {
    setColor(getHexAlpha(value));

    // Update iro color picker when value changes externally
    if (iroPickerRef.current?.colorPicker) {
      const newIroColor = showAlpha
        ? {
            r: parseInt(getHexAlpha(value).hex.slice(1, 3), 16),
            g: parseInt(getHexAlpha(value).hex.slice(3, 5), 16),
            b: parseInt(getHexAlpha(value).hex.slice(5, 7), 16),
            a: getHexAlpha(value).alpha / 100
          }
        : getHexAlpha(value).hex;

      try {
        iroPickerRef.current.colorPicker.color.set(newIroColor);
      } catch (error) {
        console.warn('Error updating iro color picker from props:', error);
      }
    }
  }, [value, showAlpha]);

  const handleColorChange = (iroColor: any) => {
    console.log('🎨 Alpha slider changed!', {
      hex: iroColor.hexString,
      alpha: iroColor.alpha,
      alphaPercent: Math.round(iroColor.alpha * 100)
    });

    const newColor: TPropsChange = {
      hex: iroColor.hexString,
      alpha: Math.round(iroColor.alpha * 100)
    };

    setInit(false);
    setColor(newColor);
  };

  const handleInputChange = (newColor: { hex: string; alpha: number }) => {
    setColor(newColor);
  };

  const handleInputSubmit = (colorString: string) => {
    onChange?.(colorString);
  };

  // Update iro picker when color is selected from default colors panel
  const handleColorFromPanel = (newColor: { hex: string; alpha: number }) => {
    setInit(false);
    setColor(newColor);

    // Update the iro color picker with a small delay to ensure it's ready
    const updateIroColor = () => {
      if (iroPickerRef.current?.colorPicker) {
        const iroColor = showAlpha
          ? {
              r: parseInt(newColor.hex.slice(1, 3), 16),
              g: parseInt(newColor.hex.slice(3, 5), 16),
              b: parseInt(newColor.hex.slice(5, 7), 16),
              a: newColor.alpha / 100
            }
          : newColor.hex;

        try {
          iroPickerRef.current.colorPicker.color.set(iroColor);
        } catch (error) {
          console.warn('Error updating iro color picker:', error);
          // Retry after a short delay
          setTimeout(() => {
            try {
              if (iroPickerRef.current?.colorPicker) {
                iroPickerRef.current.colorPicker.color.set(iroColor);
              }
            } catch (retryError) {
              console.warn(
                'Retry failed for iro color picker update:',
                retryError
              );
            }
          }, 100);
        }
      } else {
        // If picker is not ready, try again after a short delay
        setTimeout(updateIroColor, 50);
      }
    };

    updateIroColor();
  };

  // Reset to initial color
  const handleResetColor = () => {
    const initialColorData = getHexAlpha(initialValue.current);
    setColor(initialColorData);

    // Update the iro color picker
    if (iroPickerRef.current?.colorPicker) {
      const iroColor = showAlpha
        ? {
            r: parseInt(initialColorData.hex.slice(1, 3), 16),
            g: parseInt(initialColorData.hex.slice(3, 5), 16),
            b: parseInt(initialColorData.hex.slice(5, 7), 16),
            a: initialColorData.alpha / 100
          }
        : initialColorData.hex;

      try {
        iroPickerRef.current.colorPicker.color.set(iroColor);
      } catch (error) {
        console.warn('Error updating iro color picker on reset:', error);
      }
    }

    // Call onChange with initial value
    onChange(initialValue.current);

    // Call onReset callback if provided
    onReset?.();
  };

  // Create layout array conditionally based on showAlpha
  const layoutConfig = [
    {
      component: (iro as any).ui.Wheel,
      options: {}
    },
    {
      component: (iro as any).ui.Slider,
      options: {
        sliderType: 'value'
      }
    }
  ];

  if (showAlpha) {
    layoutConfig.push({
      component: (iro as any).ui.Slider,
      options: {
        sliderType: 'alpha'
      }
    });
  }

  // Use hex8 format when alpha is enabled for proper alpha support
  const iroColorValue = showAlpha
    ? tinycolor({
        r: parseInt(color.hex.slice(1, 3), 16),
        g: parseInt(color.hex.slice(3, 5), 16),
        b: parseInt(color.hex.slice(5, 7), 16),
        a: color.alpha / 100
      }).toHex8String()
    : color.hex;

  return (
    <div
      ref={node}
      className='w-full p-2 rounded-xl shadow-lg space-y-2 transition-all duration-200 hover:shadow-xl overflow-hidden'
      style={{
        backgroundColor: 'var(--colorpicker-panel-bg)',
        maxWidth: '100%',
        minWidth: 0,
        boxSizing: 'border-box'
      }}
    >
      {/* Color Picker Container */}
      <div className='relative overflow-hidden'>
        <div
          className='flex justify-center items-center rounded-lg colorpicker-glass w-full overflow-hidden'
          style={{
            height: Math.max(pickerWidth + 80, 220), // Better height calculation
            width: '100%',
            minWidth: 0,
            maxWidth: '100%',
            boxSizing: 'border-box'
          }}
        >
          <div
            style={{
              width: pickerWidth,
              height: 'fit-content',
              maxWidth: '90%'
            }}
          >
            <IroColorPicker
              ref={iroPickerRef}
              width={pickerWidth}
              color={iroColorValue}
              layout={layoutConfig}
              onColorChange={handleColorChange}
            />
          </div>
        </div>
      </div>
      {/* Color Palette */}
      <div className='border-t pt-4 colorpicker-glass rounded-lg'>
        <DefaultColorsPanel
          defaultColors={defaultColors}
          setColor={handleColorFromPanel}
          setInit={setInit}
          colorType='solid'
        />
      </div>
      {/* Input Controls */}
      {showInputs && (
        <div className='rounded-lg colorpicker-glass flex items-center gap-2'>
          <div className='flex-1'>
            <InputRgba
              hex={color.hex}
              alpha={color.alpha}
              format={format}
              showAlpha={showAlpha}
              onChange={handleInputChange}
              onSubmitChange={handleInputSubmit}
            />
          </div>
          {showReset && (
            <button
              onClick={handleResetColor}
              className='px-3 py-2 text-xs font-medium rounded-md transition-colors duration-200 bg-transparent border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 hover:bg-gray-800/50 whitespace-nowrap flex items-center gap-1'
              title='Reset to initial color'
            >
              <svg
                className='w-3 h-3'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
                />
              </svg>
              Reset
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default IroSolidColorPicker;
