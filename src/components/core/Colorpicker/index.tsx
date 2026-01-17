import React, { FC, Fragment, useState, CSSProperties } from 'react';
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
  }, [value, cssValue, activeTab, onChangeTabs]);

  const onChangeSolid = (value: string) => {
    onChange(value);
  };

  const onChangeGradient = (value: string) => {
    setGradientValue(value); // Track gradient changes
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

  // Wrapper styling
  const wrapperStyle: CSSProperties | undefined = showWrapper
    ? {
        background: wrapperBackground || cssValue || 'transparent',
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

  const pickerContent = solid && gradient ? (
    <ThemeProvider>
      <div
        className='relative dark iro-gradient-picker'
        data-color-picker-theme
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
    <ThemeProvider>
      <div
        className='relative dark iro-gradient-picker'
        data-color-picker-theme
      >
        {solid || gradient ? (
          <PopupTabs popupWidth={popupWidth}>
            <PopupTabsBody>
              {solid ? (
                <IroSolid
                  onChange={onChangeSolid}
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
