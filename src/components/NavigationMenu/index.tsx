import React from 'react';

import './style.css';
import { Link } from 'react-router-dom';
import PATHS from '@constants/paths';

const { MAIN, SESSIONS } = PATHS;

function NavigationMenu(): React.JSX.Element {

    const currentLocation = window.location.href.split('/').at(-1);

    return (
        <nav className="navigation-menu">
            <Link className={`navigation-menu__item${currentLocation === 'main' ? ' navigation-menu__item_active' : ''}`} to={MAIN}>Главная</Link>
            <Link className={`navigation-menu__item${currentLocation === 'sessions' ? ' navigation-menu__item_active' : ''}`} to={SESSIONS}>Сессии</Link>
        </nav>
    )
}

export default NavigationMenu;