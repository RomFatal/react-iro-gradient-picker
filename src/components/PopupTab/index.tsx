import React, { FC } from 'react';
import './_popup_tabs.scss';

interface Popups {
  children?: any;
  activeTab?: string | 'solid' | 'gradient';
  tabName?: string;
  popupWidth?: number;
  onClick?: () => void;
}

export const PopupTabs: FC<Popups> = ({
  children,
  activeTab,
  popupWidth
}: Popups) => {
  const childrenContact = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      activeTab
    });
  });

  return (
    <div className='popup_tabs bg-white dark:bg-dark-800 shadow-popup dark:shadow-popup-dark rounded-md' style={{ width: `${popupWidth}px` }}>
      {childrenContact}
    </div>
  );
};

export const PopupTabsHeaderLabel: FC<Popups> = ({
  children,
  activeTab,
  tabName,
  onClick
}: Popups) => {
  return (
    <div
      className={`popup_tabs-header-label bg-gray-50 dark:bg-dark-700 text-gray-500 dark:text-dark-400 hover:text-primary-500 dark:hover:text-primary-300 transition-colors${
        activeTab === tabName ? ' active bg-white dark:bg-dark-800 text-primary-600 dark:text-primary-400' : ''
      }`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export const PopupTabsHeader: FC<Popups> = ({
  children,
  activeTab
}: Popups) => {
  const childrenContact = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      activeTab
    });
  });
  return <div className='popup_tabs-header bg-gray-50 dark:bg-dark-700 shadow-inner'>{childrenContact}</div>;
};

export const PopupTabsBody: FC<Popups> = ({ children, activeTab }) => {
  const childrenContact = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      activeTab
    });
  });

  return <div className='popup_tabs-body'>{childrenContact}</div>;
};

export const PopupTabsBodyItem: FC<Popups> = ({
  children,
  activeTab,
  tabName
}: Popups) => {
  if (activeTab === tabName) {
    return <div className='popup_tabs-body-item'>{children}</div>;
  }

  return null;
};
