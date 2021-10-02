import React from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import browserHistory from '../../browser-history';
import ConverterPage from '../pages/converter/converter';
import './app.scss';

function App() {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={'/'}>
          <ConverterPage />
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
