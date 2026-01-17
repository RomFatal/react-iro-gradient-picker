import React, { CSSProperties, FC, Fragment, useState } from 'react';
import '../../../styles/tailwind.css';
import { ThemeProvider } from '../../providers/ThemeContext';
import './_colorpicker.scss';

import IroGradient from './IroGradient';
import IroSolid from './IroSolid';

import {
  PopupTabs,
  PopupTabsBody,
  PopupTabsBodyItem,
  PopupTabsHeader,
  PopupTabsHeaderLabel
} from '../../ui/PopupTab';
import { getIndexActiveTag } from './helper';

import { IPropsMain } from '../../../lib/types/types';
import { isGradientObject, normalizeGradientValue } from '../../../utils';

import { DEFAULT_COLORS } from '../../../constants/constants';

const ColorPicker: FC<IPropsMain> = ({
  value = '#ffffff',
  format = 'rgb',
  gradient = false,
  solid = true,
  debounceMS = 300,
  debounce = true,
  showAlpha = true,
  showInputs = true,
  showGradientResult = true,
  showGradientStops = true,
  showGradientMode = true,
  showGradientAngle = true,
  showGradientPosition = true,
  allowAddGradientStops = true,
  popupWidth = 267,
  colorBoardHeight = 120,
  defaultColors = DEFAULT_COLORS,
  defaultActiveTab,
  defaultGradientIndex = 7,
  onChangeTabs,
  onChange = () => ({}),
  showReset = false,
  onReset,
  // Theme prop
  theme = 'dark',
  // Wrapper props
  showWrapper = false,
  wrapperBackground,
  wrapperClassName = '',
  wrapperHeight = 'auto',
  wrapperWidth = 'auto',
  wrapperPadding = '24px',
  wrapperRounded = true
}) => {
  // Convert object value to CSS string for internal use
  const cssValue = normalizeGradientValue(value);

  // Auto-switch to gradient tab if receiving gradient object
  const initialTab = isGradientObject(value)
    ? 'gradient'
    : defaultActiveTab || getIndexActiveTag(value);

  const [activeTab, setActiveTab] = useState<string>(initialTab);

  // Track the gradient value separately - use default gradient at specified index or fallback
  const getDefaultGradient = () => {
    const gradients = defaultColors.filter(
      (color) =>
        typeof color === 'string' &&
        (color.includes('linear-gradient') || color.includes('radial-gradient'))
    );

    // Use the defaultGradientIndex if valid, otherwise fallback
    if (gradients.length > 0) {
      const index = Math.max(
        0,
        Math.min(defaultGradientIndex, gradients.length - 1)
      );
      return gradients[index];
    }

    return 'linear-gradient(90deg, rgb(255, 177, 153) 0%, rgb(255, 8, 68) 100%)';
  };

  const [gradientValue, setGradientValue] = useState<string>(
    isGradientObject(value) || getIndexActiveTag(value) === 'gradient'
      ? cssValue
      : getDefaultGradient()
  );

  // Track current color for wrapper background (updates in real-time)
  const [currentWrapperColor, setCurrentWrapperColor] = useState<string>(cssValue);

  // Auto-switch tab when value changes from object to string or vice versa
  React.useEffect(() => {
    if (isGradientObject(value) && activeTab !== 'gradient') {
      setActiveTab('gradient');
      setGradientValue(cssValue); // Update gradient value when external value is gradient
      if (typeof onChangeTabs === 'function') {
        onChangeTabs('gradient');
      }
    } else if (
      isGradientObject(value) ||
      getIndexActiveTag(value) === 'gradient'
    ) {
      // Update gradient value if external value is a gradient
      setGradientValue(cssValue);
    }
    // Also update wrapper color when value prop changes
    setCurrentWrapperColor(cssValue);
  }, [value, cssValue, activeTab, onChangeTabs]);

  const onChangeSolid = (value: string) => {
    setCurrentWrapperColor(value); // Update wrapper immediately
    onChange(value);
  };

  const onChangeGradient = (value: string) => {
    setGradientValue(value); // Track gradient changes
    setCurrentWrapperColor(value); // Update wrapper immediately
    onChange(value);
  };

  const onChangeTab = (tab: string) => {
    setActiveTab(tab);
    if (typeof onChangeTabs === 'function' && !!onChangeTabs) {
      onChangeTabs(tab);
    }

    // When switching to gradient tab from solid, emit the default gradient
    if (tab === 'gradient' && activeTab === 'solid') {
      onChange(gradientValue);
    }
  };

  // Wrapper styling - use currentWrapperColor for real-time updates
  const wrapperStyle: CSSProperties | undefined = showWrapper
    ? {
        background: wrapperBackground || currentWrapperColor || 'transparent',
        height: wrapperHeight,
        width: wrapperWidth,
        padding: wrapperPadding,
        borderRadius: wrapperRounded ? '1rem' : '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'auto',
        textAlign: 'center',
        transition: 'background 0.3s ease',
        boxSizing: 'border-box'
      }
    : undefined;

  // Theme-specific inline styles for maximum specificity
  const themeStyles: CSSProperties =
    theme === 'light'
      ? ({
          backgroundColor: '#ffffff',
          color: '#1a1d23',
          '--colorpicker-bg': '#ffffff',
          '--colorpicker-text': '#1a1d23',
          '--colorpicker-panel-bg': '#f8f9fa',
          '--colorpicker-input-bg': '#f3f4f6',
          '--colorpicker-border': '#e5e7eb',
          '--colorpicker-input-border': '#d1d5db',
          '--color-background': '#ffffff',
          '--color-foreground': '#1a1d23',
          '--color-muted-foreground': '#6b7280',
          '--colorpicker-shadow': '0 4px 6px -1px rgb(0 0 0 / 0.1)'
        } as CSSProperties)
      : ({
          backgroundColor: 'rgba(26, 26, 28, 0.8)',
          color: '#f7f8f9',
          '--colorpicker-bg': 'rgba(26, 26, 28, 0.8)',
          '--colorpicker-text': '#ffffff',
          '--colorpicker-panel-bg': 'rgba(0, 0, 0, 1)',
          '--colorpicker-input-bg': 'rgba(39, 39, 42, 0.8)',
          '--colorpicker-border': 'rgba(39, 39, 42, 0.8)',
          '--colorpicker-input-border': 'rgba(39, 39, 42, 0.8)',
          '--color-background': '#000000',
          '--color-foreground': '#f7f8f9',
          '--color-muted-foreground': '#a1a1aa'
        } as CSSProperties);

  const pickerContent =
    solid && gradient ? (
      <ThemeProvider defaultTheme={theme}>
        <div
          className={`relative ${theme} iro-gradient-picker`}
          data-color-picker-theme
          style={themeStyles}
        >
          <PopupTabs activeTab={activeTab} popupWidth={popupWidth}>
            <PopupTabsHeader>
              <PopupTabsHeaderLabel
                tabName='solid'
                onClick={() => onChangeTab('solid')}
              >
                Solid
              </PopupTabsHeaderLabel>
              <PopupTabsHeaderLabel
                tabName='gradient'
                onClick={() => onChangeTab('gradient')}
              >
                Gradient
              </PopupTabsHeaderLabel>
            </PopupTabsHeader>
            <PopupTabsBody>
              <PopupTabsBodyItem tabName='solid'>
                <IroSolid
                  onChange={onChangeSolid}
                  onColorChangeImmediate={setCurrentWrapperColor}
                  value={cssValue}
                  format={format}
                  defaultColors={defaultColors}
                  debounceMS={debounceMS}
                  debounce={debounce}
                  showAlpha={showAlpha}
                  showInputs={showInputs}
                  colorBoardHeight={colorBoardHeight}
                  showReset={showReset}
                  onReset={onReset}
                  popupWidth={popupWidth}
                />
              </PopupTabsBodyItem>
              <PopupTabsBodyItem tabName='gradient'>
                <IroGradient
                  onChange={onChangeGradient}
                  onColorChangeImmediate={setCurrentWrapperColor}
                  value={gradientValue}
                  format={format}
                  defaultColors={defaultColors}
                  debounceMS={debounceMS}
                  debounce={debounce}
                  showAlpha={showAlpha}
                  showInputs={showInputs}
                  showGradientResult={showGradientResult}
                  showGradientStops={showGradientStops}
                  showGradientMode={showGradientMode}
                  showGradientAngle={showGradientAngle}
                  showGradientPosition={showGradientPosition}
                  allowAddGradientStops={allowAddGradientStops}
                  colorBoardHeight={colorBoardHeight}
                  showReset={showReset}
                  onReset={onReset}
                  popupWidth={popupWidth}
                />
              </PopupTabsBodyItem>
            </PopupTabsBody>
          </PopupTabs>
        </div>
      </ThemeProvider>
    ) : (
      <ThemeProvider defaultTheme={theme}>
        <div
          className={`relative ${theme} iro-gradient-picker`}
          data-color-picker-theme
          style={themeStyles}
        >
          {solid || gradient ? (
            <PopupTabs popupWidth={popupWidth}>
              <PopupTabsBody>
                {solid ? (
                  <IroSolid
                    onChange={onChangeSolid}
                    onColorChangeImmediate={setCurrentWrapperColor}
                    value={cssValue}
                    format={format}
                    defaultColors={defaultColors}
                    debounceMS={debounceMS}
                    debounce={debounce}
                    showAlpha={showAlpha}
                    showInputs={showInputs}
                    colorBoardHeight={colorBoardHeight}
                    showReset={showReset}
                    onReset={onReset}
                    popupWidth={popupWidth}
                  />
                ) : (
                  <Fragment />
                )}
                {gradient ? (
                  <IroGradient
                    onChange={onChangeGradient}
                    onColorChangeImmediate={setCurrentWrapperColor}
                    value={cssValue}
                    format={format}
                    defaultColors={defaultColors}
                    debounceMS={debounceMS}
                    debounce={debounce}
                    showAlpha={showAlpha}
                    showInputs={showInputs}
                    showGradientResult={showGradientResult}
                    showGradientStops={showGradientStops}
                    showGradientMode={showGradientMode}
                    showGradientAngle={showGradientAngle}
                    showGradientPosition={showGradientPosition}
                    allowAddGradientStops={allowAddGradientStops}
                    colorBoardHeight={colorBoardHeight}
                    showReset={showReset}
                    onReset={onReset}
                    popupWidth={popupWidth}
                  />
                ) : (
                  <Fragment />
                )}
              </PopupTabsBody>
            </PopupTabs>
          ) : null}
        </div>
      </ThemeProvider>
    );

  if (showWrapper) {
    return (
      <div
        className={`iro-picker-wrapper ${wrapperClassName}`}
        style={wrapperStyle}
      >
        {pickerContent}
      </div>
    );
  }

  return pickerContent;
};

export default ColorPicker;
