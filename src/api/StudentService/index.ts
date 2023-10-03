import axios from 'axios';

export interface IStudentData {
    personalData: {
        surname: string;
        name: string;
        patronymic: string;
        faculty: string;
        specialty:string;
        group: string;
    };
    session: {
        sessionNumber: number;
        marks: {
            object: string;
            result: number | true | false | null;
        }[];
    }[];
}

export interface IError {
    errorMessage: string;
}

export interface IResponseData {
    code: 200 | 404 | 500;
    data?: IStudentData;
    error?: IError;
}

export interface ILoginData {
    surname: string;
    studentCardNumber: string;
}

export interface IStudentService {
    getStudentData: (loginData: ILoginData) => Promise<IResponseData>;
}

export const StudentService: IStudentService = {
    async getStudentData(loginData) {
        try {
            const response = await axios.get(`https://markstat-back.onrender.com/api?card=${loginData.studentCardNumber}&surname=${loginData.surname}`)

            const data: IResponseData = {
                code: 200,
                data: response.data.message[0],
            }

            return data
        } catch (e) {
            return {
                code: 500,
                error: {
                    errorMessage: ''
                }
            }
        }
    }
}