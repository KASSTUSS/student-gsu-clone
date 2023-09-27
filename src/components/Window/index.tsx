import React from 'react';
import IWindowProps from './types';

function Window(props: IWindowProps): React.JSX.Element {

    const [loading, setLoading] = React.useState(true)

    const {
        children,
        width,
        height,
    } = props;

    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 50)
    }, [])

    return (
        <>
            {!loading && (
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
        </>

    )
}

export default Window;