import React from 'react'
import '../styles/Cards.css'
import '../styles/Icons.css'

class Thumbnail extends React.Component {
    render() {
        return (
            <a className="card link" href="place.html">
				<div className="image" style={{backgroundImage: "url('https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg')"}}>
					<button className="icon">
						<i className="far fa-heart"></i>
					</button>
				</div>
				<div className="content">
					<small className="meta">{this.props.place.roomType} • {this.props.place.rooms} ROOMS</small>
					<h2>{this.props.place.title}</h2>
					<span className="price">${this.props.place.price}/night</span>
					<span className="rating">
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="far fa-star"></i>
						<span>{this.props.place.reviews} Reviews</span>
					</span>
					{ this.props.place.date ? <span className="date">{this.props.place.date}</span> : null}
				</div>
			</a>
        )  
    }
}

export default Thumbnail