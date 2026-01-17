import { ReactText } from 'react';

// Gradient stop interface with flexible typing
export interface IGradientStop {
  color: string;
  position: number; // 0-100 (percentage)
}

// Flexible gradient stop that can handle different position formats
export interface IFlexibleGradientStop {
  color: string;
  position?: number | string; // Can be number (0-100) or string ("50%", "50px")
}

// Enhanced gradient data interface - strict typing
export interface IGradientData {
  type: 'linear' | 'radial';
  angle?: number; // For linear gradients (0-360 degrees)
  stops: IGradientStop[];
  defaultActiveTab?: 'gradient';
}

// Flexible gradient data interface - loose typing
export interface IFlexibleGradientData {
  type?: 'linear' | 'radial' | string;
  angle?: number | string;
  stops: IFlexibleGradientStop[];
  direction?: string; // Alternative to angle (e.g., "to right", "45deg")
  position?: string; // For radial gradients (e.g., "center", "top left")
}

// Enhanced value prop that supports multiple formats
export type TValueProp =
  | string // CSS gradient string
  | IGradientData // Strict typed gradient object
  | IFlexibleGradientData; // Flexible typed gradient object

// Legacy support type
export type TValuePropLegacy = string | IGradientData;

export interface IPropsComp {
  value: TValueProp;
  format?: 'rgb' | 'hsl' | 'hex';
  debounceMS?: number;
  debounce?: boolean;
  showAlpha?: boolean;
  showInputs?: boolean;
  showGradientResult?: boolean;
  showGradientStops?: boolean;
  showGradientMode?: boolean;
  showGradientAngle?: boolean;
  showGradientPosition?: boolean;
  allowAddGradientStops?: boolean;
  colorBoardHeight?: number;
  defaultColors?: string[];
  defaultActiveTab?: string | undefined;
  defaultGradientIndex?: number;
  onChangeTabs?: (tab: string) => void;
  onChange?: (value: string) => void;
  showReset?: boolean;
  onReset?: () => void;
}

// Separate interface for solid color components (string only)
export interface IPropsSolid {
  value: string;
  format?: 'rgb' | 'hsl' | 'hex';
  debounceMS?: number;
  debounce?: boolean;
  showAlpha?: boolean;
  showInputs?: boolean;
  colorBoardHeight?: number;
  defaultColors?: string[];
  onChange?: (value: string) => void;
  onColorChangeImmediate?: (value: string) => void; // Called immediately without debounce
  showReset?: boolean;
  onReset?: () => void;
  popupWidth?: number;
}

// Separate interface for gradient components (string only - CSS gradient)
export interface IPropsGradient {
  value: string;
  format?: 'rgb' | 'hsl' | 'hex';
  debounceMS?: number;
  debounce?: boolean;
  showAlpha?: boolean;
  showInputs?: boolean;
  showGradientResult?: boolean;
  showGradientStops?: boolean;
  showGradientMode?: boolean;
  showGradientAngle?: boolean;
  showGradientPosition?: boolean;
  allowAddGradientStops?: boolean;
  colorBoardHeight?: number;
  defaultColors?: string[];
  onChange?: (value: string) => void;
  onColorChangeImmediate?: (value: string) => void; // Called immediately without debounce
  showReset?: boolean;
  onReset?: () => void;
  popupWidth?: number;
}

export interface IPropsMain extends IPropsComp {
  gradient?: boolean;
  solid?: boolean;
  popupWidth?: number;
  // Theme prop
  theme?: 'light' | 'dark';
  // Wrapper props
  showWrapper?: boolean;
  wrapperBackground?: string;
  wrapperClassName?: string;
  wrapperHeight?: string | number;
  wrapperWidth?: string | number;
  wrapperPadding?: string | number;
  wrapperRounded?: string | number | boolean;
}

export type TPropsChange = {
  alpha: number;
  hex: string;
};

export interface IActiveColor {
  hex: string;
  alpha: number;
  loc: ReactText;
  index: ReactText;
}
