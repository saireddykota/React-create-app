import React from 'react';
import { Link } from 'react-router-dom';
import './Header.less';

const Header = () => (
  <header>
    Our app name is
    <Link to="/contact">go to Contact</Link>
  </header>
);

export default Header;
