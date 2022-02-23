import React from 'react';
import { Link } from 'gatsby';

const Contact = () => {
  return (
    <>
      <nav>
        <Link to='/about' activeStyle={{ color: 'red' }} activeClassName='active'>About</Link>
        <Link to='/contact' activeStyle={{ color: 'red' }} activeClassName='active'>Contact</Link>
      </nav>

      <h1>Contact</h1>
    </>
  )
}

export default Contact;