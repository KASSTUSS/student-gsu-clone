import React from 'react';
import { CSSTransition } from 'react-transition-group';

import './style.css';
import Logo from '@components/Logo';
import NavigationMenu from '@components/NavigationMenu';
import LogoutButton from '@components/LogoutButton';

function BurgerMenu(): React.JSX.Element {

    const [checked, setChecked] = React.useState<boolean>(false);

    const backgroundRef = React.useRef(null);
    const contentRef = React.useRef(null);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked);
    }

    return (
        <>
            <div className="burger-button">
                <label className={`fancy-burger${checked ? ' open' : ''}`}>
                    <input onChange={changeHandler} className="fancy-burger__checkbox" type="checkbox" />
                    <span className="rectangle rectangle--top rectangle--small" />
                    <span className="rectangle rectangle--middle" />
                    <span className="rectangle rectangle--bottom rectangle--small" />
                </label>
            </div>
            <CSSTransition
                in={checked}
                nodeRef={backgroundRef}
                timeout={400}
                classNames="burger-menu__background"
                unmountOnExit
            >
                <div ref={backgroundRef} className='burger-menu__background' />

            </CSSTransition>
            <CSSTransition
                in={checked}
                nodeRef={contentRef}
                timeout={400}
                classNames="burger-menu__content"
                unmountOnExit
            >
                <div ref={contentRef} className="burger-menu__content">
                    <Logo />
                    <NavigationMenu />
                    <LogoutButton />
                </div>
            </CSSTransition>
        </>
    )
}

export default BurgerMenu;