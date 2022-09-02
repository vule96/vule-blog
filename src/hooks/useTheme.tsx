import { useContext } from 'react';

import {
  defaultContextState,
  ThemeContext,
  ThemeContextValue,
} from 'src/contexts/ThemeContext';

export const useTheme = (): ThemeContextValue => {
  return useContext(ThemeContext) || defaultContextState;
};
