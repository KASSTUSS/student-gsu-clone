import React from 'react';
import './style.css';
import { IThemeContextValue, ThemeContext } from '@contexts/ThemeContext';

function SwitchThemeButton(): React.JSX.Element {
    
    const themeContext: IThemeContextValue = React.useContext(ThemeContext);

    const clickHandler = () => {
        themeContext.toggleTheme();
    }

    return (
        <button
            className='switch-theme-button'
            onClick={clickHandler}
            type='button'
        >
            🔆
        </button>
    )
}

export default SwitchThemeButton;