import React from 'react';
import { IAuthContextValue } from './types';
import { defaultAuthData } from './reducer';

export const AuthContext: React.Context<IAuthContextValue> =
  React.createContext<IAuthContextValue>(defaultAuthData);
