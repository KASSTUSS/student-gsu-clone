import Alert from '@components/Alert';
import ShowContainer from '@components/ShowContainer';
import Window from '@components/Window';
import Button from '@components/ui/Button';
import Input from '@components/ui/Input';
import Line from '@components/ui/Line';
import React, { ReactElement, useState } from 'react';

function HomePage(): ReactElement {

    const [click, setClick] = useState(false)

    React.useEffect(() => {
        document.title = 'Student.GSU - Вход'
    }, [])

    const clickLoginHandler = (): void => {
        setClick(true)
    }

    return (
        <>
            <Alert text='Такой студент не найден!' icon='/circle-xmark.svg' active={click} setActive={setClick} />
            <div className='wrapper'>
                <div className='logo-login'>
                    <ShowContainer queue={1}>
                        <div className='logo-login__container'>
                            <h1>Student.GSU</h1>
                            <svg className='logo-login__img' fill="#1572fe" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m24 8.48v11.52a1 1 0 0 1 -2 0v-8.248l-7.4 3.536a5 5 0 0 1 -2.577.694 5.272 5.272 0 0 1 -2.7-.739l-7.38-3.513a3.691 3.691 0 0 1 -.084-6.455c.027-.016.056-.031.084-.045l7.457-3.558a5.226 5.226 0 0 1 5.282.045l7.375 3.513a3.767 3.767 0 0 1 1.943 3.25zm-11.978 9.5a7.26 7.26 0 0 1 -3.645-.972l-4.377-2.089v2.7a5.007 5.007 0 0 0 3.519 4.778 15.557 15.557 0 0 0 4.481.603 15.557 15.557 0 0 0 4.481-.607 5.007 5.007 0 0 0 3.519-4.778v-2.691l-4.459 2.13a6.983 6.983 0 0 1 -3.519.928z" /></svg>
                        </div>
                    </ShowContainer>
                </div>
                <ShowContainer queue={2}>
                    <Window width='275px'>
                        <div className='container-center-x login-container'>
                            <h1 className='login-title'>Вход</h1>
                            <Input label='Фамилия' />
                            <Input label='Номер студенческого' />
                            <Line />
                            <Button value='Войти' onClick={clickLoginHandler} />
                        </div>
                    </Window>
                </ShowContainer>

            </div></>
    )
}

export default HomePage;