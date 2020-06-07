import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';
import Sucesss from './pages/Success';


const Routes = () => {
  return (
    <BrowserRouter>
      < Route component={Home} path="/" exact />
      < Route component={CreatePoint} path="/create-point" />
      < Route component={Sucesss} path="/success" />

    </BrowserRouter>
  );
}

export default Routes;