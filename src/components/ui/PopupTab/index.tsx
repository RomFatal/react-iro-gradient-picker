import React, { FC } from 'react';

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
    <div
      className='relative rounded-md colorpicker-glass'
      style={{ width: `${popupWidth}px` }}
    >
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
      className={`w-full h-12 text-sm font-bold leading-6 tracking-wider text-center uppercase flex items-center justify-center cursor-pointer transition-colors  ${
        activeTab === tabName
          ? ' cursor-default opacity-100 '
          : 'hover:text-primary hover:opacity-80 bg-[var(--colorpicker-input-bg)] text-[var(--color-muted-foreground)]'
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
  return (
    <div className='w-full h-12 flex rounded-md rounded-b-none overflow-hidden colorpicker-glass shadow-inner'>
      {childrenContact}
    </div>
  );
};

export const PopupTabsBody: FC<Popups> = ({ children, activeTab }) => {
  const childrenContact = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      activeTab
    });
  });

  return <div className='p-4'>{childrenContact}</div>;
};

export const PopupTabsBodyItem: FC<Popups> = ({
  children,
  activeTab,
  tabName
}: Popups) => {
  if (activeTab === tabName) {
    return <div>{children}</div>;
  }

  return null;
};
