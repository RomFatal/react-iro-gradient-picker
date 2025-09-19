import React, { FC, useEffect, useRef, useState } from 'react';
import tinycolor from 'tinycolor2';
import iro from '@jaames/iro';

import { InputRgba } from '../../../forms';
import DefaultColorsPanel from '../DefaultColorPanel';
import IroColorPicker from '../../IroColorPicker';

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
  colorBoardHeight = 120,
  defaultColors
}) => {
  const node = useRef<HTMLDivElement | null>(null);
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

      onChange?.(
        checkFormat(rgba.toRgbString(), format, showAlpha, debounceColor.alpha)
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceColor]);

  useEffect(() => {
    setColor(getHexAlpha(value));
  }, [value]);

  const handleColorChange = (iroColor: any) => {
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

  const iroColorValue = showAlpha
    ? `${color.hex}${Math.round((color.alpha / 100) * 255)
        .toString(16)
        .padStart(2, '0')}`
    : color.hex;

  return (
    <div ref={node} className='colorpicker'>
      <div style={{ height: colorBoardHeight + 60 }}>
        <IroColorPicker
          width={Math.min(267, colorBoardHeight + 20)}
          color={iroColorValue}
          layout={[
            {
              component: (iro as any).ui.Wheel,
              options: {}
            },
            {
              component: (iro as any).ui.Slider,
              options: {
                sliderType: 'alpha'
              }
            }
          ]}
          onColorChange={handleColorChange}
        />
      </div>
      {showInputs && (
        <InputRgba
          hex={color.hex}
          alpha={color.alpha}
          format={format}
          showAlpha={showAlpha}
          onChange={handleInputChange}
          onSubmitChange={handleInputSubmit}
        />
      )}
      <DefaultColorsPanel
        defaultColors={defaultColors}
        setColor={setColor}
        setInit={setInit}
        colorType='solid'
      />
    </div>
  );
};

export default IroSolidColorPicker;
