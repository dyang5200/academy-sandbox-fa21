import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Ashwin from './pages/Ashwin';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/ashwin" component={Ashwin} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
