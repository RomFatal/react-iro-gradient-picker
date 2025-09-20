import iro from '@jaames/iro';
import React, { FC, useEffect, useRef, useState } from 'react';
import tinycolor from 'tinycolor2';

import { InputRgba } from '../../../forms';
import IroColorPicker from '../../IroColorPicker';
import DefaultColorsPanel from '../DefaultColorPanel';

import { useDebounce } from '../../../../hooks';
import { checkFormat, getHexAlpha } from '../../../../utils';
import { cn } from '../../../../utils/cn';

import { IPropsComp, TPropsChange } from '../../../../lib/types';

const IroSolidColorPicker: FC<IPropsComp> = ({
  value = '#ffffff',
  onChange = () => ({}),
  format = 'rgb',
  debounceMS = 300,
  debounce = true,
  showAlpha = true,
  showInputs = true,
  colorBoardHeight = 120,
  defaultColors
}) => {
  const node = useRef<HTMLDivElement | null>(null);
  const colorPickerRef = useRef<any>(null);
  const [init, setInit] = useState<boolean>(true);
  const [color, setColor] = useState(getHexAlpha(value));

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
    if (colorPickerRef.current && !init) {
      const newIroColor = showAlpha
        ? {
            r: parseInt(getHexAlpha(value).hex.slice(1, 3), 16),
            g: parseInt(getHexAlpha(value).hex.slice(3, 5), 16),
            b: parseInt(getHexAlpha(value).hex.slice(5, 7), 16),
            a: getHexAlpha(value).alpha / 100
          }
        : getHexAlpha(value).hex;
      colorPickerRef.current.color = newIroColor;
    }
  }, [value, showAlpha, init]);

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
            ref={colorPickerRef}
            width={Math.min(267, colorBoardHeight + 20)}
            color={iroColorValue}
            layout={layoutConfig}
            onColorChange={handleColorChange}
          />
        </div>
      </div>

      {/* Input Controls */}
      {showInputs && (
        <div className='bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 border border-slate-200 dark:border-slate-600'>
          <InputRgba
            hex={color.hex}
            alpha={color.alpha}
            format={format}
            showAlpha={showAlpha}
            onChange={handleInputChange}
            onSubmitChange={handleInputSubmit}
          />
        </div>
      )}

      {/* Color Palette */}
      <div className='border-t border-slate-200 dark:border-slate-600 pt-4'>
        <DefaultColorsPanel
          defaultColors={defaultColors}
          setColor={setColor}
          setInit={setInit}
          colorType='solid'
        />
      </div>
    </div>
  );
};

export default IroSolidColorPicker;
