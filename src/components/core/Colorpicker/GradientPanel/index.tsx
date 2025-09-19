import React, {
  FC,
  memo,
  MouseEvent,
  MutableRefObject,
  TouchEvent,
  useEffect,
  useRef,
  useState
} from 'react';

import Markers from './Markers';

import { getGradient } from '../../../../utils';
import { cn } from '../../../../utils/cn';
import { arraysEqual, shallowEqual } from '../helper';

import { RADIALS_POS } from '../../../../constants';
import { IPropsPanel, TCoords } from './types';

const GradientPanel: FC<IPropsPanel> = ({
  color,
  setColor,
  activeColor,
  setActiveColor,
  setInit,
  format = 'rgb',
  showAlpha = true,
  showGradientResult = true,
  showGradientStops = true,
  showGradientMode = true,
  showGradientAngle = true,
  showGradientPosition = true,
  allowAddGradientStops = true
}) => {
  const angleNode = useRef() as MutableRefObject<HTMLDivElement>;

  const { stops, gradient, type, modifier } = color;

  const [radialsPosition, setRadialPosition] = useState(RADIALS_POS);

  const onClickMode = () => {
    setInit(false);
    switch (type) {
      case 'linear': {
        const activePos = radialsPosition.find((item) => item.active);
        setColor({
          ...color,
          modifier: activePos?.css || modifier,
          gradient: `${getGradient(
            'radial',
            stops,
            activePos?.css || modifier,
            format,
            showAlpha
          )}`,
          type: 'radial'
        });
        break;
      }

      case 'radial': {
        setColor({
          ...color,
          gradient: `${getGradient('linear', stops, 180, format, showAlpha)}`,
          type: 'linear'
        });
        break;
      }

      default: {
        break;
      }
    }
  };

  const setActiveRadialPosition = (e: MouseEvent) => {
    setInit(false);
    const target = e.target as HTMLElement;
    const pos = target.getAttribute('data-pos');
    const newRadialsPosition = radialsPosition.map((item) => {
      if (item.pos === pos) {
        return {
          ...item,
          active: true
        };
      }

      return {
        ...item,
        active: false
      };
    });

    setRadialPosition(newRadialsPosition);

    const activePos = newRadialsPosition.find((item) => item.active);
    setColor({
      ...color,
      modifier: activePos?.css || modifier,
      gradient: `${getGradient(
        'radial',
        stops,
        activePos?.css || modifier,
        format,
        showAlpha
      )}`
    });
  };

  const removeListeners = () => {
    window.removeEventListener('mousemove', onDrag);
    window.removeEventListener('mouseup', onDragEnd);
  };

  const removeTouchListeners = () => {
    window.removeEventListener('touchmove', onTouchMove);
    window.removeEventListener('touchend', onTouchEnd);
  };

  const onMouseDown = (e: any) => {
    e.preventDefault();

    setInit(false);

    if (e.button !== 0) return;

    const x = e.clientX;
    const y = e.clientY;
    const shiftKey = e.shiftKey;
    const ctrlKey = e.ctrlKey * 2;

    if (e.target.className !== 'gradient-mode' && type === 'linear') {
      pointMoveTo({
        x,
        y,
        shiftKey,
        ctrlKey
      });

      window.addEventListener('mousemove', onDrag);
      window.addEventListener('mouseup', onDragEnd);
    }
  };

  const onDrag = (e: any) => {
    const x = e.clientX;
    const y = e.clientY;
    const shiftKey = e.shiftKey;
    const ctrlKey = e.ctrlKey * 2;

    pointMoveTo({
      x,
      y,
      shiftKey,
      ctrlKey
    });
  };

  const onDragEnd = (e: any) => {
    const x = e.clientX;
    const y = e.clientY;
    const shiftKey = e.shiftKey;
    const ctrlKey = e.ctrlKey * 2;

    pointMoveTo({
      x,
      y,
      shiftKey,
      ctrlKey
    });

    removeListeners();
  };

  const onTouchStart = (e: TouchEvent) => {
    setInit(false);

    if (e.cancelable) {
      e.preventDefault();
    }

    if (e.touches.length !== 1) {
      return;
    }

    removeTouchListeners();

    const x = e.targetTouches[0].clientX;
    const y = e.targetTouches[0].clientY;
    const shiftKey = false;
    const ctrlKey = 0;

    pointMoveTo({ x, y, shiftKey, ctrlKey });

    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('touchend', onTouchEnd, { passive: false });
  };

  const onTouchMove = (e: any) => {
    if (e.cancelable) {
      e.preventDefault();
    }

    const x = e.targetTouches[0].clientX;
    const y = e.targetTouches[0].clientY;
    const shiftKey = false;
    const ctrlKey = 0;

    pointMoveTo({
      x,
      y,
      shiftKey,
      ctrlKey
    });
  };

  const onTouchEnd = () => {
    removeTouchListeners();
  };

  const pointMoveTo = (coords: TCoords) => {
    const rect = angleNode && angleNode.current.getBoundingClientRect();

    const boxcx = rect.left + rect.width / 2;
    const boxcy = rect.top + rect.height / 2;
    const radians = Math.atan2(coords.x - boxcx, coords.y - boxcy) - Math.PI;
    const degrees = Math.abs((radians * 180) / Math.PI);

    const div = [1, 2, 4][Number(coords.shiftKey || coords.ctrlKey)];
    const newAngle = degrees - (degrees % (45 / div));

    setColor({
      ...color,
      gradient: `${getGradient(type, stops, newAngle, format, showAlpha)}`,
      modifier: newAngle
    });
  };

  useEffect(() => {
    return () => {
      removeListeners();
      removeTouchListeners();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (type === 'radial') {
      const activePos = radialsPosition.find((item) => item.css === modifier);
      setColor({
        ...color,
        modifier: activePos?.css || modifier,
        gradient: `${getGradient(
          'radial',
          stops,
          activePos?.css || modifier,
          format,
          showAlpha
        )}`
      });

      setRadialPosition(
        RADIALS_POS.map((item) => {
          if (item.css === modifier) {
            return {
              ...item,
              active: true
            };
          }

          return {
            ...item,
            active: false
          };
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modifier]);

  return (
    <div className='w-full space-y-4'>
      {showGradientResult && (
        <div className='relative'>
          <h3 className='text-sm font-medium text-slate-700 dark:text-slate-300 mb-2'>
            Gradient Preview
          </h3>
          <div
            className={cn(
              'relative h-16 rounded-lg border-2 border-slate-200 dark:border-slate-600',
              'overflow-hidden cursor-pointer group transition-all duration-200',
              'hover:border-slate-300 dark:hover:border-slate-500 hover:shadow-md'
            )}
            onMouseDown={showGradientAngle ? onMouseDown : undefined}
            onTouchStart={showGradientAngle ? onTouchStart : undefined}
            style={{ background: gradient }}
          >
            {showGradientMode && (
              <button
                type='button'
                data-mode={type}
                className={cn(
                  'absolute top-2 right-2 w-8 h-8 rounded-full',
                  'bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm',
                  'border border-slate-300 dark:border-slate-600',
                  'hover:bg-white dark:hover:bg-slate-800 transition-all duration-200',
                  'flex items-center justify-center text-xs font-medium',
                  'focus:outline-none focus:ring-2 focus:ring-blue-500/50'
                )}
                onClick={() => onClickMode()}
              >
                {type === 'linear' ? 'L' : 'R'}
              </button>
            )}
            {showGradientAngle && (
              <div
                className={cn(
                  'absolute top-2 left-2 w-6 h-6 pointer-events-none',
                  type === 'linear' ? 'opacity-100' : 'opacity-0'
                )}
                ref={angleNode}
              >
                <div
                  className='w-full h-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full border border-slate-300 dark:border-slate-600'
                  style={{
                    transform: `rotate(${
                      typeof modifier === 'number'
                        ? modifier - 90 + 'deg'
                        : modifier
                    })`
                  }}
                ></div>
              </div>
            )}
            {showGradientPosition && (
              <div
                className={cn(
                  'absolute top-2 left-1/2 -translate-x-1/2 flex gap-1',
                  type === 'radial' ? 'opacity-100' : 'opacity-0',
                  'transition-opacity duration-200'
                )}
              >
                {radialsPosition.map((item) => {
                  return (
                    <button
                      key={item.pos}
                      type='button'
                      data-pos={item.pos}
                      className={cn(
                        'w-2 h-2 rounded-full border transition-all duration-200',
                        item.active
                          ? 'bg-white border-slate-400 scale-125'
                          : 'bg-white/60 border-slate-300 hover:bg-white/80'
                      )}
                      onClick={(e) => setActiveRadialPosition(e)}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
      {showGradientStops && (
        <div>
          <h3 className='text-sm font-medium text-slate-700 dark:text-slate-300 mb-2'>
            Gradient Stops
          </h3>
          <Markers
            color={color}
            setColor={setColor}
            activeColor={activeColor}
            setActiveColor={setActiveColor}
            setInit={setInit}
            format={format}
            showAlpha={showAlpha}
            allowAddGradientStops={allowAddGradientStops}
          />
        </div>
      )}
    </div>
  );
};

const arePropsEqual = (prevProps: any, nextProps: any) => {
  if (
    arraysEqual(prevProps.color.stops, nextProps.color.stops) &&
    prevProps.color.modifier === nextProps.color.modifier &&
    prevProps.color.type === nextProps.color.type &&
    shallowEqual(prevProps.activeColor, nextProps.activeColor)
  ) {
    return true;
  }

  return false;
};

export default memo(GradientPanel, arePropsEqual);
