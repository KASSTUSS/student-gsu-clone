import { IAuthActionReducer, IAuthContextValue } from './types';

export const setLoginData = ({
  surname,
  studentCardNumber,
}: IAuthContextValue): IAuthActionReducer => ({
  type: 'LOGIN',
  surname,
  studentCardNumber,
});

export const setLogoutData = (): IAuthActionReducer => ({
  type: 'LOGOUT',
});
