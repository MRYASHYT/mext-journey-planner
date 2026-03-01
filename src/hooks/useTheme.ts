import { useState, useEffect } from 'react';

export type Theme = 'light' | 'dark';

export interface ThemeConfig {
  id: Theme;
  name: string;
  emoji: string;
  colors: string[];
}

export const themes: ThemeConfig[] = [
  { id: 'light', name: 'Alabaster', emoji: '⬜', colors: ['#FFFFFF', '#F4F4F5'] },
  { id: 'dark', name: 'Noir', emoji: '⬛', colors: ['#0A0A0A', '#171717'] },
];

const THEME_KEY = 'mext-theme';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const stored = localStorage.getItem(THEME_KEY) as Theme | null;
    if (stored && themes.some(t => t.id === stored)) {
      setTheme(stored);
      document.documentElement.setAttribute('data-theme', stored);
    }
  }, []);

  const changeTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
  };

  return { theme, changeTheme, themes };
};
