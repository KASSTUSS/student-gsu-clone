import React from 'react';
import { SHOW_DELAY, SHOW_DUR } from '@constants/animation';
import { IRoutingContextValue, RoutingContext } from '@contexts/RoutingContext';
import { checkAuth } from '@components/Router';
import IShowContainerProps from './types';

function ShowContainer(props: IShowContainerProps): React.JSX.Element {

    const [loading, setLoading] = React.useState<boolean>(true)
    const [hide, setHide] = React.useState<boolean>(false);

    const {
        children,
        queue,
        style,
        isLast,
    } = props;

    const routingContext: IRoutingContextValue = React.useContext(RoutingContext);

    React.useLayoutEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, (SHOW_DELAY + SHOW_DUR) * queue + 300);
    }, [queue])

    React.useEffect(() => {
        if (routingContext.willNavigate) {
            setTimeout(() => {
                setHide(true);
            }, (SHOW_DELAY + SHOW_DUR) * (queue - 1));
            setTimeout(() => {  
                routingContext.animationDone(false);
                if(isLast) setTimeout(() => {
                    checkAuth()
                }, 150);
            }, (SHOW_DELAY + SHOW_DUR) * (queue));
        }
    }, [routingContext, routingContext.willNavigate])

    return (
        <>
            {!loading && (
                <div
                    className={`show-container${hide ? ' hide' : ' show'}`}
                    style={style}
                >
                    {children}
                </div>
            )
            }
        </>

    )
}

export default ShowContainer;