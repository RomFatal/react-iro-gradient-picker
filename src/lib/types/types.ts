import { ReactText } from 'react';

// Gradient stop interface
export interface IGradientStop {
  color: string;
  position: number; // 0-100 (percentage)
}

// Enhanced gradient data interface
export interface IGradientData {
  type: 'linear' | 'radial';
  angle?: number; // For linear gradients (0-360 degrees)
  stops: IGradientStop[];
  defaultActiveTab?: 'gradient';
}

// Enhanced value prop that can accept both string and object
export type TValueProp = string | IGradientData;

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
  showReset?: boolean;
  onReset?: () => void;
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
  showReset?: boolean;
  onReset?: () => void;
}

export interface IPropsMain extends IPropsComp {
  gradient?: boolean;
  solid?: boolean;
  popupWidth?: number;
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
