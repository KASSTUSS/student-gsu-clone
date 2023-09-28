import React from 'react';
import { SHOW_DELAY, SHOW_DUR } from '@constants/animation';
import IShowContainerProps from './types';

function ShowContainer(props: IShowContainerProps): React.JSX.Element {

    const [loading, setLoading] = React.useState(true)

    const {
        children,
        queue
    } = props;

    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, (SHOW_DELAY + SHOW_DUR) * queue + 300)
    }, [queue])

    return (
        <>
            {!loading && (
                <div
                    className='show-container'
                >
                    {children}
                </div>
            )
            }
        </>

    )
}

export default ShowContainer;