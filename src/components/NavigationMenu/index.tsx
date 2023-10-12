import React from 'react';

import './style.css';
import { Link } from 'react-router-dom';

function NavigationMenu(): React.JSX.Element {

    return (
        <nav className="navigation-menu">
            <Link className='navigation-menu__item navigation-menu__item_active' to='/profile'>Главная</Link>
            <Link className='navigation-menu__item' to='/profile'>Семестры</Link>
        </nav>
    )
}

export default NavigationMenu;