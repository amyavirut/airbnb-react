import React from 'react'
import Rating from './Rating'

class Review extends React.Component {
    props = {
        review: {
            date: "27 July 2019",
            name: "Amanda",
            avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
            rating: 3,
            content: "It was beyond my imagination that my AirBnB experience could be better than a 5 star resort hotel. It is one of the most beautiful villa that I have had stayed so far in the many countries travelled so far. The pictures have not sufficiently described the details of the place."
        }
    }
    render() {
        return (
            <div className="card review">
                <div className="content">
                    <div className="user">
                        <div className="avatar" style={{ backgroundImage: `url(${this.props.review.author.avatar})` }}></div>
                        <div className="name">
                            <small>{this.props.review.date}</small>
                            <span>{this.props.review.author.name}</span>
                        </div>
                    </div>
                    <div className="rating">
                        <Rating rating={this.props.review.rating}/>
                    </div>
                    <p>{this.props.review.content}</p>
                </div>
            </div>
        )
    }
}

export default Review