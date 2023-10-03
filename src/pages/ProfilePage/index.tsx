import { IResponseData, IStudentData, StudentService } from '@api/StudentService';
import ShowContainer from '@components/ShowContainer';
import Window from '@components/Window';
import Button from '@components/ui/Button';
import { AuthContext, IAuthContextValue } from '@contexts/AuthContext';
import { setLogoutData } from '@contexts/AuthContext/actions';
import { dispatchAuth } from '@contexts/AuthContext/provider';
import React, { useContext, useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';

const getListOfNumbers = (count: number) => {
    const list = new Array(count);
    for (let i = 0; i < count; i++) {
        list[i] = i + 1;
    }
    return list;
};


function ProfilePage(): React.ReactElement {

    const [studentData, setStudentData] = useState<IStudentData>();
    const loginData: IAuthContextValue = useContext(AuthContext);

    const logoutHandler = () => {
        dispatchAuth(
            setLogoutData()
        )
    }

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
                    ++numOfMarks;
                    marks[mark.result - 1] = marks[mark.result - 1] + 1;
                    sumOfMarks += mark.result;
                }
            });
            averageMarks[session.sessionNumber - 1] = parseFloat((sumOfMarks / numOfMarks).toFixed(2));
        });

        for (let i = 0; i < averageMarks.length - 1; i++) {
            averageMarksProgress[i] = averageMarks[i + 1] - averageMarks[i]
        }
    }



    return (
        <>
            <div className='wrapper container-center-x'>
                <div className='profile-container-wrapper'>
                    <ShowContainer queue={1}
                        style={{
                            width: '100%'
                        }}
                    >
                        <Window width='100%'>
                            <div className='profile-header__container'>
                                <div className='logo-profile__container'>
                                    <h1 className='logo-profile__title'>Student.GSU</h1>
                                    <svg className='logo-profile__img' fill="#1572fe" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m24 8.48v11.52a1 1 0 0 1 -2 0v-8.248l-7.4 3.536a5 5 0 0 1 -2.577.694 5.272 5.272 0 0 1 -2.7-.739l-7.38-3.513a3.691 3.691 0 0 1 -.084-6.455c.027-.016.056-.031.084-.045l7.457-3.558a5.226 5.226 0 0 1 5.282.045l7.375 3.513a3.767 3.767 0 0 1 1.943 3.25zm-11.978 9.5a7.26 7.26 0 0 1 -3.645-.972l-4.377-2.089v2.7a5.007 5.007 0 0 0 3.519 4.778 15.557 15.557 0 0 0 4.481.603 15.557 15.557 0 0 0 4.481-.607 5.007 5.007 0 0 0 3.519-4.778v-2.691l-4.459 2.13a6.983 6.983 0 0 1 -3.519.928z" /></svg>
                                </div>
                                <Button width='130px' value='Выйти' onClick={logoutHandler} />
                            </div>
                        </Window>
                    </ShowContainer>
                    <div className='main-profile__wrapper'>
                        <ShowContainer queue={2}
                            style={{
                                width: '20%',
                                minWidth: '300px'
                            }}
                        >
                            <Window width='100%'>
                                <>
                                    <div className='window-title'>
                                        Персональная <br /> информация
                                    </div>
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
                            </Window>
                        </ShowContainer>
                        <ShowContainer queue={3}
                            style={{
                                width: '40%',
                                minWidth: '300px'
                            }}
                        >
                            <Window width='100%'>
                                <div className='profile-main__container'>
                                    <ReactECharts option={{
                                        title: {
                                            text: 'Диаграмма отметок',
                                            subtext: 'Количество отметок',
                                            x: 'center',

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
                                            formatter: "{a} <b>{b}</b> : {c} шт ({d}%)"
                                        },
                                        series: [
                                            {
                                                name: 'Отметка',
                                                type: 'pie',
                                                radius: '60%',
                                                center: ['50%', '60%'],
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
                                    }} style={{ width: '300px' }} />
                                </div>
                            </Window>
                        </ShowContainer>
                        <ShowContainer queue={4}
                            style={{
                                width: '40%',
                                minWidth: '300px'
                            }}
                            isLast
                        >
                            <Window width='100%'>
                                <div className='profile-main__container'>
                                    <ReactECharts option={{
                                        title: {
                                            text: 'Средний балл',
                                            subtext: 'График среднего балла за семестры',
                                            x: 'center',

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
                                                areaStyle: { normal: {} },
                                                data: averageMarks
                                            }
                                        ]
                                    }} style={{ width: '300px' }} />
                                </div>
                            </Window>
                        </ShowContainer>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfilePage;