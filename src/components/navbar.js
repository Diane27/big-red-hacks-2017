import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => (
	<div>
	  <nav className="navbar fixed-top navbar-light bg-faded">
		  <Link to="/" className="navbar-brand">BIG RED HACKS 2017</Link>
		  <ul className="nav nav-pills ml-auto">
		  	<li className="nav-item active">
		      <Link to='/' className="nav-link active">Main</Link>
		    </li>
		    <li className="nav-item">
		      <Link to='/events' className="nav-link">Events</Link>
		    </li>
				<li className="nav-item">
		      <Link to='/classroom' className="nav-link">Classrooms</Link>
		    </li>
		  </ul>
	   </nav>
	</div>
)

export default Navbar;