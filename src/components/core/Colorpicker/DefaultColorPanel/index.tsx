/* eslint no-case-declarations: off */
import React, { FC, useEffect, useState } from 'react';

import {
  getHexAlpha,
  parseGradient,
  rgbaToArray,
  rgbaToHex
} from '../../../../utils';
import { cn } from '../../../../utils/cn';
import { checkValidColorsArray } from '../../Colorpicker/helper';

import { IActiveColor } from '../../../../lib/types';
import { IColor } from '../GradientPanel/types';

interface IProps {
  defaultColors?: Array<string>;
  setColor: (color: any) => void;
  setInit: (init: boolean) => void;
  setActiveColor?: (color: IActiveColor) => void;
  colorType: 'solid' | 'gradient';
}

const DefaultColorPanel: FC<IProps> = ({
  defaultColors = [],
  setColor,
  setActiveColor,
  setInit,
  colorType
}) => {
  const [active, setActive] = useState<number>(-1);
  const [formatedDefColors, setFormatedDefColors] = useState<
    Array<string | IColor>
  >([]);

  useEffect(() => {
    if (colorType === 'gradient') {
      setFormatedDefColors(
        checkValidColorsArray(defaultColors, 'grad').map((item: string) => {
          return parseGradient(item);
        })
      );
    } else {
      setFormatedDefColors(checkValidColorsArray(defaultColors, 'solid'));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChooseColor = (item: string | IColor, index: number) => {
    if (index === active) {
      return;
    }

    if (colorType === 'gradient' && typeof item !== 'string') {
      const { stops } = item;
      const lastStop = rgbaToArray(stops[stops.length - 1][0]);
      const lastStopLoc = stops[stops.length - 1][1];
      const activeStop = rgbaToHex([lastStop[0], lastStop[1], lastStop[2]]);
      const activeIdx = stops[stops.length - 1][2];

      setInit(false);

      setColor(item);
      setActiveColor &&
        setActiveColor({
          hex: activeStop,
          alpha: Number(Math.round(lastStop[3] * 100)),
          loc: lastStopLoc,
          index: activeIdx
        });
      setActive(index);
    } else if (colorType !== 'gradient' && typeof item === 'string') {
      setInit(false);
      setColor(getHexAlpha(item));
      setActive(index);
    }
  };

  if (!Array.isArray(defaultColors) || !defaultColors.length) {
    return null;
  }

  return (
    <div className='w-full'>
      <h3 className='text-sm font-medium colorpicker-text'>Popular Colors</h3>
      <div className='grid grid-cols-5 gap-4 py-4'>
        {formatedDefColors.map((item: string | IColor, index: number) => {
          switch (colorType) {
            case 'gradient':
              if (typeof item !== 'string') {
                const { gradient } = item;

                return (
                  <button
                    type='button'
                    onClick={() => onChooseColor(item, index)}
                    key={item.gradient + index}
                    className={cn(
                      'aspect-square w-10 h-10 rounded-md border-2 transition-all duration-200',
                      'hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50',
                      'relative overflow-hidden group',
                      active === index
                        ? 'border-blue-500 dark:border-blue-400 shadow-lg scale-105'
                        : 'border-slate-200 dark:border-slate-600 hover:border-slate-300 dark:hover:border-slate-500'
                    )}
                    style={{ background: gradient }}
                  >
                    <div className='absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200'></div>
                  </button>
                );
              } else {
                return null;
              }

            case 'solid':
              if (typeof item === 'string') {
                return (
                  <button
                    type='button'
                    onClick={() => onChooseColor(item, index)}
                    key={item + index}
                    className={cn(
                      'aspect-square w-10 h-10 rounded-md border-2 transition-all duration-200',
                      'hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50',
                      'relative overflow-hidden group',
                      active === index
                        ? 'border-blue-500 dark:border-blue-400 shadow-lg scale-105'
                        : 'border-slate-200 dark:border-slate-600 hover:border-slate-300 dark:hover:border-slate-500'
                    )}
                    style={{
                      background: item,
                      boxShadow:
                        active === index ? `${item} 0px 0px 12px` : 'none'
                    }}
                  >
                    <div className='absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200'></div>
                  </button>
                );
              } else {
                return null;
              }

            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};

export default DefaultColorPanel;
