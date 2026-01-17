import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = 'dark' // Dark theme as default
}) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // If defaultTheme is explicitly provided (not default 'dark'), use it
    // This allows stories to override localStorage
    if (defaultTheme !== 'dark') {
      return defaultTheme;
    }
    // Otherwise check localStorage first, then use default
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('color-picker-theme') as Theme;
      return stored || defaultTheme;
    }
    return defaultTheme;
  });

  useEffect(() => {
    // Apply theme to local container instead of document root for better scoping
    const containers = document.querySelectorAll('[data-color-picker-theme]');

    containers.forEach((container) => {
      // Remove previous theme class
      container.classList.remove('light', 'dark');
      // Add new theme class
      container.classList.add(theme);
    });

    // Store theme preference
    if (typeof window !== 'undefined') {
      localStorage.setItem('color-picker-theme', theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const value = {
    theme,
    toggleTheme,
    setTheme
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
