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
  currentValue?: string; // Current color/gradient value to mark as active
  size?: 'compact' | 'default' | 'large'; // Size variant based on container width
}

const DefaultColorPanel: FC<IProps> = ({
  defaultColors = [],
  setColor,
  setActiveColor,
  setInit,
  colorType,
  currentValue,
  size = 'default'
}) => {
  const [active, setActive] = useState<number>(-1);
  const [formatedDefColors, setFormatedDefColors] = useState<
    Array<string | IColor>
  >([]);

  useEffect(() => {
    if (colorType === 'gradient') {
      const validGradients = checkValidColorsArray(defaultColors, 'grad');

      // For popular colors display, create minimal IColor objects using original CSS strings
      // This avoids complex parsing issues while still providing functional display
      const displayGradients = validGradients.map((gradientString: string) => {
        return {
          gradient: gradientString, // Use the original CSS string directly for display
          type: gradientString.startsWith('radial-') ? 'radial' : 'linear',
          modifier: 180, // Default value, not critical for display
          stops: [
            // Dummy stops that help identify display objects in onChooseColor
            ['rgba(255, 0, 0, 1)', 0, 0],
            ['rgba(0, 255, 0, 1)', 1, 1]
          ]
        };
      });

      setFormatedDefColors(displayGradients);

      // Set initial active state if currentValue matches a gradient
      if (currentValue) {
        const matchIndex = validGradients.findIndex(
          (grad: string) => grad === currentValue
        );
        if (matchIndex !== -1) {
          setActive(matchIndex);
        }
      }
    } else {
      const solidColors = checkValidColorsArray(defaultColors, 'solid');
      setFormatedDefColors(solidColors);

      // Set initial active state if currentValue matches a solid color
      if (currentValue) {
        const matchIndex = solidColors.findIndex(
          (color: string) => color.toLowerCase() === currentValue.toLowerCase()
        );
        if (matchIndex !== -1) {
          setActive(matchIndex);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentValue]);

  const onChooseColor = (item: string | IColor, index: number) => {
    // Allow re-applying the same color (removed guard clause that prevented this)
    // This enables users to reset back to a popular color after making changes

    if (colorType === 'gradient' && typeof item !== 'string') {
      // If this is a simplified display object (identified by dummy stops), parse the gradient properly
      if (
        item.stops.length === 2 &&
        item.stops[0][0] === 'rgba(255, 0, 0, 1)'
      ) {
        try {
          const properlyParsed = parseGradient(item.gradient);
          if (
            properlyParsed &&
            properlyParsed.stops &&
            properlyParsed.stops.length > 0
          ) {
            const { stops } = properlyParsed;
            const lastStop = rgbaToArray(stops[stops.length - 1][0]);
            const lastStopLoc = stops[stops.length - 1][1];
            const activeStop = rgbaToHex([
              lastStop[0],
              lastStop[1],
              lastStop[2]
            ]);
            const activeIdx = stops[stops.length - 1][2];

            setInit(false);
            setColor(properlyParsed);
            setActiveColor &&
              setActiveColor({
                hex: activeStop,
                alpha: Number(Math.round(lastStop[3] * 100)),
                loc: lastStopLoc,
                index: activeIdx
              });
            setActive(index);
            return;
          }
        } catch (error) {
          console.warn(
            'Failed to parse popular gradient on click:',
            item.gradient,
            error
          );
        }
      }

      // Normal gradient object processing (fallback)
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

  // Determine sizing classes based on size prop
  const sizeClasses = {
    compact: { button: 'w-8 h-8', gap: 'gap-1.5' },
    default: { button: 'w-10 h-10', gap: 'gap-4' },
    large: { button: 'w-12 h-12', gap: 'gap-5' }
  };

  const { button: buttonSize, gap: gapSize } = sizeClasses[size];

  return (
    <div className='w-full'>
      <h3 className='text-sm font-medium colorpicker-text'>Popular Colors</h3>
      <div className={cn('grid grid-cols-5 py-4', gapSize)}>
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
                      'aspect-square rounded-md border-2 transition-all duration-200',
                      buttonSize,
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
                      'aspect-square rounded-md border-2 transition-all duration-200',
                      buttonSize,
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
