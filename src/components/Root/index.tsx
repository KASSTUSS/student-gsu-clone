import React from 'react';

function Root({children}: {children: React.JSX.Element}): React.JSX.Element {

    return (
        <>
            {children}
        </>
    )
}

export default Root;