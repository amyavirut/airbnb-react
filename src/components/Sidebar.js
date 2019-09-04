import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Sidebar.css'

class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
					<ul>
						<li>
                            <NavLink to="/profile" exact>Profile</NavLink>
						</li>
						<li>
                            <NavLink to="/profile/bookings">Bookings</NavLink>
						</li>
						<li>
                            <NavLink to="/profile/favorites">Favorites</NavLink>
						</li>
						<li>
                            <NavLink to="/profile/host">Host</NavLink>
						</li>
					</ul>
			</div>
        )
    }
}

export default Sidebar 