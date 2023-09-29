import React from 'react'

import { AuthContext } from './context'
import { defaultAuthData, reducer } from './reducer'
import { IAuthActionReducer, IAuthContextValue } from './types'

const getAuthData = (): IAuthContextValue => {
    const isAuth: string = `${window?.localStorage?.getItem('isAuth')}`

    if (isAuth !== '1') return defaultAuthData

    const surname: string = `${window?.localStorage?.getItem('surname')}`
    const studentCardNumber: string = `${window?.localStorage?.getItem('studentCardNumber')}`

    return {
        isAuth: true,
        surname,
        studentCardNumber
    }
}

// eslint-disable-next-line import/no-mutable-exports
export let dispatchAuth: React.Dispatch<IAuthActionReducer>;

export function AuthProvider({ children }: { children: React.JSX.Element }) {

    const initialState: IAuthContextValue = getAuthData();

    const [state, dispatch] = React.useReducer<React.Reducer<IAuthContextValue, IAuthActionReducer>>(reducer, initialState);

    dispatchAuth = dispatch

    return (
        <AuthContext.Provider value={state}>{children}</AuthContext.Provider>
    );
}