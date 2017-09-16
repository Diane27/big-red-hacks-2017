import React from 'react'
import { NavLink  } from 'react-router-dom'


const Navbar = () => (
	<div>
	  <nav className="navbar fixed-top navbar-light bg-faded">
		  <ul className="nav nav-pills">
			<NavLink  to="/" className="navbar-brand">BIG RED HACKS 2017</NavLink >
		  	<li className="nav-item" >
		      <NavLink  exact to='/' className="nav-link" activeClassName="active">Main</NavLink >
		    </li>
		    <li className="nav-item">
		      <NavLink  exact to='/events' className="nav-link" activeClassName="active">Events</NavLink >
		    </li>
				<li className="nav-item">
		      <NavLink  exact to='/classroom' className="nav-link" activeClassName="active">Classrooms</NavLink>
		    </li>
		  </ul>
	   </nav>
	</div>
)

export default Navbar;