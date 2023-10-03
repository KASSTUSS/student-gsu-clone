import React from 'react'

import { getTheme, ThemeContext, THEMES } from './context'
import { IThemeContextValue } from './types'

function ThemeProvider({ children }: { children: React.JSX.Element }): React.JSX.Element {
    const [theme, setTheme] = React.useState(getTheme())

    React.useLayoutEffect(() => {
        document.documentElement.dataset.theme = theme
        localStorage.setItem('theme', theme)
    }, [theme])

    const contextValue: IThemeContextValue = React.useMemo(() => ({
        theme,
        toggleTheme: () => {
            setTheme(theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);
        }
    }), [theme]);

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider