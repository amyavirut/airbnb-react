import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'


import '../styles/Cards.css'
import '../styles/Icons.css'

class Thumbnail extends React.Component {
    render() {
        return (
			<>
				<Link className="card link" to="/place">
					<div className="image" style={{backgroundImage: "url('https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg')"}}>
						<button className="icon">
							{ this.props.place.liked ? 
							<FontAwesomeIcon icon={solidHeart} color="tomato" /> : 
							<FontAwesomeIcon icon={emptyHeart} /> }
						</button>
					</div>
					<div className="content">
						<small className="meta">{this.props.place.roomType} • {this.props.place.rooms} ROOMS</small>
						<h2>{this.props.place.title}</h2>
						<span className="price">${this.props.place.price}/night</span>
						<span className="rating">
							<FontAwesomeIcon icon={faStar} />
							<FontAwesomeIcon icon={faStar} />
							<FontAwesomeIcon icon={faStar} />
							<FontAwesomeIcon icon={faStar} />
							<FontAwesomeIcon icon={faStar} />
							<span>{this.props.place.reviews} Reviews</span>
						</span>
						{ this.props.place.date ? <span className="date">{this.props.place.date}</span> : null}
					</div>
				</Link>
			</>
        )  
    }
}

export default Thumbnail