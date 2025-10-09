import React, { FC, Fragment, useState } from 'react';
import '../../../styles/tailwind.css';
import { ThemeProvider } from '../../providers/ThemeContext';
import { ThemeToggle } from '../../ui/ThemeToggle';
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
  onChangeTabs,
  onChange = () => ({}),
  showReset = false,
  onReset
}) => {
  // Convert object value to CSS string for internal use
  const cssValue = normalizeGradientValue(value);

  // Auto-switch to gradient tab if receiving gradient object
  const initialTab = isGradientObject(value)
    ? 'gradient'
    : defaultActiveTab || getIndexActiveTag(value);

  const [activeTab, setActiveTab] = useState<string>(initialTab);

  // Auto-switch tab when value changes from object to string or vice versa
  React.useEffect(() => {
    if (isGradientObject(value) && activeTab !== 'gradient') {
      setActiveTab('gradient');
      if (typeof onChangeTabs === 'function') {
        onChangeTabs('gradient');
      }
    }
  }, [value, activeTab, onChangeTabs]);

  const onChangeSolid = (value: string) => {
    onChange(value);
  };

  const onChangeGradient = (value: string) => {
    onChange(value);
  };

  const onChangeTab = (tab: string) => {
    setActiveTab(tab);
    if (typeof onChangeTabs === 'function' && !!onChangeTabs) {
      onChangeTabs(tab);
    }
  };

  if (solid && gradient) {
    return (
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
                />
              </PopupTabsBodyItem>
              <PopupTabsBodyItem tabName='gradient'>
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
                />
              </PopupTabsBodyItem>
            </PopupTabsBody>
          </PopupTabs>
        </div>
      </ThemeProvider>
    );
  }

  return (
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
};

export default ColorPicker;
