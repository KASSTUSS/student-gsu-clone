
import ProfilePage from '@pages/ProfilePage';
import HomePage from '@pages/HomePage';
import type RoutesList from './types';
import PATHS from '../paths';

const { HOME, PROFILE } = PATHS; 

const ROUTES_LIST: RoutesList  = [
    {
        path: HOME,
        element: <HomePage />,
    },
    {
        path: PROFILE,
        element: <ProfilePage />,
    }
];

export default ROUTES_LIST;
