import React, { FC, useEffect, useState } from 'react';
import tinycolor from 'tinycolor2';

import { checkFormat } from '../../../utils';
import { cn } from '../../../utils/cn';
import { getAlphaValue, handlePressEnter, inputsData } from './helpers';

interface IChange {
  hex: string;
  alpha: number;
}

type TProps = {
  hex: string;
  alpha: number;
  format?: 'rgb' | 'hsl' | 'hex';
  showAlpha?: boolean;
  onChange: ({ hex, alpha }: IChange) => void;
  onSubmitChange?: (rgba: string) => void;
};

const InputRgba: FC<TProps> = ({
  hex,
  alpha,
  format = 'rgb',
  showAlpha = true,
  onChange,
  onSubmitChange
}) => {
  const [color, setColor] = useState({
    alpha,
    hex
  });

  const onChangeAlpha = (alpha: string) => {
    const validAlpha = getAlphaValue(alpha);

    setColor({
      ...color,
      alpha: Number(validAlpha)
    });
  };

  const onChangeHex = (hex: string) => {
    setColor({
      ...color,
      hex
    });
  };

  const onHandleSubmit = () => {
    const rgba = tinycolor(color.hex[0] === '#' ? color.hex : '#' + color.hex);
    rgba.setAlpha(Number(color.alpha) / 100);

    if (rgba && (color.alpha !== alpha || color.hex !== hex)) {
      onChange({
        hex: color.hex[0] === '#' ? color.hex : '#' + color.hex,
        alpha: Number(color.alpha)
      });
      if (onSubmitChange) {
        onSubmitChange(
          checkFormat(rgba.toRgbString(), format, showAlpha, color.alpha)
        );
      }
    } else {
      setColor({
        hex,
        alpha
      });
      onChange({
        hex,
        alpha
      });
    }
  };

  useEffect(() => {
    setColor({
      hex,
      alpha
    });
  }, [hex, alpha]);

  const inputsProps = {
    alphaValue: color.alpha,
    hexValue: color.hex.replace(/#/i, ''),
    onChangeAlpha,
    onChangeHex,
    showAlpha
  };

  return (
    <div className='w-full'>
      <div className='flex flex-wrap gap-3'>
        {inputsData(inputsProps).map((item, index) => {
          const {
            wrapClass,
            labelSymbol,
            idInput,
            valueInput,
            labelArea,
            onChangeInput,
            name
          } = item;
          return (
            <div
              key={index}
              className={cn('flex-1 min-w-0', 'relative group', wrapClass)}
            >
              <div className='relative'>
                <input
                  type='text'
                  id={idInput}
                  value={`#${valueInput}`}
                  aria-label={labelArea}
                  onChange={(e) => onChangeInput(e)}
                  onBlur={onHandleSubmit}
                  onKeyPress={(e) => handlePressEnter(e, onHandleSubmit)}
                  className={cn(
                    'w-full py-2.5 text-md font-mono rounded-lg',
                    'focus:ring-2 focus:ring-blue-500/20 transition-all duration-200',
                    labelSymbol && 'pl-4',
                    name === 'alpha' && 'pr-7'
                  )}
                  style={{
                    backgroundColor: 'var(--colorpicker-input-bg)',
                    color: 'var(--colorpicker-text)',
                    border: 'none',
                    borderWidth: '0',
                    borderStyle: 'none',
                    outline: 'none'
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InputRgba;
