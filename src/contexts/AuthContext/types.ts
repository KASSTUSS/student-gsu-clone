import { IStudentData } from "@api/StudentService";

export interface IAuthContextValue {
  isAuth?: boolean;
  studentData?: IStudentData;
}

export interface IAuthActionReducer {
  type: 'LOGIN' | 'LOGOUT';
  studentData?: IStudentData;
}
