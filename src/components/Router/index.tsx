import React from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import ROUTES_LIST from '@constants/routesList';
import { IRoute } from '@constants/routesList/types';
import { AuthContext, IAuthContextValue } from '@contexts/AuthContext';
import PATHS from '@constants/paths';

const { PROFILE, HOME } = PATHS;

function Router(): React.JSX.Element {

    const navigate = useNavigate();
    const location = useLocation();

    const authDataContext: IAuthContextValue = React.useContext(AuthContext);

    const checkAuth = () => {
        if (authDataContext.isAuth) {
            navigate(PROFILE)
        } else {
            navigate(HOME)
        }
    }

    React.useEffect(() => {
        checkAuth()
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
