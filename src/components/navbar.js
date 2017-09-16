import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>main</Link></li>
        <li><Link to='/events'>events</Link></li>
        <li><Link to='/classroom'>classroom</Link></li>
      </ul>
    </nav>
  </header>
)

export default Navbar;