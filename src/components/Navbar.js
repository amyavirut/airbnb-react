import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import '../styles/Buttons.css'


class Navbar extends React.Component {
    render() {
        return (
        <nav>
			<Link to="/" className="logo"/>
			<div class="profile">
				<Link to="/profile" className="button">
					<div className="avatar" style={{backgroundImage: "url('https://randomuser.me/api/portraits/men/9.jpg')" }} />					<span>Tony</span>
				</Link>
			</div>
        </nav>
        )
    }
}

export default Navbar