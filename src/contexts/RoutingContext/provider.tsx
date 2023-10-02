import React from 'react'
import { RoutingContext } from './context'
import { IRoutingContextValue } from './types'



function RoutingProvider({ children }: { children: React.JSX.Element }): React.JSX.Element {
    const [willNavigate, setWillNavigate] = React.useState<boolean>(false)
    const [callback, setCallback] = React.useState<() => void>(() => {})

    const contextValue: IRoutingContextValue = React.useMemo(() => ({
        willNavigate,
        animationDone: setWillNavigate,
        callback,
        setCallback,
    }), [willNavigate, setWillNavigate, callback, setCallback]);

    return (
        <RoutingContext.Provider value={contextValue}>
            {children}
        </RoutingContext.Provider>
    )
}

export default RoutingProvider