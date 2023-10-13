import { IAuthActionReducer, IAuthContextValue } from './types';

export const setLoginData = ({
  studentData
}: IAuthContextValue): IAuthActionReducer => ({
  type: 'LOGIN',
  studentData
});

export const setLogoutData = (): IAuthActionReducer => ({
  type: 'LOGOUT',
});
