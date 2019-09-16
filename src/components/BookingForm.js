import React from 'react'
import Rating from './Rating'
import DatePicker from 'react-datepicker'
import { withRouter } from 'react-router-dom';

import "react-datepicker/dist/react-datepicker.css"

class BookingForm extends React.Component {
    state = {
        checkIn: null,
        checkOut: null,
        guests: 1
    }

    checkInChanged = (date) => {
        this.setState({
            checkIn: date,
        })
    }

    checkOutChanged = (date) => {
        this.setState({
            checkOut: date,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        // react-router-dom stores the "history" of Routes you have visited in `this.props.history`
        // when you push to the array it adds to the end and becomes the "current page"
        // thus changing the location in the URL bar and causing routes to be rendered that match the new
        // location
        this.props.history.push({
            pathname: '/confirm',
            state: {
                place: this.props.place,
            }
        })
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    render() {
        return (
            <div className="sidebar booking">
                <div className="card shadow">
                    <div className="content large">
                        <h3>${this.props.place.price}<small>per night</small></h3>
                        <small>
                            <Rating rating={this.props.place.rating} />
                            <span>{this.props.place.reviews.length} Reviews</span>
                        </small>
                        <form className="small" onSubmit={this.handleSubmit}>
                            <div className="group">
                                <label>Dates</label>
                                <DatePicker selected={this.state.checkIn} onChange={this.checkInChanged}/>
                                <DatePicker selected={this.state.checkOut} onChange={this.checkOutChanged}/>
                            </div>
                            <div className="group">
                                <label>Guests</label>
                                <select name="guests" value={this.state.guests} onChange={this.handleInputChange}>
                                    {[...Array(this.props.place.guests)].map((_, idx) =>
                                        <option key={idx}>{idx + 1} {idx === 0 ? "guest" : "guests"}</option>
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

// withRouter lets us use this.props.history from a child component of a Route path
export default withRouter(BookingForm)