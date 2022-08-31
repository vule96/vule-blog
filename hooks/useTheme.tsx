import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

interface useThemeReturnType {
  activeTheme: string;
  setTheme: (theme: string) => void;
}

// convenience hook to get access to ThemeContext's state/functions from pages/components/etc.
const useTheme = (): useThemeReturnType => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used inside of a ThemeProvider.');
  }

  return context;
};

export default useTheme;
