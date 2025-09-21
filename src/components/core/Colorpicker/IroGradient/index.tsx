import iro from '@jaames/iro';
import React, { FC, useCallback, useEffect, useState } from 'react';
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

  useEffect(() => {
    if (debounce && debounceColor) {
      onChange?.(debounceColor.gradient);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceColor]);

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

  const handleIroColorChange = (iroColor: any) => {
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
      className='w-full p-6 rounded-xl shadow-lg space-y-6 transition-all duration-200 hover:shadow-xl'
      style={{
        backgroundColor: 'var(--colorpicker-panel-bg)',
        borderColor: 'var(--colorpicker-border)',
        borderWidth: '1px',
        borderStyle: 'solid'
      }}
    >
      {/* Color Picker Container */}
      <div className='relative'>
        <div
          className='flex justify-center items-center rounded-lg'
          style={{
            height: colorBoardHeight + 200,
            backgroundColor: 'var(--colorpicker-input-bg)',
            borderColor: 'var(--colorpicker-border)',
            borderWidth: '1px',
            borderStyle: 'solid'
          }}
        >
          <IroColorPicker
            color={iroColorValue}
            layout={layoutConfig}
            onColorChange={handleIroColorChange}
          />
        </div>
      </div>

      {/* Input Controls */}
      {showInputs && (
        <div
          className='rounded-lg p-4'
          style={{
            backgroundColor: 'var(--colorpicker-input-bg)',
            borderColor: 'var(--colorpicker-border)',
            borderWidth: '1px',
            borderStyle: 'solid'
          }}
        >
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

      {/* Gradient Controls */}
      <div
        className='rounded-lg p-4'
        style={{
          backgroundColor: 'var(--colorpicker-input-bg)',
          borderColor: 'var(--colorpicker-border)',
          borderWidth: '1px',
          borderStyle: 'solid'
        }}
      >
        <GradientPanel
          color={color}
          activeColor={activeColor}
          setActiveColor={setActiveColor}
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
      <div className='border-t border-slate-200 dark:border-slate-600 pt-4'>
        <DefaultColorsPanel
          defaultColors={defaultColors}
          setColor={(newColor) => {
            setColor(newColor);
            if (newColor?.stops) {
              const lastStop = rgbaToArray(
                newColor.stops[newColor.stops.length - 1][0]
              );
              const activeStop = rgbaToHex([
                lastStop[0],
                lastStop[1],
                lastStop[2]
              ]);
              setActiveColor({
                hex: activeStop,
                alpha: Math.round(lastStop[3] * 100),
                loc: newColor.stops[newColor.stops.length - 1][1],
                index: newColor.stops.length - 1
              });
            }
          }}
          setInit={() => {}}
          setActiveColor={setActiveColor}
          colorType='gradient'
        />
      </div>
    </div>
  );
};

export default IroGradient;
