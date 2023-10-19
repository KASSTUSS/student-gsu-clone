import LoginPage from '@pages/LoginPage';
import MainPage from '@pages/MainPage';
import SessionsPage from '@pages/SessionsPage';
import type RoutesList from './types';
import PATHS from '../paths';

const { LOGIN, MAIN, SESSIONS } = PATHS;

const ROUTES_LIST: RoutesList = [
    {
        path: LOGIN,
        element: <LoginPage />,
    },
    {
        path: MAIN,
        element: <MainPage />,
    },
    {
        path: SESSIONS,
        element: <SessionsPage />,
    }
];

export default ROUTES_LIST;
