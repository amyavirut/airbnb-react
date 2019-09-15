import React from 'react'
import { Link } from 'react-router-dom'
import Rating from './Rating'
import LikeButton from './LikeButton';

class Thumbnail extends React.Component {
	render() {
		return (
			<Link className="card link" to={`/place/${this.props.place._id}`}>
				<div className="image" style={{ backgroundImage: `url(${this.props.place.image})` }}>
					<LikeButton liked={this.props.place.liked} />
				</div>
				<div className="content">
					<small className="meta">{this.props.place.type.name} • {this.props.place.bedrooms} ROOMS</small>
					<h2>{this.props.place.title}</h2>
					<span className="price">${this.props.place.price}/night</span>
					<span className="rating">
						<Rating rating={this.props.place.rating} />
						<span>{this.props.place.reviews} Reviews</span>
					</span>
					{this.props.place.date ? <span className="date">{this.props.place.date}</span> : null}
				</div>
			</Link>
		)
	}
}

export default Thumbnail