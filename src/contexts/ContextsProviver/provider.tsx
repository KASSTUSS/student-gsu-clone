import React from 'react'

import { ThemeProvider } from '@contexts/ThemeContext'
import { AuthProvider } from '@contexts/AuthContext'

function ContextsProvider({ children }: { children: React.JSX.Element }): React.JSX.Element {

    return (
        <ThemeProvider>
            <AuthProvider>
                {children}
            </AuthProvider>
        </ThemeProvider>
    )
}

export default ContextsProvider