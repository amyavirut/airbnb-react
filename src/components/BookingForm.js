import React from 'react'
import Rating from './Rating'

class BookingForm extends React.Component {
    render() {
        return (
            <div className="sidebar booking">
                <div className="card shadow">
                    <div className="content large">
                        <h3>${this.props.price}<small>per night</small></h3>
                        <small>
                            <Rating rating={this.props.rating} />
                            <span>{this.props.reviews} Reviews</span>
                        </small>
                        <form className="small">
                            <div className="group">
                                <label>Dates</label>
                                <input type="text" placeholder="Check-in" />
                                <input type="text" placeholder="Check-out" />
                            </div>
                            <div className="group">
                                <label>Guests</label>
                                <select>
                                    {[...Array(this.props.guests)].map((_, idx) =>
                                        <option>{idx + 1} {idx === 0 ? "guest" : "guests"}</option>
                                    )}
                                </select>
                            </div>
                            <div className="group">
                                <button className="secondary full">Book this place</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


export default BookingForm