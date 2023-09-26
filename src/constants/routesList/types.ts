import type { ReactElement, ReactNode } from 'react';

export interface IRoute {
  path: string;
  element: ReactElement | ReactNode[];
}

type RoutesList = IRoute[];

export default RoutesList;
