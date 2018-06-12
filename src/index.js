import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

const App = () => (
  <div>
    <Header appname="Test.com" />
    <Home pagename="Home" />
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
