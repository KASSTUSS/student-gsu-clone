import { IResponseData, IStudentData, StudentService } from '@api/StudentService';
import { AuthContext, IAuthContextValue } from '@contexts/AuthContext';
import React, { useContext, useEffect, useState } from 'react';

import './style.css';
import Logo from '@components/Logo';
import WindowBlock from '@components/WindowBlock';
import { dispatchAuth } from '@contexts/AuthContext/provider';
import { setLogoutData } from '@contexts/AuthContext/actions';
import SwitchThemeButton from '@components/ui/SwitchThemeButton';
import MarksChart from '@components/MarksChart';
import OtherInfo from '@components/OtherInfo';
import PersonalInfo from '@components/PersonalInfo';
import AverageMarksChart from '@components/AverageMarksChart';


function ProfilePage(): React.ReactElement {

    const [studentData, setStudentData] = useState<IStudentData>();
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
    const loginData: IAuthContextValue = useContext(AuthContext);

    async function fetchData() {
        const res: IResponseData = await StudentService.getStudentData({
            surname: loginData.surname ? loginData.surname : '',
            studentCardNumber: loginData.studentCardNumber ? loginData.studentCardNumber : '',
        });

        if (res.code === 200) {
            setStudentData(res.data)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const logoutClickHandler = () => {
        dispatchAuth(
            setLogoutData()
        );
    }

    const toggleMenu = () => {
        setIsOpenMenu(prev => !prev);
    }



    return (
        <div className='wrapper profile-page__wrapper'>
            <nav className={`profile-page__nav${isOpenMenu ? ' open' : ''}`}>
                <div className='button-close-menu__box'>
                    <button
                        className='button-close-menu'
                        type='button'
                        onClick={toggleMenu}
                    >
                        <span />
                    </button>
                </div>
                <div className='nav__container'>
                    <div className='header-box profile-page__logo-box'>
                        <Logo />
                    </div>
                    <ul className='nav__list'>
                        <li className='nav__item active'>
                            Обзор
                        </li>
                        <li className='nav__item'>
                            Семестры
                        </li>
                    </ul>
                    <button className='nav__logout-box logout-button' onClick={logoutClickHandler} type='button'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512"><path d="M11.476,15a1,1,0,0,0-1,1v3a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H7.476a3,3,0,0,1,3,3V8a1,1,0,0,0,2,0V5a5.006,5.006,0,0,0-5-5H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H7.476a5.006,5.006,0,0,0,5-5V16A1,1,0,0,0,11.476,15Z" /><path d="M22.867,9.879,18.281,5.293a1,1,0,1,0-1.414,1.414l4.262,4.263L6,11a1,1,0,0,0,0,2H6l15.188-.031-4.323,4.324a1,1,0,1,0,1.414,1.414l4.586-4.586A3,3,0,0,0,22.867,9.879Z" /></svg>
                        Выйти
                    </button>
                </div>
            </nav>
            <main className='profile-page__main'>
                <header className='header header-box main-box'>
                    <div className='header__container'>
                        <button
                            className='button-open-menu'
                            type='button'
                            onClick={toggleMenu}
                        >
                            <span />
                            <span />
                            <span />
                        </button>
                        <h1 className='header__page-title'>
                            Обзор
                        </h1>
                        <SwitchThemeButton />
                    </div>
                </header>
                <main className='main-box main-box__wrapper'>
                    <div className='main-box__container'>
                        <WindowBlock
                            title='Студент'
                            subtitle='Персональные данные'
                            className='personal-info-block'
                            content={
                                <PersonalInfo personalData={studentData?.personalData} />
                            }
                        />
                        <WindowBlock
                            title='Оценки'
                            subtitle='Диаграмма отметок по их количеству'
                            className='marks-chart-block'
                            content={
                                <MarksChart marks={marks} />
                            }
                        />
                        <WindowBlock
                            title='Средний балл'
                            subtitle='График среднего балла по семестрам'
                            className='average-mark-chart-block'
                            content={
                                <div className='chart-container'>
                                    <AverageMarksChart averageMarks={averageMarks}/>
                                </div>
                            }
                        />
                        <WindowBlock
                            title='Прочая информация'
                            subtitle=''
                            className='other-info-block'
                            content={
                                <OtherInfo otherInfo={studentData?.personalData} />
                            }
                        />
                    </div>
                </main>
            </main>
        </div>
    )
}

export default ProfilePage;