import React from 'react'

import { AuthContext } from './context'
import { defaultAuthData, reducer } from './reducer'
import { IAuthActionReducer, IAuthContextValue } from './types'

const getAuthData = (): IAuthContextValue => {
    const isAuth: string = `${window?.localStorage?.getItem('isAuth')}`;
    const studentDataStr = `${window?.localStorage?.getItem('studentData')}`;

    if (isAuth !== '1' || !studentDataStr) return defaultAuthData;

    const studentData: IAuthContextValue = JSON.parse(studentDataStr);

    if (!studentData.isAuth) {
        return defaultAuthData;
    }
    return studentData;
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