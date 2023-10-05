import { IResponseData, IStudentData, StudentService } from '@api/StudentService';
import { AuthContext, IAuthContextValue } from '@contexts/AuthContext';
import React, { useContext, useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';

import './style.css';
import Logo from '@components/Logo';
import WindowBlock from '@components/WindowBlock';
import { dispatchAuth } from '@contexts/AuthContext/provider';
import { setLogoutData } from '@contexts/AuthContext/actions';
import SwitchThemeButton from '@components/ui/SwitchThemeButton';

const getListOfNumbers = (count: number) => {
    const list = new Array(count);
    for (let i = 0; i < count; i += 1) {
        list[i] = i + 1;
    }
    return list;
};


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

    const marks = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ];

    let averageMarks = [];
    let averageMarksProgress = [];

    if (studentData) {

        averageMarks = new Array(studentData.session.length);
        averageMarksProgress = new Array(studentData.session.length);

        studentData.session.forEach(session => {
            let sumOfMarks = 0;
            let numOfMarks = 0;
            session.marks.forEach(mark => {
                if (typeof mark.result === 'number') {
                    numOfMarks += 1;
                    marks[mark.result - 1] = marks[mark.result - 1] + 1;
                    sumOfMarks += mark.result;
                }
            });
            averageMarks[session.sessionNumber - 1] = parseFloat((sumOfMarks / numOfMarks).toFixed(2));
        });

        for (let i = 0; i < averageMarks.length - 1; i += 1) {
            averageMarksProgress[i] = averageMarks[i + 1] - averageMarks[i]
        }
    }

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
                <div className='main-box main-box__wrapper'>
                    <div className='main-box__container'>
                        <WindowBlock
                            title='Студент'
                            subtitle='Персональные данные'
                            className='personal-info-block'
                            content={
                                <>
                                    <div className='profile-main__container personal_info'>
                                        <div>
                                            <div className='label_info'>ФИО:</div>
                                            <div className='profile__fullname'>
                                                <span>
                                                    {studentData?.personalData.surname}
                                                </span>
                                                <span>
                                                    {studentData?.personalData.name}
                                                </span>
                                                <span>
                                                    {studentData?.personalData.patronymic}
                                                </span>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='label_info'>Факультет:</div>
                                            <div className='value_info'>{studentData?.personalData.faculty}</div>
                                        </div>
                                        <div>
                                            <div className='label_info'>Специальность:</div>
                                            <div className='value_info'>{studentData?.personalData.specialty}</div>
                                        </div>
                                        <div>
                                            <div className='label_info'>Группа:</div>
                                            <div className='value_info'>{studentData?.personalData.group}</div>
                                        </div>
                                    </div>
                                </>
                            }
                        />
                        <WindowBlock
                            title='Оценки'
                            subtitle='Диаграмма отметок по их количеству'
                            className='marks-chart-block'
                            content={
                                <ReactECharts option={{
                                    darkMode: true,
                                    title: {
                                        show: false,
                                    },
                                    color: [
                                        '#B21700',
                                        '#D5591E',
                                        '#FF593D',
                                        '#FF737E',
                                        '#FF9B69',
                                        '#FFD84B',
                                        '#D7FF3F',
                                        '#83FF69',
                                        '#00FFC2',
                                        '#00FFFF',
                                    ].reverse(),
                                    tooltip: {
                                        trigger: 'item',
                                        formatter: "{a} <b>{b}</b> :<br>{c} шт ({d}%)"
                                    },
                                    series: [
                                        {
                                            name: 'Отметка',
                                            type: 'pie',
                                            radius: 80,
                                            label: {
                                                show: true,
                                                fontSize: 10,
                                                textBorderColor: 'transparent',
                                                borderRadius: 5,
                                                backgroundColor: '#fff',
                                                padding: 5,
                                                color: '#242529',
                                                fontWeight: 'bold',
                                            },
                                            center: ['50%', '50%'],
                                            data: marks.map((value, index) => ({
                                                value,
                                                name: index + 1,
                                            })).filter(value => value.value > 0).reverse(),
                                            itemStyle: {
                                                emphasis: {
                                                    shadowBlur: 15,
                                                    shadowOffsetX: 0,
                                                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                                                }
                                            }
                                        }
                                    ]
                                }} style={{ width: '100%' }} />
                            }
                        />
                        <WindowBlock
                            title='Средний балл'
                            subtitle='График среднего балла по семестрам'
                            className='average-mark-chart-block'
                            content={
                                <div className='chart-container'>
                                    <ReactECharts option={{
                                        darkMode: true,
                                        title: {
                                            show: false,
                                        },
                                        tooltip: {
                                            trigger: 'axis',
                                            formatter: "{a} <b>{b}</b>: <br> <i>Средний балл:</i> <b>{c}</b>"
                                        },
                                        feature: {
                                            saveAsImage: {}
                                        },
                                        xAxis: [
                                            {
                                                type: 'category',
                                                boundaryGap: false,
                                                data: getListOfNumbers(averageMarks.length).map((i) => `Семестр ${i}`)
                                            }
                                        ],
                                        yAxis: [
                                            {
                                                type: 'value',
                                                scale: true,
                                            }
                                        ],
                                        series: [
                                            {
                                                name: '',
                                                type: 'line',
                                                symbol: 'circle',
                                                symbolSize: 7,
                                                areaStyle: { normal: {} },
                                                data: averageMarks,
                                                label: {
                                                    show: true,
                                                    fontSize: 10,
                                                    textBorderColor: 'transparent',
                                                    borderRadius: 5,
                                                    backgroundColor: '#fff',
                                                    padding: 5,
                                                    color: '#242529',
                                                    fontWeight: 'bold',
                                                }
                                            }
                                        ]
                                    }} style={{ width: '100%' }} />
                                </div>
                            }
                        />
                        <WindowBlock
                            title='Прочая информация'
                            subtitle=''
                            className='other-info-block'
                            content={
                                <>
                                    <div className='profile-main__container personal_info'>
                                        <div>
                                            <div className='label_info'>ФИО:</div>
                                            <div className='profile__fullname'>
                                                <span>
                                                    {studentData?.personalData.surname}
                                                </span>
                                                <span>
                                                    {studentData?.personalData.name}
                                                </span>
                                                <span>
                                                    {studentData?.personalData.patronymic}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            }
                        />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default ProfilePage;