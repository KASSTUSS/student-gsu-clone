import React from 'react';
import IWindowProps from './types';

function Window(props: IWindowProps): React.JSX.Element {

    const {
        children,
        width,
        height,
    } = props;

    return (
        <div 
            className='window-block' 
            style={{
                width,
                height: height || 'auto'
            }}
         >
            {children}
         </div>
    )
}

export default Window;