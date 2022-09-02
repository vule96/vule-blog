import { useTheme as useNextTheme } from 'next-themes';
import { createContext, useMemo } from 'react';
import { useHasMounted } from 'src/hooks';
import type { FC } from 'src/types/fc';

export interface ThemeContextValue {
  isDark: boolean;
  themeReady: boolean;
  toggleTheme?: () => void;
  setTheme?: (theme: 'light' | 'dark') => void;
}

export const defaultContextState: ThemeContextValue = {
  isDark: false,
  themeReady: false,
};

export const ThemeContext =
  createContext<ThemeContextValue>(defaultContextState);

export const ThemeProvider: FC = (props) => {
  const mounted = useHasMounted();
  const { theme, resolvedTheme, setTheme } = useNextTheme();

  const actualTheme = useMemo(
    () => resolvedTheme ?? theme,
    [resolvedTheme, theme]
  );

  const themeContextValue: ThemeContextValue = {
    themeReady: mounted,
    isDark: actualTheme === 'dark',
    toggleTheme: () => {
      setTheme(actualTheme === 'dark' ? 'light' : 'dark');
    },
    setTheme,
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {props.children}
    </ThemeContext.Provider>
  );
};
