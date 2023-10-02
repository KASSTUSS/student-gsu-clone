export interface IAuthContextValue {
  isAuth?: boolean;
  surname?: string | '';
  studentCardNumber?: string | '';
}

export interface IAuthActionReducer {
  type: 'LOGIN' | 'LOGOUT';
  surname?: string;
  studentCardNumber?: string;
}
