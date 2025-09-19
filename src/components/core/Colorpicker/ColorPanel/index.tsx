import React, {
  FC,
  MutableRefObject,
  useEffect,
  useRef,
  useState
} from 'react';


import type { ITinyColor } from '../../../../utils/color';
import { TinyColor } from '../../../../utils/color';
import { TPropsMain } from './types';

const Panel: FC<TPropsMain> = ({
  alpha,
  className,
  hex,
  colorBoardHeight,
  showAlpha,
  onChange
}) => {
  const node = useRef() as MutableRefObject<HTMLDivElement>;

  const colorConvert = new TinyColor(hex) as ITinyColor;
  colorConvert.alpha = alpha;
  const [state, setState] = useState({
    color: colorConvert,
    alpha
  });
  const [change, setChange] = useState(false);

  useEffect(() => {
    if (!change) {
      setState({
        color: colorConvert,
        alpha
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hex, alpha]);

  const handleAlphaChange = (alpha: number) => {
    setChange(true);
    const { color } = state;
    color.alpha = alpha;

    setState({
      color,
      alpha
    });
    onChange({
      hex: color.toHexString(),
      alpha
    });
  };

  const handleChange = (color: ITinyColor) => {
    setChange(true);
    const { alpha } = state;
    color.alpha = alpha;

    setState({ ...state, color, alpha: color.alpha });
    onChange({
      hex: color.toHexString(),
      alpha: color.alpha
    });
  };

  return (
    <div
      ref={node}
      className={['color-picker-panel', className].join(' ')}
      tabIndex={0}
    >
      <div className='color-picker-panel-inner'>

      </div>
    </div>
  );
};

export default Panel;
