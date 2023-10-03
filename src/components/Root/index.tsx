import React from 'react';
import '../../themes.css';

function Root({children}: {children: React.JSX.Element}): React.JSX.Element {

    return (
        <>
            {children}
        </>
        
    )
}

export default Root;