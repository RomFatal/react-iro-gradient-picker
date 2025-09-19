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
            labelText,
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
                {labelSymbol && (
                  <label
                    htmlFor='rgba-hex'
                    className='absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400 text-sm font-medium z-10'
                  >
                    #
                  </label>
                )}
                {name === 'alpha' && (
                  <label
                    htmlFor={idInput}
                    className='absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400 text-sm font-medium z-10'
                  >
                    %
                  </label>
                )}
                <input
                  type='text'
                  id={idInput}
                  value={valueInput}
                  aria-label={labelArea}
                  onChange={(e) => onChangeInput(e)}
                  onBlur={onHandleSubmit}
                  onKeyPress={(e) => handlePressEnter(e, onHandleSubmit)}
                  className={cn(
                    'w-full px-3 py-2.5 text-sm font-mono',
                    'bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg',
                    'text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500',
                    'focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20',
                    'transition-all duration-200',
                    'hover:border-slate-400 dark:hover:border-slate-500',
                    labelSymbol && 'pl-7',
                    name === 'alpha' && 'pr-7'
                  )}
                />
                <div className='mt-1 text-xs font-medium text-slate-600 dark:text-slate-400 text-center'>
                  {labelText}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InputRgba;
