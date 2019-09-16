import React from 'react'
import { Link } from 'react-router-dom'
import Rating from './Rating'
import LikeButton from './LikeButton';

class Thumbnail extends React.Component {
	image() {
		if (this.props.place.images) {
			return this.props.place.images[0]
		}
		return this.props.place.image
	}

	reviews() {
		if (Array.isArray(this.props.place.reviews)) {
			return this.props.place.reviews.length
		}
		return this.props.place.reviews
	}

	// Should be replaced by proper logic once liked using the users route
	liked() {
		return this.props.place.liked !== undefined ? this.props.place.liked : false
	}

	render() {
		return (
			<Link className="card link" to={`/place/${this.props.place._id}`}>
				<div className="image" style={{ backgroundImage: `url(${this.image()})` }}>
					<LikeButton liked={this.props.place.liked} />
				</div>
				<div className="content">
					<small className="meta">{this.props.place.type.name} • {this.props.place.bedrooms} ROOMS</small>
					<h2>{this.props.place.title}</h2>
					<span className="price">${this.props.place.price}/night</span>
					<span className="rating">
						<Rating rating={this.props.place.rating} />
						<span>{this.reviews()} Reviews</span>
					</span>
					{this.props.place.date ? <span className="date">{this.props.place.date}</span> : null}
				</div>
			</Link>
		)
	}
}

export default Thumbnail