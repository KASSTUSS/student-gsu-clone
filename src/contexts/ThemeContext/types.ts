import { Dispatch, SetStateAction } from 'react';

export interface IThemeContextValue {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}
