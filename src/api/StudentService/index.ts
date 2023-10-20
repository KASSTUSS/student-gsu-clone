// import exampleJsonFile from './exampleData.json';

import axios from "axios";

export interface IPersonalData {
    surname: string;
    name: string;
    patronymic: string;
    faculty: string;
    specialty:string;
    group: string;
}

export interface IOtherInfoItem {
    caption: string;
    value: string;
    unit: string;
}

export interface IOtherInfo {
    coefficient: string;
    fees: IOtherInfoItem[];
    attendance: IOtherInfoItem[];
}

export interface IMarkData {
    object: string;
    result: number | true | false | null;
}

export interface IStudentsMarksData {
    sessionNumber: number;
    marks: IMarkData[];
}

export interface IStudentData {
    personalData: IPersonalData;
    otherInfo: IOtherInfo;
    session: IStudentsMarksData[];
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
            // !!!
            // if (!(loginData.studentCardNumber === '1' && loginData.surname === '1')) {
            //     return {
            //         code: 404,
            //         error: {
            //             errorMessage: 'NOT_FOUND'
            //         }
            //     }
            // }

            // return {
            //     code: 200,
            //     data: exampleJsonFile.result[0],
            // }

            const urls: string[] = [
                `https://markstat-back.onrender.com/api?card=${loginData.studentCardNumber}&surname=${loginData.surname}`,
                `http://localhost:3001/api?card=${loginData.studentCardNumber}&surname=${loginData.surname}`,
            ];

            const response = await axios.get(urls[1])

            if (response.status === 200) {
                const data: IResponseData = {
                    code: 200,
                    data: response.data.message[0],
                }
                
                return data
            }

            return {
                code: 404,
                error: {
                    errorMessage: 'NOT_FOUND'
                }
            }

            

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