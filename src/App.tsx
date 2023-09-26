import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ROUTES_LIST from '@constants/routesList';
import { IRoute } from '@constants/routesList/types';

function App(): React.JSX.Element {

  return (
      <BrowserRouter>
        {ROUTES_LIST.map((route: IRoute) => (
          <Routes key={route.path}>
            <Route path={route.path} element={route.element} />
          </Routes>
        ))}
      </BrowserRouter>
  )
}

export default App
