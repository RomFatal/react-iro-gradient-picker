import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef
} from 'react';
import iro from '@jaames/iro';

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
      width = 280,
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
    const containerRef = useRef<HTMLDivElement>(null);
    const colorPickerRef = useRef<any>(null);

    useImperativeHandle(ref, () => ({
      colorPicker: colorPickerRef.current
    }));

    useEffect(() => {
      if (!containerRef.current || colorPickerRef.current) return;

      const options: any = {
        width,
        color: colors ? undefined : color,
        colors: colors || undefined,
        display,
        id,
        layout,
        layoutDirection,
        padding,
        margin,
        borderWidth,
        borderColor,
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

      // Set up event listeners
      if (onColorChange) {
        colorPickerRef.current.on('color:change', onColorChange);
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
    }, []);

    // Update color when prop changes
    useEffect(() => {
      if (colorPickerRef.current && !colors) {
        colorPickerRef.current.color.hexString = color;
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

    return <div ref={containerRef} style={{ display }} />;
  }
);

IroColorPicker.displayName = 'IroColorPicker';

export default IroColorPicker;
