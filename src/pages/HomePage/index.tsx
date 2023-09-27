import Window from '@components/Window';
import Button from '@components/ui/Button';
import Input from '@components/ui/Input';
import Line from '@components/ui/Line';
import { ReactElement } from 'react';

function HomePage(): ReactElement {
    return (
        <div className='wrapper'>
            <Window width='275px'>
                <div className='container-center-x login-container'>
                    <h1 className='login-title'>Вход</h1>
                    <Input label='Фамилия' />
                    <Input label='Номер студенческого' />
                    <Line />
                    <Button value='Войти' />
                </div>
            </Window>
        </div>
    )
}

export default HomePage;