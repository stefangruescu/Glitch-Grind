import React from 'react';
import { Route } from 'react-router-dom';

import Home from './pages/Home';

import GlobalStyles from './components/GlobalStyles';
import Navbar from './components/navbar';

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Route path={['/game/:id', '/']}>
        <Home />
      </Route>
    </>
  );
}

export default App;
