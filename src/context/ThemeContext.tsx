import { createContext, useContext } from "react";


export enum Theme {
    North = 'north',
    South = 'south',
}

export type ThemeContextType = {
    theme: Theme;
    setTheme: (Theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType>({ theme: Theme.North, setTheme: theme => console.warn('no theme provider') });
export const useTheme = () => useContext(ThemeContext); // custom hook have prefix 'use'