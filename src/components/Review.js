import React from 'react'
import Rating from './Rating'
import moment from 'moment'

class Review extends React.Component {
    render() {
        return (
            <div className="card review">
                <div className="content">
                    <div className="user">
                        <div className="avatar" style={{ backgroundImage: `url(${this.props.review.author.avatar})` }}></div>
                        <div className="name">
                            <small>{moment(this.props.review.date).format('D MMM YYYY')}</small>
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