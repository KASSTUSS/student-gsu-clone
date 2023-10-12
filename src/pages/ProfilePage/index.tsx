import React from 'react';

import './style.css';
import Logo from '@components/Logo';
import SwitchThemeButton from '@components/ui/SwitchThemeButton';
import WindowBlock from '@components/WindowBlock';
import OtherInfo from '@components/OtherInfo';
import AverageMarksChart from '@components/AverageMarksChart';
import MarksChart from '@components/MarksChart';
import PersonalInfo from '@components/PersonalInfo';
import { IResponseData, IStudentData, StudentService } from '@api/StudentService';
import { AuthContext, IAuthContextValue } from '@contexts/AuthContext';
import getCountsOfMarks from '@utils/getCountsOfMarks';
import getAverageMarks from '@utils/getAvareageMarks copy';
import NavigationMenu from '@components/NavigationMenu';
import BurgerMenu from '@components/BurgerMenu';
import LogoutButton from '@components/LogoutButton';

function ProfilePage(): React.ReactElement {
    
    const loginData: IAuthContextValue = React.useContext(AuthContext);

    const [studentData, setStudentData] = React.useState<IStudentData>();

    async function fetchData() {
        const res: IResponseData = await StudentService.getStudentData({
            surname: loginData.surname ? loginData.surname : '',
            studentCardNumber: loginData.studentCardNumber ? loginData.studentCardNumber : '',
        });

        if (res.code === 200) {
            setStudentData(res.data)
        }
    }

    React.useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="profile-page__wrapper">
            <aside className="aside-menu">
                <div className="logo-box">
                    <Logo />
                </div>
                <NavigationMenu />
                <LogoutButton />
            </aside>
            <main className="content-box">
                <div className="content-box__container">
                    <header className="header">
                        <div className="header__container">
                            <BurgerMenu />
                            <h1 className='title-page'>
                                Обзор
                            </h1>
                            <SwitchThemeButton />
                        </div>
                    </header>
                    <main className="main">
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
                                <MarksChart marks={getCountsOfMarks(studentData?.session)} />
                            }
                        />
                        <WindowBlock
                            title='Средний балл'
                            subtitle='График среднего балла по семестрам'
                            className='average-mark-chart-block'
                            content={
                                <div className='chart-container'>
                                    <AverageMarksChart averageMarks={getAverageMarks(studentData?.session)} />
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
                    </main>
                </div>
            </main>
        </div>
    )
}

export default ProfilePage;