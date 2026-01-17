import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react';
import { useTheme } from '../../providers/ThemeContext';
import iro from '@jaames/iro';

type LayoutPreset = 'wheel-value' | 'wheel-value-alpha' | any[];

interface IroColorPickerProps {
  width?: number;
  color?: string;
  colors?: string[];
  display?: string;
  id?: string;
  layout?: LayoutPreset;
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
    const { theme: contextTheme } = useTheme();
    const containerRef = useRef<HTMLDivElement>(null);
    const colorPickerRef = useRef<any>(null);

    // Detect theme from parent element as fallback
    const [detectedTheme, setDetectedTheme] = useState<'light' | 'dark'>(
      contextTheme
    );

    useEffect(() => {
      if (!containerRef.current) return;

      // Check parent elements for light/dark class
      let element: HTMLElement | null = containerRef.current;
      let foundTheme: 'light' | 'dark' | null = null;
      while (element) {
        if (element.classList.contains('light')) {
          foundTheme = 'light';
          break;
        }
        if (element.classList.contains('dark')) {
          foundTheme = 'dark';
          break;
        }
        element = element.parentElement;
      }

      if (foundTheme) {
        setDetectedTheme(foundTheme);
      } else {
        setDetectedTheme(contextTheme);
      }
    }, [contextTheme]);

    const theme = detectedTheme;
    const isUpdatingColor = useRef<boolean>(false);
    const [containerWidth, setContainerWidth] = useState<number>(width || 200);
    const [isLoading, setIsLoading] = useState<boolean>(true);

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
            setContainerWidth(Math.max(120, Math.min(calculatedWidth, 250)));
          }
        }
      });

      resizeObserver.observe(containerRef.current);

      return () => {
        resizeObserver.disconnect();
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [padding, margin]); // Remove width from dependencies to prevent recreation

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

        // Check if component is still mounted
        if (!containerRef.current) {
          console.warn(
            'IroColorPicker: Component unmounted during initialization'
          );
          return;
        }

        // Build layout configuration based on preset or custom layout
        let layoutConfig = layout;
        if (typeof layout === 'string') {
          if (layout === 'wheel-value') {
            layoutConfig = [
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
          } else if (layout === 'wheel-value-alpha') {
            layoutConfig = [
              {
                component: (iro as any).ui.Wheel,
                options: {}
              },
              {
                component: (iro as any).ui.Slider,
                options: {
                  sliderType: 'value'
                }
              },
              {
                component: (iro as any).ui.Slider,
                options: {
                  sliderType: 'alpha'
                }
              }
            ];
          }
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
          layout: layoutConfig,
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
          setIsLoading(false);

          // Force update of imperative handle by calling onMount callback
          if (onMount) {
            setTimeout(() => onMount(colorPickerRef.current), 0);
          }
        } catch (error) {
          setIsLoading(false);
          colorPickerRef.current = null;
          return null; // Return null to indicate failure
        }

        // Apply theme styles to iro.js elements after creation
        // iro.js uses DIV elements with inline backgrounds, not SVG rects
        const applyThemeStyles = () => {
          if (!containerRef.current) return;

          // Target the main iro containers including IroColorPicker wrapper
          const pickers =
            containerRef.current.querySelectorAll('.IroColorPicker');
          const wheels = containerRef.current.querySelectorAll('.IroWheel');
          const sliders = containerRef.current.querySelectorAll('.IroSlider');
          const boxes = containerRef.current.querySelectorAll('.IroBox');

          if (theme === 'light') {
            // Light theme - keep iro elements transparent so container bg shows
            pickers.forEach((el) => {
              (el as HTMLElement).style.setProperty(
                'background-color',
                'transparent',
                'important'
              );
            });
            wheels.forEach((el) => {
              (el as HTMLElement).style.setProperty(
                'background-color',
                'transparent',
                'important'
              );
            });
            sliders.forEach((el) => {
              (el as HTMLElement).style.setProperty(
                'background-color',
                'transparent',
                'important'
              );
            });
            boxes.forEach((el) => {
              (el as HTMLElement).style.setProperty(
                'background-color',
                'transparent',
                'important'
              );
            });
          } else {
            // Dark theme - transparent to let parent bg show
            pickers.forEach((el) => {
              (el as HTMLElement).style.setProperty(
                'background-color',
                'transparent',
                'important'
              );
            });
            wheels.forEach((el) => {
              (el as HTMLElement).style.setProperty(
                'background-color',
                'transparent',
                'important'
              );
            });
            sliders.forEach((el) => {
              (el as HTMLElement).style.setProperty(
                'background-color',
                'transparent',
                'important'
              );
            });
            boxes.forEach((el) => {
              (el as HTMLElement).style.setProperty(
                'background-color',
                'transparent',
                'important'
              );
            });
          }
        };

        // Apply styles immediately
        applyThemeStyles();

        // Use MutationObserver to reapply when iro.js modifies DOM
        const observer = new MutationObserver(() => {
          applyThemeStyles();
        });

        if (containerRef.current) {
          observer.observe(containerRef.current, {
            childList: true,
            subtree: true,
            attributes: true
          });
        }

        // Apply on timers as fallback
        setTimeout(applyThemeStyles, 50);
        setTimeout(applyThemeStyles, 200);
        setTimeout(applyThemeStyles, 500);

        // Set up event listeners BEFORE returning the cleanup function
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

        // Cleanup observer on unmount
        return () => observer.disconnect();
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
        onMount
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

      const cleanupFn = createWithRetry();

      return () => {
        if (cleanupFn) cleanupFn();
      };
    }, [width, theme, createColorPicker]);

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

      const cleanupFn = createWithRetry();

      return () => {
        if (cleanupFn) cleanupFn();
      };
    }, [containerWidth, theme, createColorPicker, width]);

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

    // Apply theme styles when theme changes without recreating picker
    useEffect(() => {
      if (!colorPickerRef.current || !containerRef.current) return;

      const applyThemeStyles = () => {
        if (!containerRef.current) return;

        const pickers =
          containerRef.current.querySelectorAll('.IroColorPicker');
        const wheels = containerRef.current.querySelectorAll('.IroWheel');
        const sliders = containerRef.current.querySelectorAll('.IroSlider');
        const boxes = containerRef.current.querySelectorAll('.IroBox');

        if (theme === 'light') {
          pickers.forEach((el) => {
            (el as HTMLElement).style.setProperty(
              'background-color',
              'transparent',
              'important'
            );
          });
          wheels.forEach((el) => {
            (el as HTMLElement).style.setProperty(
              'background-color',
              'transparent',
              'important'
            );
          });
          sliders.forEach((el) => {
            (el as HTMLElement).style.setProperty(
              'background-color',
              'transparent',
              'important'
            );
          });
          boxes.forEach((el) => {
            (el as HTMLElement).style.setProperty(
              'background-color',
              'transparent',
              'important'
            );
          });

          const borders =
            containerRef.current.querySelectorAll('.IroWheelBorder');
          borders.forEach((el) => {
            (el as HTMLElement).style.setProperty(
              'border-color',
              '#e5e7eb',
              'important'
            );
          });
        } else {
          // Dark theme - transparent to let parent bg show
          pickers.forEach((el) => {
            (el as HTMLElement).style.setProperty(
              'background-color',
              'transparent',
              'important'
            );
          });
          wheels.forEach((el) => {
            (el as HTMLElement).style.setProperty(
              'background-color',
              'transparent',
              'important'
            );
          });
          sliders.forEach((el) => {
            (el as HTMLElement).style.setProperty(
              'background-color',
              'transparent',
              'important'
            );
          });
          boxes.forEach((el) => {
            (el as HTMLElement).style.setProperty(
              'background-color',
              'transparent',
              'important'
            );
          });
        }
      };

      applyThemeStyles();
      const timer1 = setTimeout(applyThemeStyles, 50);
      const timer2 = setTimeout(applyThemeStyles, 150);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }, [theme]);

    return (
      <div
        ref={containerRef}
        style={{
          display: 'flex',
          width: '100%',
          maxWidth: '100%',
          minWidth: 0,
          overflow: 'hidden',
          justifyContent: 'center',
          minHeight: isLoading ? width || containerWidth : 'auto',
          position: 'relative',
          backgroundColor: 'transparent'
        }}
      >
        {isLoading && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'var(--colorpicker-panel-bg, #1e293b)'
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                border: '3px solid rgba(59, 130, 246, 0.3)',
                borderTop: '3px solid rgb(59, 130, 246)',
                borderRadius: '50%',
                animation: 'spin 0.8s linear infinite'
              }}
            />
          </div>
        )}
        {/* Iro.js will render the picker here */}
      </div>
    );
  }
);

IroColorPicker.displayName = 'IroColorPicker';

export default IroColorPicker;
