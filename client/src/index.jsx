import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Ashwin from './pages/Ashwin';
import Danielle from './pages/Danielle';
import Aaron from './pages/Aaron';
import Anthony from './pages/Anthony';
import Eesha from './pages/Eesha';
import Ellie from './pages/Ellie';
import Grace from './pages/Grace';
import Jessica from './pages/Jessica';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/ashwin" component={Ashwin} />
        <Route path="/danielle" component={Danielle} />
        <Route path="/aaron" component={Aaron} />
        <Route path="/anthony" component={Anthony} />
        <Route path="/eesha" component={Eesha} />
        <Route path="/ellie" component={Ellie} />
        <Route path="/grace" component={Grace} />
        <Route path="/jessica" component={Jessica} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
