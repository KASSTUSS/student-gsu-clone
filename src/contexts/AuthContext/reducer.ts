import { IAuthActionReducer, IAuthContextValue } from './types';

export const defaultAuthData: IAuthContextValue = {
  isAuth: false,
  surname: '',
  studentCardNumber: '',
};

export const setAuthToLocalStorage = (loginData: IAuthContextValue) => {
  localStorage.setItem('isAuth', loginData.isAuth ? '1' : '0');
  localStorage.setItem('surname', loginData.surname ? loginData.surname : '');
  localStorage.setItem(
    'studentCardNumber',
    loginData.studentCardNumber ? loginData.studentCardNumber : '',
  );
};

export const reducer = (
  state: IAuthContextValue,
  action: IAuthActionReducer,
): IAuthContextValue => {
  switch (action.type) {
    case 'LOGIN': {
      const loginData: IAuthContextValue = {
        isAuth: true,
        surname: action.surname,
        studentCardNumber: action.studentCardNumber,
      };

      setAuthToLocalStorage(loginData);

      return loginData;
    }
    case 'LOGOUT': {
      setAuthToLocalStorage(defaultAuthData);
      return defaultAuthData;
    }
    default: {
      return state;
    }
  }
};
