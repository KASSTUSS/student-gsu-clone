import React from 'react';
import './style.css';
import { IThemeContextValue, ThemeContext } from '@contexts/ThemeContext';

function SwitchThemeButton(): React.JSX.Element {

    const themeContext: IThemeContextValue = React.useContext(ThemeContext);
    const indutId = React.useId();

    const chengeHandler = () => {
        themeContext.toggleTheme();
    }

    return (
        <div className="theme-switch-wrapper">
            <label htmlFor={indutId}>
                <input type='checkbox' className="checkbox" id={indutId} onChange={chengeHandler} checked={themeContext.theme === 'dark'} />
                <div className="slider-wrapper">
                    <div className="theme-btn-slider" />
                    <span className="star star-1" />
                    <span className="star star-2" />
                    <span className="star star-3" />
                    <span className="star star-4" />
                    <span className="star star-5" />
                    <span className="star star-6" />
                </div>
            </label>
        </div>
    )
}

export default SwitchThemeButton;