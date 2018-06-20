import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';

const approute = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/contact" component={Contact} />
  </Switch>
);

export default approute;
