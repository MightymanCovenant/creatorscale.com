import React, { useState, useContext } from 'react';

const ThemeContext = React.createContext<{ theme: string; toggleTheme: () => void; }>({
  theme: 'light',
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return [theme, toggleTheme] as const;
};