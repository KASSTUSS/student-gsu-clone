import React from 'react';

import './style.css';
import Logo from '@components/Logo';
import SwitchThemeButton from '@components/ui/SwitchThemeButton';
import { AuthContext, IAuthContextValue } from '@contexts/AuthContext';
import NavigationMenu from '@components/NavigationMenu';
import BurgerMenu from '@components/BurgerMenu';
import LogoutButton from '@components/LogoutButton';
import WindowBlock from '@components/WindowBlock';

const getNormalResult = (result: true | false | null | number): 'Зачет' | 'Незачет' | 'Неизвестно' | number => {
    switch (result) {
        case true: return 'Зачет';
        case false: return 'Незачет';
        case null: return 'Неизвестно';
        default: return result;
    }
}

function SessionsPage(): React.ReactElement {

    const studentData: IAuthContextValue = React.useContext(AuthContext);

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
                                Сессии
                            </h1>
                            <SwitchThemeButton />
                        </div>
                    </header>
                    <main className="main">
                        {
                            studentData.studentData?.session.map(session => (
                                <WindowBlock subtitle='' key={session.sessionNumber} title={`${session.sessionNumber.toString()} сессия`} content={
                                    <ul>
                                        {session.marks.map((mark, index) => (
                                            <li className='mark' key={index}>
                                                <span>{`${mark.object}`}</span>
                                                <span>{`${getNormalResult(mark.result)}`}</span>
                                            </li>
                                        ))}
                                    </ul>
                                } />
                            ))
                        }
                    </main>
                </div>
            </main>
        </div>
    )
}

export default SessionsPage;