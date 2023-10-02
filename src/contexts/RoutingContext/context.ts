import React from 'react'
import { IRoutingContextValue } from './types'

export const initialState: IRoutingContextValue = {
  willNavigate: false,
  animationDone: () => {},
  callback: () => {},
  setCallback: () => {},
}

export const RoutingContext: React.Context<IRoutingContextValue> = React.createContext<IRoutingContextValue>(initialState)