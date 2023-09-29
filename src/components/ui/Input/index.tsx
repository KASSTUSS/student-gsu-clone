import React from 'react';
import IInputProps from './types';

function Input(props: IInputProps): React.JSX.Element {

    const [valueInput, setValueInput] = React.useState('');

    const {
        label,
        setValue,
        width,
        autofocus,
    } = props;

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueInput(e.target.value)
        setValue(e.target.value)
    }

    return (
        <div 
            className='input__input-container'
            style={{ width: width || '100%' }}
        >
            <input
                className='input__input'
                type="text"
                placeholder=''
                value={valueInput}
                onChange={onChangeInput}
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