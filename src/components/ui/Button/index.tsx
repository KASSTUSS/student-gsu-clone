/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { LegacyRef } from 'react';
import IButtonProps from './types';

function Button(props: IButtonProps): React.JSX.Element {

    const {
        value,
        width,
        onClick,
    } = props;

    const buttonRef:LegacyRef<HTMLAnchorElement> | undefined = React.useRef<HTMLAnchorElement>(null);

    const [click, setClick] = React.useState(false)
    const [size, setSize] = React.useState(200)
    const [coordinateClick, setCoordinateClick] = React.useState({
        x: '0',
        y: '0',
    });

    const buttonClickHandler = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {

        onClick();
        setClick(true);

        const rect: DOMRect | undefined = buttonRef.current?.getBoundingClientRect()
        const mValue = Math.max(buttonRef.current?.clientWidth ?? 0, buttonRef.current?.clientHeight ?? 0)


        if(rect !== undefined) {


            const x = `${e.clientX - rect.left - (mValue / 2) }px`;
            const y = `${e.clientY - rect.top - (mValue / 2)}px`;

            setCoordinateClick({
                x, y
            })
        }

    }

    React.useEffect(() => {
        if (click) {
            setTimeout(() => {
                setClick(false)
            }, 850)
        }
    }, [click])

    React.useEffect(() => {
        setSize(Math.max(buttonRef.current?.clientWidth ?? 0, buttonRef.current?.clientHeight ?? 0))
    }, [])

    return (
        <a
            ref={buttonRef}
            className='button'
            style={{ width: width || '100%' }}
            onClick={(e) => {
                buttonClickHandler(e)
            }}
        >
            {value}
            {
                click && (
                    <div
                        className='button-pulse'
                        style={{
                            width: `${size}px`,
                            height: `${size}px`,
                            top: coordinateClick.y,
                            left: coordinateClick.x,
                        }}
                    />
                )
            }
        </a>
    )
}

export default Button;