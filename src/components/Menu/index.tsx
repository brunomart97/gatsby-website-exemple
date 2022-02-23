import React from 'react';
import { Link } from 'gatsby';

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link
              to='/'
              className="nav-link"
              activeStyle={{ color: '#fff' }}
              activeClassName='active'
            >Home</Link>
          </li>
          <li className="nav-item">
            <Link
              to='/about'
              className="nav-link"
              activeStyle={{ color: '#fff' }}
              activeClassName='active'
            >About</Link>
          </li>
          <li className="nav-item">
            <Link
              to='/contact'
              className="nav-link"
              activeStyle={{ color: '#fff' }}
              activeClassName='active'
            >Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Menu;