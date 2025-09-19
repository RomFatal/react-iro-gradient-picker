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
import { cn } from '../../../../utils/cn';

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
        setColor({
          ...color,
          stops: newStops,
          gradient: `${getGradient(
            color.type,
            newStops,
            color.modifier,
            format,
            showAlpha
          )}`
        });
      } else {
        // Handle the case where it's called with full color object
        setColor(newColor);
      }
    },
    [color, format, showAlpha]
  );

  const onChangeActiveColor = ({ hex, alpha }: TPropsChange) => {
    const newActiveColor = {
      ...activeColor,
      hex,
      alpha
    };
    setActiveColor(newActiveColor);

    // Update the gradient with the new active color
    const newStops = [...color.stops];
    const rgba = tinyColor(hex);
    rgba.setAlpha(alpha / 100);
    newStops[activeColor.index as number] = [
      rgba.toRgbString(),
      activeColor.loc
    ];

    updateGradient(newStops);
  };

  const [init, setInit] = useState(false);

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

  const iroColorValue = showAlpha
    ? `${activeColor.hex}${Math.round((activeColor.alpha / 100) * 255)
        .toString(16)
        .padStart(2, '0')}`
    : activeColor.hex;

  return (
    <div
      className={cn(
        'w-full p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700',
        'space-y-6 transition-all duration-200 hover:shadow-xl'
      )}
    >
      {/* Color Picker Container */}
      <div className='relative'>
        <div
          className='flex justify-center items-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-800 rounded-lg p-4'
          style={{ height: colorBoardHeight + 200 }}
        >
          <IroColorPicker
            width={Math.min(267, colorBoardHeight + 20)}
            color={iroColorValue}
            layout={[
              {
                component: (window as any).iro?.ui?.Wheel || 'wheel',
                options: {}
              },
              {
                component: (window as any).iro?.ui?.Slider || 'slider',
                options: {
                  sliderType: 'value'
                }
              },
              {
                component: (window as any).iro?.ui?.Slider || 'slider',
                options: {
                  sliderType: 'alpha'
                }
              }
            ]}
            onColorChange={handleIroColorChange}
          />
        </div>
      </div>

      {/* Input Controls */}
      {showInputs && (
        <div className='bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 border border-slate-200 dark:border-slate-600'>
          <InputRgba
            hex={activeColor.hex}
            alpha={activeColor.alpha}
            showAlpha={showAlpha}
            onChange={(value: { hex: string; alpha: number }) =>
              setActiveColor((prev) => ({
                ...prev,
                hex: value.hex,
                alpha: value.alpha
              }))
            }
            onSubmitChange={onSubmitChange}
          />
        </div>
      )}

      {/* Gradient Controls */}
      <div className='bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 border border-slate-200 dark:border-slate-600'>
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
