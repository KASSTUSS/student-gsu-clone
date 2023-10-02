import React from 'react'

import { ThemeProvider } from '@contexts/ThemeContext'
import { AuthProvider } from '@contexts/AuthContext'
import { RoutingProvider } from '@contexts/RoutingContext'

function ContextsProvider({ children }: { children: React.JSX.Element }): React.JSX.Element {

    return (
        <RoutingProvider>
            <ThemeProvider>
                <AuthProvider>
                    {children}
                </AuthProvider>
            </ThemeProvider>
        </RoutingProvider>
    )
}

export default ContextsProvider