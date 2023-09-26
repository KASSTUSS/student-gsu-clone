import HomePage from '@pages/HomePage';
import type RoutesList from './types';
import PATHS from '../paths';

const { HOME } = PATHS; 

const ROUTES_LIST: RoutesList  = [
    {
        path: HOME,
        element: <HomePage />,
    }
];

export default ROUTES_LIST;
