import React from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import ROUTES_LIST from '@constants/routesList';
import { IRoute } from '@constants/routesList/types';
import { AuthContext, IAuthContextValue } from '@contexts/AuthContext';
import PATHS from '@constants/paths';
import { IRoutingContextValue, RoutingContext } from '@contexts/RoutingContext';

const { PROFILE, HOME } = PATHS;

export let checkAuth: () => void;

function Router(): React.JSX.Element {

    const [skipFirstRender, setSkipFirstRender] = React.useState<boolean>(true);

    const navigate = useNavigate();
    const location = useLocation();

    const authDataContext: IAuthContextValue = React.useContext(AuthContext);
    const routingContext: IRoutingContextValue = React.useContext(RoutingContext);

    checkAuth = () => {
        if (authDataContext.isAuth) {
            navigate(PROFILE)
        } else {
            navigate(HOME)
        }
    }

    React.useEffect(() => {
        if (skipFirstRender) {
            setSkipFirstRender(false);
        } else {
            routingContext.animationDone(true);
        }

    }, [authDataContext, location.state])

    React.useEffect(() => {
        checkAuth()
    }, [])

    return (
        <Routes>
            {ROUTES_LIST.map((route: IRoute) => (
                <Route key={route.path} path={route.path} element={route.element} />
            ))}
        </Routes>
    )
}

export default Router
