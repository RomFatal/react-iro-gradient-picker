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
      borderWidth = 0,
      borderColor = '#ffffff',
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

    // Set up ResizeObserver to make the color picker responsive
    useEffect(() => {
      if (!containerRef.current || width) return; // Don't observe if width is fixed

      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const { width: observedWidth } = entry.contentRect;
          if (observedWidth > 0) {
            // Use 35% of available width to make it much more compact
            const calculatedWidth = Math.floor(observedWidth * 0.35);
            setContainerWidth(Math.max(160, Math.min(calculatedWidth, 200)));
          }
        }
      });

      resizeObserver.observe(containerRef.current);

      return () => {
        resizeObserver.disconnect();
      };
    }, [width, padding, margin]);

    useImperativeHandle(ref, () => ({
      colorPicker: colorPickerRef.current
    }));

    useEffect(() => {
      if (!containerRef.current || colorPickerRef.current) {
        // Clear existing picker to force recreation
        if (colorPickerRef.current) {
          colorPickerRef.current = null;
        }
      }

      if (!containerRef.current || colorPickerRef.current) return;

      // Set theme-appropriate border color and background
      const themeBorderColor = theme === 'light' ? '#ffffff' : '#334155';
      const themeBorderWidth = theme === 'light' ? 1 : 0;

      const options: any = {
        width: width || containerWidth,
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
        handleProps,
        wheelLightness,
        wheelAngle,
        wheelDirection,
        sliderSize,
        boxHeight
      };

      // Remove undefined values
      Object.keys(options).forEach((key) => {
        if (options[key] === undefined) {
          delete options[key];
        }
      });

      colorPickerRef.current = new (iro as any).ColorPicker(
        containerRef.current,
        options
      );

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

      return () => {
        if (colorPickerRef.current) {
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
        }
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [theme, containerWidth]); // Add containerWidth dependency to recreate picker on size change

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
          overflow: 'hidden',
          justifyContent: 'center'
        }}
      />
    );
  }
);

IroColorPicker.displayName = 'IroColorPicker';

export default IroColorPicker;
