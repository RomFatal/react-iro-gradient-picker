import React, { FC, useEffect, useState } from 'react';
import './_picker.scss';

import ReactGPickerComp from '../../../src/components/core/Colorpicker';
import { IPropsMain } from '../../../src/lib/types/types';

const ReactGPicker: FC<IPropsMain> = ({
  value,
  format,
  gradient,
  solid,
  debounceMS,
  debounce,
  showAlpha,
  popupWidth,
  colorBoardHeight,
  defaultColors,
  onChange
}) => {
  const [color, setColor] = useState(value);
  const onChangeColor = (value: string) => setColor(value);

  useEffect(() => {
    setColor(value);
  }, [value]);

  return (
    <div className='wrapper' style={{ background: color, height: 'auto', minHeight: 'auto' }}>
      <div className='centered'>
        <ReactGPickerComp
          value={color}
          gradient={gradient}
          format={format}
          solid={solid}
          debounceMS={debounceMS}
          debounce={debounce}
          showAlpha={showAlpha}
          popupWidth={popupWidth}
          colorBoardHeight={colorBoardHeight}
          defaultColors={defaultColors}
          onChange={(value) => {
            onChangeColor(value);
            onChange?.(value);
          }}
        />
      </div>
    </div>
  );
};

export default ReactGPicker;
