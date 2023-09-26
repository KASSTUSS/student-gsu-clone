import React from 'react'

import { ThemeContext, THEMES } from './context'
import { IThemeContextValue } from './types'

const getTheme = () => {
    const activeTheme = `${window?.localStorage?.getItem('theme')}`
    if (Object.values(THEMES).includes(activeTheme)) return activeTheme

    const userMedia = window.matchMedia('(prefers-color-scheme: light)')
    if (userMedia.matches) return THEMES.LIGHT

    return THEMES.DARK
}

function ThemeProvider({ children }: { children: React.JSX.Element }): React.JSX.Element {
    const [theme, setTheme] = React.useState(getTheme)

    React.useEffect(() => {
        document.documentElement.dataset.theme = theme
        localStorage.setItem('theme', theme)
    }, [theme])

    const contextValue: IThemeContextValue = React.useMemo(() => ({
        theme,
        setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider