import React from 'react';
import IInputProps from './types';

function Input(props: IInputProps): React.JSX.Element {

    const {
        label,
        width,
        autofocus,
    } = props;

    return (
        <div 
            className='input__input-container'
            style={{ width: width || '100%' }}
        >
            <input
                className='input__input'
                type="text"
                placeholder=''
                autoFocus={autofocus}
            />
            <div
                className='input__label'
            >
                {label}
            </div>
        </div>
    )
}

export default Input;