import React from 'react';
import { IAuthContextValue } from './types';
import { defaultAuthData } from './reducer';

export const getStudentData = (): IAuthContextValue => {
  const studentDataStr = `${window?.localStorage?.getItem('studentData')}`;

  if (!studentDataStr) {
    return defaultAuthData;
  }

  const studentData: IAuthContextValue = JSON.parse(studentDataStr);

  if (!studentData.isAuth) {
    return defaultAuthData;
  }

  return studentData;
}

export const AuthContext: React.Context<IAuthContextValue> =
  React.createContext<IAuthContextValue>(getStudentData());
