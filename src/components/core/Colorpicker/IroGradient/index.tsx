import iro from '@jaames/iro';
import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import tinyColor from 'tinycolor2';

import { InputRgba } from '../../../forms';
import IroColorPicker from '../../IroColorPicker';
import DefaultColorsPanel from '../DefaultColorPanel';
import GradientPanel from '../GradientPanel';

import { useDebounce } from '../../../../hooks';
import {
  getGradient,
  parseGradient,
  rgbaToArray,
  rgbaToHex
} from '../../../../utils';

import { IActiveColor, IPropsComp, TPropsChange } from '../../../../lib/types';

const IroGradient: FC<IPropsComp> = ({
  value = 'linear-gradient(90deg, #ffffff 0%, #000000 100%)',
  onChange = () => ({}),
  format = 'rgb',
  debounceMS = 300,
  debounce = true,
  showAlpha = true,
  showInputs = true,
  showGradientResult = true,
  showGradientStops = true,
  showGradientMode = true,
  showGradientAngle = true,
  showGradientPosition = true,
  allowAddGradientStops = true,
  colorBoardHeight = 120,
  defaultColors
}) => {
  const parsedColors = useCallback(() => {
    return parseGradient(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const { stops, type, modifier } = parsedColors();
  const lastStop = rgbaToArray(stops[stops.length - 1][0]);
  const activeStopIndex = stops.length - 1;
  const activeStop = rgbaToHex([lastStop[0], lastStop[1], lastStop[2]]);
  const activeAlpha = Math.round(lastStop[3] * 100);

  const iroPickerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isUpdatingFromGradientStop = useRef<boolean>(false);
  const [pickerWidth, setPickerWidth] = useState<number>(200);
  // Responsive width for IroColorPicker - match solid picker logic
  useEffect(() => {
    if (!containerRef.current) return;
    const resizeObserver = new window.ResizeObserver((entries) => {
      for (const entry of entries) {
        const containerWidth = entry.contentRect.width;
        // Use the same logic as solid picker for consistency
        const padding = 40; // Total padding and margins
        const available = containerWidth - padding;

        let calculatedWidth;
        // Simple responsive calculation - same as solid picker
        if (available <= 200) {
          calculatedWidth = Math.max(150, available - 10); // Very small containers
        } else if (available <= 320) {
          calculatedWidth = Math.min(available * 0.85, 250); // Medium containers
        } else {
          calculatedWidth = Math.min(available * 0.8, 280); // Large containers
        }

        setPickerWidth(Math.floor(calculatedWidth));
      }
    });
    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  const [color, setColor] = useState({
    gradient: value,
    type,
    modifier,
    stops
  });

  const [activeColor, setActiveColor] = useState<IActiveColor>({
    hex: activeStop,
    alpha: activeAlpha,
    loc: stops[activeStopIndex][1],
    index: activeStopIndex
  });

  const debounceColor = useDebounce(color, debounceMS);

  // Update iro picker color
  const updateIroPickerColor = useCallback(
    (colorData: { hex: string; alpha: number }, retryCount = 0) => {
      const maxRetries = 5;

      const updateColor = () => {
        // Check if picker is properly initialized
        if (
          iroPickerRef.current?.colorPicker &&
          iroPickerRef.current.colorPicker.color
        ) {
          const iroColor = showAlpha
            ? {
                r: parseInt(colorData.hex.slice(1, 3), 16),
                g: parseInt(colorData.hex.slice(3, 5), 16),
                b: parseInt(colorData.hex.slice(5, 7), 16),
                a: colorData.alpha / 100
              }
            : colorData.hex;

          try {
            // Set flag to prevent circular updates
            isUpdatingFromGradientStop.current = true;

            console.log(
              '🎨 Updating iro picker in gradient mode (attempt:',
              retryCount + 1,
              '):',
              {
                hex: colorData.hex,
                alpha: colorData.alpha,
                iroColor,
                pickerReady: !!iroPickerRef.current?.colorPicker?.color
              }
            );

            iroPickerRef.current.colorPicker.color.set(iroColor);

            // Reset flag after a short delay
            setTimeout(() => {
              isUpdatingFromGradientStop.current = false;
            }, 100);

            console.log('✅ Successfully updated iro picker');
          } catch (error) {
            isUpdatingFromGradientStop.current = false;
            console.warn('❌ Error updating iro color picker:', error);

            // Retry with exponential backoff
            if (retryCount < maxRetries) {
              const delay = 100 * Math.pow(2, retryCount); // 100ms, 200ms, 400ms, etc.
              console.log(
                `🔄 Retrying in ${delay}ms (attempt ${retryCount + 2}/${
                  maxRetries + 1
                })`
              );
              setTimeout(() => {
                updateIroPickerColor(colorData, retryCount + 1);
              }, delay);
            } else {
              console.error(
                '💥 Max retries reached, giving up on iro picker update'
              );
            }
          }
        } else {
          console.log('⏳ Iro picker not ready, retrying...', {
            hasRef: !!iroPickerRef.current,
            hasColorPicker: !!iroPickerRef.current?.colorPicker,
            hasColor: !!iroPickerRef.current?.colorPicker?.color,
            attempt: retryCount + 1
          });

          // If picker is not ready, retry with increasing delays
          if (retryCount < maxRetries) {
            const delay = 50 + retryCount * 100; // 50ms, 150ms, 250ms, etc.
            setTimeout(() => {
              updateIroPickerColor(colorData, retryCount + 1);
            }, delay);
          } else {
            console.error('💥 Iro picker never became ready, giving up');
          }
        }
      };

      updateColor();
    },
    [showAlpha]
  );

  useEffect(() => {
    if (debounce && debounceColor) {
      onChange?.(debounceColor.gradient);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceColor]);

  // Initialize iro picker with current activeColor when component mounts or picker becomes ready
  useEffect(() => {
    const initializeIroPicker = () => {
      if (iroPickerRef.current?.colorPicker?.color && activeColor.hex) {
        console.log(
          '🚀 Initializing iro picker with activeColor:',
          activeColor
        );
        // Wait a bit for the picker to be fully ready, then update
        setTimeout(() => {
          updateIroPickerColor({
            hex: activeColor.hex,
            alpha: activeColor.alpha
          });
        }, 200);
      }
    };

    // Try immediately
    initializeIroPicker();

    // Also try after a delay in case picker wasn't ready
    const timeoutId = setTimeout(initializeIroPicker, 500);

    return () => clearTimeout(timeoutId);
  }, [activeColor, updateIroPickerColor]); // Initialize when activeColor or updateFunction changes

  // Custom setActiveColor that also updates iro picker
  const handleSetActiveColor = useCallback(
    (newActiveColor: any) => {
      console.log(
        '🎯 Gradient stop clicked, setting active color:',
        newActiveColor
      );
      setActiveColor(newActiveColor);

      // Force immediate update of iro picker with longer delay for first-time reliability
      setTimeout(() => {
        updateIroPickerColor({
          hex: newActiveColor.hex,
          alpha: newActiveColor.alpha
        });
      }, 50); // Increased from 5ms to 50ms for better first-time success
    },
    [updateIroPickerColor]
  );

  // Update iro picker when activeColor changes (e.g., clicking gradient stops)
  useEffect(() => {
    console.log('🔄 ActiveColor changed in gradient:', {
      hex: activeColor.hex,
      alpha: activeColor.alpha,
      index: activeColor.index,
      loc: activeColor.loc
    });

    // Add a small delay to ensure the activeColor state has fully updated
    const timeoutId = setTimeout(() => {
      updateIroPickerColor({ hex: activeColor.hex, alpha: activeColor.alpha });
    }, 10);

    return () => clearTimeout(timeoutId);
  }, [
    activeColor.hex,
    activeColor.alpha,
    activeColor.index,
    activeColor.loc,
    updateIroPickerColor
  ]);

  const updateGradient = useCallback(
    (newColor: any) => {
      if (Array.isArray(newColor)) {
        // Handle the case where it's called with stops array
        const newStops = newColor;
        const newColorState = {
          ...color,
          stops: newStops,
          gradient: `${getGradient(
            color.type,
            newStops,
            color.modifier,
            format,
            showAlpha
          )}`
        };
        setColor(newColorState);
        return newColorState; // Return the new state for immediate use
      } else {
        // Handle the case where it's called with full color object
        setColor(newColor);
        return newColor;
      }
    },
    [color, format, showAlpha]
  );

  const onChangeActiveColor = ({ hex, alpha }: TPropsChange) => {
    // Use setActiveColor callback to get the LATEST activeColor state
    setActiveColor((latestActiveColor) => {
      // Use setColor callback to get the most current state
      setColor((currentColorState) => {
        // FIXED: Find the active stop by location using LATEST activeColor
        const activeStopIndex = currentColorState.stops.findIndex(
          (stop) =>
            Math.abs((stop[1] as number) - (latestActiveColor.loc as number)) <
            0.01
        );

        // Safety check: ensure we have a valid index
        if (
          activeStopIndex === -1 ||
          activeStopIndex >= currentColorState.stops.length
        ) {
          console.warn(
            'Could not find stop at location:',
            latestActiveColor.loc,
            'in stops:',
            currentColorState.stops
          );
          return currentColorState; // Return unchanged state
        }

        const currentStop = currentColorState.stops[activeStopIndex];
        const currentPosition = currentStop[1];

        // Update the gradient with the new active color
        const newStops = [...currentColorState.stops];
        const rgba = tinyColor(hex);
        rgba.setAlpha(alpha / 100);

        // Update the correct stop
        newStops[activeStopIndex] = [
          rgba.toRgbString(),
          currentPosition,
          activeStopIndex // Use the found index
        ];

        const newColorState = {
          ...currentColorState,
          stops: newStops,
          gradient: `${getGradient(
            currentColorState.type,
            newStops,
            currentColorState.modifier,
            format,
            showAlpha
          )}`
        };

        return newColorState;
      });

      // Return updated activeColor with new hex and alpha
      const updatedActiveColor = {
        ...latestActiveColor,
        hex,
        alpha
      };

      return updatedActiveColor;
    });
  };

  const setInit = () => {}; // Stub function for gradient panel compatibility

  const onSubmitChange = (rgba: string) => {
    const rgbaArr = rgbaToArray(rgba);
    const hex = rgbaToHex([rgbaArr[0], rgbaArr[1], rgbaArr[2]]);
    const alpha = Math.round(rgbaArr[3] * 100);

    onChangeActiveColor({ hex, alpha });
  };

  // Update iro picker when color is selected from default colors panel
  const handleColorFromPanel = (newColor: any) => {
    setColor(newColor);
    if (newColor?.stops) {
      const lastStop = rgbaToArray(
        newColor.stops[newColor.stops.length - 1][0]
      );
      const activeStop = rgbaToHex([lastStop[0], lastStop[1], lastStop[2]]);
      const newActiveColor = {
        hex: activeStop,
        alpha: Math.round(lastStop[3] * 100),
        loc: newColor.stops[newColor.stops.length - 1][1],
        index: newColor.stops.length - 1
      };

      setActiveColor(newActiveColor);

      // Update the iro color picker
      updateIroPickerColor(newActiveColor);
    }
  };

  const handleIroColorChange = (iroColor: any) => {
    // Don't process if we're currently updating from gradient stop
    if (isUpdatingFromGradientStop.current) {
      return;
    }

    const newColor: TPropsChange = {
      hex: iroColor.hexString,
      alpha: Math.round(iroColor.alpha * 100)
    };

    onChangeActiveColor(newColor);
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
    ? tinyColor({
        r: parseInt(activeColor.hex.slice(1, 3), 16),
        g: parseInt(activeColor.hex.slice(3, 5), 16),
        b: parseInt(activeColor.hex.slice(5, 7), 16),
        a: activeColor.alpha / 100
      }).toHex8String()
    : activeColor.hex;

  return (
    <div
      className='w-full rounded-xl shadow-lg space-y-2 transition-all duration-200 hover:shadow-xl'
      style={{
        backgroundColor: 'var(--colorpicker-panel-bg)',
        borderColor: 'var(--colorpicker-border)',
        borderWidth: '1px',
        borderStyle: 'solid'
      }}
    >
      {/* Color Picker Container */}
      <div className='relative' ref={containerRef}>
        <div
          className='flex justify-center items-center rounded-lg'
          style={{
            height: colorBoardHeight + pickerWidth
          }}
        >
          <IroColorPicker
            ref={iroPickerRef}
            width={pickerWidth}
            color={iroColorValue}
            layout={layoutConfig}
            onColorChange={handleIroColorChange}
          />
        </div>
      </div>

      {/* Gradient Controls */}
      <div className='rounded-lg colorpicker-glass px-4'>
        <GradientPanel
          color={color}
          activeColor={activeColor}
          setActiveColor={handleSetActiveColor}
          setColor={updateGradient}
          setInit={setInit}
          format={format}
          showAlpha={showAlpha}
          showGradientResult={showGradientResult}
          showGradientStops={showGradientStops}
          showGradientMode={showGradientMode}
          showGradientAngle={showGradientAngle}
          showGradientPosition={showGradientPosition}
          allowAddGradientStops={allowAddGradientStops}
        />
      </div>

      {/* Color Palette */}
      <div className='pt-4 px-2'>
        <DefaultColorsPanel
          defaultColors={defaultColors}
          setColor={handleColorFromPanel}
          setInit={() => {}}
          setActiveColor={handleSetActiveColor}
          colorType='gradient'
        />
      </div>

      {/* Input Controls */}
      {showInputs && (
        <div className='rounded-lg colorpicker-glass'>
          <InputRgba
            hex={activeColor.hex}
            alpha={activeColor.alpha}
            showAlpha={showAlpha}
            onChange={(value: { hex: string; alpha: number }) =>
              setActiveColor((prev) => ({
                ...prev,
                hex: value.hex,
                alpha: value.alpha,
                index: prev.index // Preserve the index!
              }))
            }
            onSubmitChange={onSubmitChange}
          />
        </div>
      )}
    </div>
  );
};

export default IroGradient;
