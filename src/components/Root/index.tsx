import React from 'react';

function Root({children}: {children: React.JSX.Element}): React.JSX.Element {

    return (
        <>
            {children}
            <div className='animate-background' >
                <div/><div/><div/>
            </div>
        </>
        
    )
}

export default Root;