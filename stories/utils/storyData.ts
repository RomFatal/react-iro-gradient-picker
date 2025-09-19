import type { IPropsMain } from '../../src/lib/types';

export interface ColorPreset {
  name: string;
  value: string;
  showAlpha?: boolean;
}

/**
 * Default arguments for all color picker stories
 */
export const defaultArgs: Partial<IPropsMain> = {
  format: 'hex',
  debounceMS: 300,
  debounce: true,
  showAlpha: false,
  colorBoardHeight: 120,
  popupWidth: 267,
  onChange: (value: string) => {
    console.log('Color changed:', value);
    return value;
  }
};

/**
 * Preset configurations for solid color picker
 */
export const solidPickerPresets: ColorPreset[] = [
  {
    name: 'Primary Blue',
    value: '#3B82F6'
  },
  {
    name: 'Success Green',
    value: '#10B981'
  },
  {
    name: 'Warning Orange',
    value: '#F59E0B'
  },
  {
    name: 'Error Red',
    value: '#EF4444'
  },
  {
    name: 'Purple with Alpha',
    value: 'rgba(139, 92, 246, 0.8)',
    showAlpha: true
  },
  {
    name: 'Teal with Alpha',
    value: 'rgba(20, 184, 166, 0.6)',
    showAlpha: true
  }
];

/**
 * Preset configurations for gradient picker
 */
export const gradientPickerPresets: ColorPreset[] = [
  {
    name: 'Sunset',
    value: 'linear-gradient(135deg, #FF6B6B 0%, #FFE66D 100%)'
  },
  {
    name: 'Ocean Blue',
    value: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    name: 'Purple Pink',
    value: 'linear-gradient(135deg, #D9AFD9 0%, #97D9E1 100%)'
  },
  {
    name: 'Green Mint',
    value: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
  },
  {
    name: 'Fire Orange',
    value: 'linear-gradient(45deg, #fa709a 0%, #fee140 100%)'
  },
  {
    name: 'Dark Theme',
    value: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  }
];

/**
 * Dark theme color examples
 */
export const darkThemePresets: ColorPreset[] = [
  {
    name: 'Dark Surface',
    value: '#1e293b'
  },
  {
    name: 'Dark Border',
    value: '#475569'
  },
  {
    name: 'Dark Text',
    value: '#f8fafc'
  },
  {
    name: 'Dark Primary',
    value: '#38bdf8'
  }
];

/**
 * Light theme color examples
 */
export const lightThemePresets: ColorPreset[] = [
  {
    name: 'Light Surface',
    value: '#ffffff'
  },
  {
    name: 'Light Border',
    value: '#e2e8f0'
  },
  {
    name: 'Light Text',
    value: '#1f2937'
  },
  {
    name: 'Light Primary',
    value: '#3b82f6'
  }
];
