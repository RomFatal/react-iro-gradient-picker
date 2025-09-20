import React, { FC, MutableRefObject, useRef } from 'react';

import { TPropsMain } from './types';

const Panel: FC<TPropsMain> = ({ className }) => {
  const node = useRef() as MutableRefObject<HTMLDivElement>;

  return (
    <div
      ref={node}
      className={['color-picker-panel', className].join(' ')}
      tabIndex={0}
    >
      <div className='color-picker-panel-inner'></div>
    </div>
  );
};

export default Panel;
