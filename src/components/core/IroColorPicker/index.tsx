import iro from '@jaames/iro';
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react';
import { useTheme } from '../../providers/ThemeContext';

interface IroColorPickerProps {
  width?: number;
  color?: string;
  colors?: string[];
  display?: string;
  id?: string;
  layout?: any[];
  layoutDirection?: 'vertical' | 'horizontal';
  padding?: number;
  margin?: number;
  borderWidth?: number;
  borderColor?: string;
  handleRadius?: number;
  activeHandleRadius?: number;
  handleSvg?: string;
  handleProps?: { x: number; y: number };
  wheelLightness?: boolean;
  wheelAngle?: number;
  wheelDirection?: 'clockwise' | 'anticlockwise';
  sliderSize?: number;
  boxHeight?: number;
  onColorChange?: (color: any) => void;
  onInputChange?: (color: any) => void;
  onInputStart?: (color: any) => void;
  onInputMove?: (color: any) => void;
  onInputEnd?: (color: any) => void;
  onMount?: (colorPicker: any) => void;
}

export interface IroColorPickerRef {
  colorPicker: any;
}

const IroColorPicker = forwardRef<IroColorPickerRef, IroColorPickerProps>(
  (
    {
      width,
      color = '#ffffff',
      colors,
      display = 'block',
      id,
      layout,
      layoutDirection = 'vertical',
      padding = 6,
      margin = 12,
      handleRadius = 8,
      activeHandleRadius,
      handleSvg,
      handleProps = { x: 0, y: 0 },
      wheelLightness = true,
      wheelAngle = 0,
      wheelDirection = 'anticlockwise',
      sliderSize,
      boxHeight,
      onColorChange,
      onInputChange,
      onInputStart,
      onInputMove,
      onInputEnd,
      onMount
    },
    ref
  ) => {
    const { theme } = useTheme();
    const containerRef = useRef<HTMLDivElement>(null);
    const colorPickerRef = useRef<any>(null);
    const isUpdatingColor = useRef<boolean>(false);
    const [containerWidth, setContainerWidth] = useState<number>(width || 200);
    const [initialWidthSet, setInitialWidthSet] = useState<boolean>(false);

    // Detect if dev tools might be open on initial render
    const detectDevToolsOpen = useCallback(() => {
      const threshold = 160; // Common dev tools minimum height
      const heightDiff = window.outerHeight - window.innerHeight;
      const widthDiff = window.outerWidth - window.innerWidth;

      // Dev tools could be docked bottom, right, or in separate window
      return heightDiff > threshold || widthDiff > threshold;
    }, []);

    // Set up ResizeObserver to make the color picker responsive
    // Only when width prop is NOT provided (parent doesn't control width)
    useEffect(() => {
      if (width || !containerRef.current) return; // Don't observe if width is controlled by parent

      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const { width: observedWidth } = entry.contentRect;
          if (observedWidth > 0) {
            // More aggressive sizing for compact spaces
            // Account for padding and margins more carefully
            const availableWidth = observedWidth - padding * 2 - margin * 2;

            // Use different percentages based on available space
            let percentage = 0.8; // Default
            if (availableWidth < 300) {
              percentage = 0.9; // Use more space in compact mode
            } else if (availableWidth < 200) {
              percentage = 0.95; // Nearly full width for very small containers
            }

            const calculatedWidth = Math.floor(availableWidth * percentage);
            const newWidth = Math.max(120, Math.min(calculatedWidth, 250));

            setContainerWidth(newWidth);

            // Mark that initial width has been set
            if (!initialWidthSet) {
              setInitialWidthSet(true);
            }
          }
        }
      });

      resizeObserver.observe(containerRef.current);

      return () => {
        resizeObserver.disconnect();
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [padding, margin, initialWidthSet]); // Add initialWidthSet to dependencies

    // Initial dev tools detection and correction
    useEffect(() => {
      if (width) return; // Only run when we control the width

      // Wait for DOM to be fully ready, then check if dev tools might be affecting layout
      const checkInitialLayout = () => {
        if (containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect();
          const devToolsOpen = detectDevToolsOpen();

          if (devToolsOpen && rect.width > 0) {
            console.log(
              'Dev tools detected on initial render, forcing layout recalculation'
            );

            // Force a more aggressive width calculation
            setTimeout(() => {
              const observedWidth = rect.width;
              const availableWidth = observedWidth - padding * 2 - margin * 2;
              let percentage = 0.8;
              if (availableWidth < 300) percentage = 0.9;
              else if (availableWidth < 200) percentage = 0.95;
              const calculatedWidth = Math.floor(availableWidth * percentage);
              const newWidth = Math.max(120, Math.min(calculatedWidth, 250));

              // Force update even if similar to current width
              setContainerWidth(newWidth);
              setInitialWidthSet(true);
            }, 100);
          }
        }
      };

      // Run check after component mounts
      setTimeout(checkInitialLayout, 50);
    }, [width, padding, margin, detectDevToolsOpen]);

    // Handle layout changes (dev tools open/close, window resize, tab switching)
    useEffect(() => {
      if (!containerRef.current) return;

      const handleLayoutChange = () => {
        if (containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect();
          if (rect.width > 0 && rect.height > 0) {
            // Small delay to ensure layout is stable after change
            setTimeout(() => {
              if (colorPickerRef.current?.colorPicker) {
                try {
                  // Force the picker to redraw by triggering a resize
                  colorPickerRef.current.colorPicker.resize();
                } catch (error) {
                  // If resize fails, recreate the picker
                  console.warn('Picker resize failed, recreating:', error);
                  if (!width) {
                    // Only recreate if we control the width
                    const observedWidth = rect.width;
                    const availableWidth =
                      observedWidth - padding * 2 - margin * 2;
                    let percentage = 0.8;
                    if (availableWidth < 300) percentage = 0.9;
                    else if (availableWidth < 200) percentage = 0.95;
                    const calculatedWidth = Math.floor(
                      availableWidth * percentage
                    );
                    setContainerWidth(
                      Math.max(120, Math.min(calculatedWidth, 250))
                    );
                  }
                }
              }
            }, 150); // Wait for layout to stabilize
          }
        }
      };

      const handleVisibilityChange = () => {
        // When page becomes visible again, check if picker needs to be recreated
        if (!document.hidden) {
          handleLayoutChange();
        }
      };

      // Listen for window resize (handles dev tools open/close)
      window.addEventListener('resize', handleLayoutChange);
      document.addEventListener('visibilitychange', handleVisibilityChange);

      return () => {
        window.removeEventListener('resize', handleLayoutChange);
        document.removeEventListener(
          'visibilitychange',
          handleVisibilityChange
        );
      };
    }, [padding, margin, width]);

    // Add state to track when picker is ready (removed as it's set but not used)

    useImperativeHandle(ref, () => ({
      colorPicker: colorPickerRef.current
    }));

    // Create a shared picker creation function with enhanced error handling
    const createColorPicker = useCallback(
      (pickerWidth: number) => {
        if (!containerRef.current) {
          console.warn(
            'IroColorPicker: Container ref not available, skipping creation'
          );
          return;
        }

        // More thorough check for existing picker
        if (colorPickerRef.current) {
          try {
            // Check if picker is still valid and functioning
            if (
              colorPickerRef.current.color &&
              typeof colorPickerRef.current.color.hexString === 'string'
            ) {
              return;
            }
          } catch (error) {}
        }

        // Clean up any existing picker first
        if (colorPickerRef.current) {
          try {
            // Proper cleanup of event listeners and resources
            if (typeof colorPickerRef.current.off === 'function') {
              colorPickerRef.current.off();
            }
            colorPickerRef.current = null;
          } catch (error) {
            console.warn(
              'IroColorPicker: Error cleaning up existing picker:',
              error
            );
          }
        }

        // Capture the container reference for cleanup
        const currentContainer = containerRef.current;

        // IMPORTANT: Clear any existing DOM content first
        if (currentContainer) {
          currentContainer.innerHTML = '';
        }

        // Set theme-appropriate border color and background
        const themeBorderColor = theme === 'light' ? '#ffffff' : '#334155';
        const themeBorderWidth = theme === 'light' ? 1 : 0;

        // Enhanced options with better default values
        const options: any = {
          width: pickerWidth,
          color: colors ? undefined : color,
          colors: colors || undefined,
          display,
          id,
          layout,
          layoutDirection,
          padding,
          margin,
          borderWidth: themeBorderWidth,
          borderColor: themeBorderColor,
          handleRadius,
          activeHandleRadius: activeHandleRadius || handleRadius,
          handleSvg,
          handleProps: handleProps || { x: 0, y: 0 }, // Ensure defaults are always set
          wheelLightness,
          wheelAngle,
          wheelDirection,
          sliderSize,
          boxHeight
        };

        // Remove undefined values but preserve explicit defaults
        Object.keys(options).forEach((key) => {
          if (options[key] === undefined) {
            delete options[key];
          }
        });

        try {
          // Create the picker with enhanced error handling
          colorPickerRef.current = new (iro as any).ColorPicker(
            containerRef.current,
            options
          );

          // Validate the picker was created successfully
          if (!colorPickerRef.current || !colorPickerRef.current.color) {
            throw new Error('ColorPicker was not created properly');
          }

          // Update picker ready state and notify parent

          // Force update of imperative handle by calling onMount callback
          if (onMount) {
            setTimeout(() => onMount(colorPickerRef.current), 0);
          }

          // Validate initial layout after creation (handles dev tools open on load)
          // Multiple validation attempts to ensure correct sizing
          const validateLayout = (attempt = 1, maxAttempts = 3) => {
            setTimeout(() => {
              if (containerRef.current && colorPickerRef.current?.colorPicker) {
                try {
                  const rect = containerRef.current.getBoundingClientRect();
                  const currentPickerWidth =
                    colorPickerRef.current.colorPicker.width;

                  // Check if the picker width doesn't match the container appropriately
                  if (rect.width > 0 && !width) {
                    const observedWidth = rect.width;
                    const availableWidth =
                      observedWidth - padding * 2 - margin * 2;
                    let percentage = 0.8;
                    if (availableWidth < 300) percentage = 0.9;
                    else if (availableWidth < 200) percentage = 0.95;
                    const expectedWidth = Math.floor(
                      availableWidth * percentage
                    );
                    const finalExpectedWidth = Math.max(
                      120,
                      Math.min(expectedWidth, 250)
                    );

                    // If there's a significant difference, update the width
                    if (
                      Math.abs(currentPickerWidth - finalExpectedWidth) > 10
                    ) {
                      console.log(
                        `Layout validation attempt ${attempt}: Correcting width from ${currentPickerWidth} to ${finalExpectedWidth}`
                      );
                      setContainerWidth(finalExpectedWidth);

                      // If this isn't the last attempt, schedule another validation
                      if (attempt < maxAttempts) {
                        validateLayout(attempt + 1, maxAttempts);
                      }
                    }
                  }
                } catch (error) {
                  console.warn('Initial layout validation failed:', error);
                  // Retry on error if we have attempts left
                  if (attempt < maxAttempts) {
                    validateLayout(attempt + 1, maxAttempts);
                  }
                }
              }
            }, 200 * attempt); // Increasing delay for each attempt
          };

          validateLayout();
        } catch (error) {
          colorPickerRef.current = null;
          return null; // Return null to indicate failure
        }

        // Apply theme styles to iro.js elements after creation
        const applyThemeStyles = () => {
          if (!containerRef.current) return;

          const svgElements = containerRef.current.querySelectorAll('svg');
          svgElements.forEach((svg) => {
            // Remove default background
            svg.style.backgroundColor = 'transparent';

            // Style background rectangles
            const backgroundRects = svg.querySelectorAll('rect:first-child');
            backgroundRects.forEach((rect) => {
              if (theme === 'light') {
                rect.setAttribute('fill', 'white');
                rect.setAttribute('stroke', '#e5e7eb');
                rect.setAttribute('stroke-width', '1');
              } else {
                rect.setAttribute('fill', '#374151');
                rect.setAttribute('stroke', '#6b7280');
                rect.setAttribute('stroke-width', '1');
              }
            });
          });
        };

        // Apply styles immediately and after a short delay
        applyThemeStyles();
        setTimeout(applyThemeStyles, 100);

        // Set up event listeners
        if (onColorChange) {
          colorPickerRef.current.on('color:change', (color: any) => {
            if (!isUpdatingColor.current) {
              onColorChange(color);
            }
          });
        }
        if (onInputChange) {
          colorPickerRef.current.on('input:change', onInputChange);
        }
        if (onInputStart) {
          colorPickerRef.current.on('input:start', onInputStart);
        }
        if (onInputMove) {
          colorPickerRef.current.on('input:move', onInputMove);
        }
        if (onInputEnd) {
          colorPickerRef.current.on('input:end', onInputEnd);
        }
        if (onMount) {
          colorPickerRef.current.on('mount', onMount);
        }

        return currentContainer;
      },
      [
        theme,
        colors,
        color,
        display,
        id,
        layout,
        layoutDirection,
        padding,
        margin,
        handleRadius,
        activeHandleRadius,
        handleSvg,
        handleProps,
        wheelLightness,
        wheelAngle,
        wheelDirection,
        sliderSize,
        boxHeight,
        onColorChange,
        onInputChange,
        onInputStart,
        onInputMove,
        onInputEnd,
        onMount,
        width
      ]
    );

    // Cleanup function
    const cleanup = useCallback(() => {
      if (colorPickerRef.current) {
        try {
          // Clean up event listeners
          if (onColorChange) {
            colorPickerRef.current.off('color:change', onColorChange);
          }
          if (onInputChange) {
            colorPickerRef.current.off('input:change', onInputChange);
          }
          if (onInputStart) {
            colorPickerRef.current.off('input:start', onInputStart);
          }
          if (onInputMove) {
            colorPickerRef.current.off('input:move', onInputMove);
          }
          if (onInputEnd) {
            colorPickerRef.current.off('input:end', onInputEnd);
          }
          if (onMount) {
            colorPickerRef.current.off('mount', onMount);
          }
        } catch (error) {
          console.warn('Error cleaning up iro picker event listeners:', error);
        }

        // Set to null to ensure clean recreation
        colorPickerRef.current = null;
      }
    }, [
      onColorChange,
      onInputChange,
      onInputStart,
      onInputMove,
      onInputEnd,
      onMount
    ]);

    // useEffect for when width prop is provided by parent
    useEffect(() => {
      if (!width) return;

      let retryCount = 0;
      const maxRetries = 3;

      const createWithRetry = () => {
        // Longer initial delay to ensure DOM is completely ready
        const timeoutId = setTimeout(() => {
          try {
            const result = createColorPicker(width);
            if (
              !result &&
              colorPickerRef.current === null &&
              retryCount < maxRetries
            ) {
              retryCount++;

              // Exponential backoff: 100ms, 200ms, 400ms
              setTimeout(createWithRetry, 100 * Math.pow(2, retryCount - 1));
            }
          } catch (error) {
            if (retryCount < maxRetries) {
              retryCount++;

              setTimeout(createWithRetry, 100 * Math.pow(2, retryCount - 1));
            }
          }
        }, 100); // Increased from 50ms to 100ms

        return () => clearTimeout(timeoutId);
      };

      const cleanup = createWithRetry();

      return () => {
        if (cleanup) cleanup();
        cleanup();
      };
    }, [width, theme, createColorPicker, cleanup]);

    // useEffect for when containerWidth is used (internal ResizeObserver)
    useEffect(() => {
      if (width) return; // Don't run if width prop is provided

      let retryCount = 0;
      const maxRetries = 3;

      const createWithRetry = () => {
        // Longer initial delay to ensure DOM is completely ready
        const timeoutId = setTimeout(() => {
          try {
            const result = createColorPicker(containerWidth);
            if (
              !result &&
              colorPickerRef.current === null &&
              retryCount < maxRetries
            ) {
              retryCount++;

              // Exponential backoff: 100ms, 200ms, 400ms
              setTimeout(createWithRetry, 100 * Math.pow(2, retryCount - 1));
            }
          } catch (error) {
            if (retryCount < maxRetries) {
              retryCount++;

              setTimeout(createWithRetry, 100 * Math.pow(2, retryCount - 1));
            }
          }
        }, 100); // Increased from 50ms to 100ms

        return () => clearTimeout(timeoutId);
      };

      const cleanup = createWithRetry();

      return () => {
        if (cleanup) cleanup();
        cleanup();
      };
    }, [containerWidth, theme, createColorPicker, cleanup, width]);

    // Update color when prop changes
    useEffect(() => {
      if (colorPickerRef.current && !colors && color) {
        try {
          isUpdatingColor.current = true;

          // Handle both hex and hex8 (with alpha) formats
          if (color.length === 9 && color.startsWith('#')) {
            // hex8 format (with alpha)
            const hex = color.slice(0, 7);
            const alpha = parseInt(color.slice(7, 9), 16) / 255;
            colorPickerRef.current.color.set({
              hexString: hex,
              alpha: alpha
            });
          } else {
            // Regular hex format
            colorPickerRef.current.color.set({
              hexString: color
            });
          }

          // Reset flag after a small delay to allow the change to propagate
          setTimeout(() => {
            isUpdatingColor.current = false;
          }, 10);
        } catch (error) {
          console.warn('Error updating iro color picker:', error);
          isUpdatingColor.current = false;
        }
      }
    }, [color, colors]);

    // Update colors when prop changes (for multi-color selections)
    useEffect(() => {
      if (colorPickerRef.current && colors) {
        colors.forEach((colorValue, index) => {
          if (colorPickerRef.current.colors[index]) {
            colorPickerRef.current.colors[index].hexString = colorValue;
          }
        });
      }
    }, [colors]);

    return (
      <div
        ref={containerRef}
        style={{
          display: 'flex',
          width: '100%',
          maxWidth: '100%',
          minWidth: 0,
          overflow: 'hidden',
          justifyContent: 'center'
        }}
      >
        {/* Iro.js will render the picker here */}
      </div>
    );
  }
);

IroColorPicker.displayName = 'IroColorPicker';

export default IroColorPicker;
