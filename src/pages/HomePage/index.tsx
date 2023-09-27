import ShowContainer from '@components/ShowContainer';
import Window from '@components/Window';
import Button from '@components/ui/Button';
import Input from '@components/ui/Input';
import Line from '@components/ui/Line';
import React, { ReactElement } from 'react';

function HomePage(): ReactElement {

    React.useEffect(() => {
        document.title = 'Student.GSU - Вход'
    }, [])

    return (

        <div className='wrapper'>
            
                <div className='logo-login'>
                <ShowContainer queue={1}>
                    <div>
                        <h1>Student.GSU</h1>
                        <img src="/graduation.png" alt="logo icon" />
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
                        <Button value='Войти' />
                    </div>
                </Window>
            </ShowContainer>

        </div>
    )
}

export default HomePage;