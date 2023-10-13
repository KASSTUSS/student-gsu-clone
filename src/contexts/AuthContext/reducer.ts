import { IAuthActionReducer, IAuthContextValue } from './types';

export const defaultAuthData: IAuthContextValue = {
  isAuth: false,
  studentData: {
    personalData: {
      surname: '',
      name: '',
      patronymic: '',
      faculty: '',
      specialty: '',
      group: ''
    },
    session: []
  },
};

export const setAuthToLocalStorage = (loginData: IAuthContextValue) => {
  localStorage.setItem('isAuth', loginData.isAuth ? '1' : '0');
  localStorage.setItem('studentData', JSON.stringify(loginData.studentData));
};

export const reducer = (
  state: IAuthContextValue,
  action: IAuthActionReducer,
): IAuthContextValue => {
  switch (action.type) {
    case 'LOGIN': {
      const loginData: IAuthContextValue = {
        isAuth: true,
        studentData: action.studentData,
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
