import Router from '@components/Router';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

function App(): React.JSX.Element {

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>

  )
}

export default App
