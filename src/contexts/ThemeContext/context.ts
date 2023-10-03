import React from 'react'
import { IThemeContextValue } from './types'

export const THEMES = {
  DARK: 'dark',
  LIGHT: 'light',
}

export const getTheme = (): string => {
  const activeTheme = `${window?.localStorage?.getItem('theme')}`
  if (Object.values(THEMES).includes(activeTheme)) return activeTheme

  const userMedia = window.matchMedia('(prefers-color-scheme: light)')
  if (userMedia.matches) return THEMES.LIGHT

  return THEMES.DARK
}

export const ThemeContext: React.Context<IThemeContextValue> = React.createContext<IThemeContextValue>({
  theme: getTheme(),
  toggleTheme: () => {},
});