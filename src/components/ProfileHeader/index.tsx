import SwitchThemeButton from '@ui/SwitchThemeButton';
import React from 'react';
import './style.css';

function ProfileHeader(): React.JSX.Element {

    return (
        <header className='header header-box main-box'>
            <div className='header__container'>
                <h1 className='header__page-title'>
                    Обзор
                </h1>
                <SwitchThemeButton />
            </div>
        </header>
    )
}

export default ProfileHeader;