import React from 'react';
import Link from 'gatsby-link';
import bg from '../img/bg.jpg';

export default () =>
  <div>
    <img src={bg} alt="bg" />
    <p>Hello world from my home page</p>
    <Link to="/about/">About</Link>
  </div>;
