import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Approute from './routes';

const App = () => (
  <div>
    <Header appname="Test.com" />
    <Approute />
  </div>
);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
