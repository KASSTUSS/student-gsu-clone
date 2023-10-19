import Alert from '@components/Alert';
import Button from '@components/ui/Button';
import Input from '@components/ui/Input';
import Line from '@components/ui/Line';
import { ILoginData, IResponseData, StudentService } from '@api/StudentService';
import React from 'react';
import { setLoginData } from '@contexts/AuthContext/actions';
import { dispatchAuth } from '@contexts/AuthContext/provider';
import { redirect } from 'react-router-dom';
import Logo from '@components/Logo';

import './style.css';
import SwitchThemeButton from '@components/ui/SwitchThemeButton';

function LoginPage(): React.ReactElement {

    const [errorNotFount, setErrorNotFount] = React.useState(false)
    const [loginSurname, setLoginSurname] = React.useState('')
    const [loginStudentCardNumber, setLoginStudentCardNumber] = React.useState('')
    const [loadingData, setLoadingData] = React.useState<boolean>(false);

    React.useEffect(() => {
        document.title = 'Student.GSU - Вход'
    }, [])

    const clickLoginHandler = async (): Promise<void> => {

        setLoadingData(true);

        const loginData: ILoginData = {
            surname: loginSurname.trim(),
            studentCardNumber: loginStudentCardNumber.trim(),
        }

        const res: IResponseData = await StudentService.getStudentData(loginData);

        setLoadingData(false);
        if (res.code !== 200) {
            return setErrorNotFount(true)
        }

        dispatchAuth(
            setLoginData({
                studentData: res.data
            })
        )
        redirect('/profile')

    }

    return (
        <>
            <Alert text='Такой студент не найден!' icon='/circle-xmark.svg' active={errorNotFount} setActive={setErrorNotFount} />
            <div className='wrapper container-center-x login-page-wrapper'>
                <div className='login-page__switch-theme-button'>
                    <SwitchThemeButton />
                </div>
                <div className='login-container'>
                    <div className='login-logo'><Logo /></div>
                    <h1 className='login-title'>Вход</h1>
                    <Input label='Фамилия' setValue={setLoginSurname} />
                    <Input label='Номер студенческого' setValue={setLoginStudentCardNumber} />
                    <Line />
                    <Button value='Войти' onClick={clickLoginHandler} spinner={loadingData} />
                </div>

            </div></>
    )
}

export default LoginPage;