import { createContext, useContext } from "react";

interface Themes {
    hemisphere: Hemisphere;
    featureCarousel: boolean;
}

export enum Hemisphere {
    North = 'north',
    South = 'south',
}

export type ThemeContextType = {
    themes: Themes;
    setTheme: (Theme: Themes) => void;
}

export const ThemeContext = createContext<ThemeContextType>({ themes: { hemisphere: Hemisphere.North, featureCarousel: false }, setTheme: theme => console.warn('no theme provider') });
export const useTheme = () => useContext(ThemeContext); // custom hook have prefix 'use'