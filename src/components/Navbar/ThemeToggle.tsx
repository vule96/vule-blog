import { useMemo } from 'react';
import { useTheme } from 'src/hooks';
import { moonOutline, sunOutline } from '../Icons';
import { NavbarButton } from './NavbarButton';

export const ThemeToggle = (): JSX.Element => {
  const { isDark, themeReady, toggleTheme } = useTheme();

  const themeText = useMemo<string>(() => {
    if (!themeReady || !isDark) return 'dark';
    return 'light';
  }, [themeReady, isDark]);

  const buttonText = useMemo<string>(() => {
    return ['Enable', themeText, 'theme'].join(' ');
  }, [themeText]);

  const iconPath = useMemo<string>(() => {
    if (!themeReady || !isDark) return moonOutline;
    return sunOutline;
  }, [themeReady, isDark]);

  return (
    <li>
      <NavbarButton
        title={buttonText}
        iconPath={themeReady ? iconPath : ''}
        iconSize={0.9}
        onClick={toggleTheme}
        disabled={!themeReady}
      />
    </li>
  );
};
