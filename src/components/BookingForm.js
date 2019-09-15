import React from 'react'
import Rating from './Rating'
import DatePicker from 'react-datepicker'

import "react-datepicker/dist/react-datepicker.css"

class BookingForm extends React.Component {
    state = {
        checkIn: null,
        checkOut: null,
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
                                <DatePicker selected={this.state.checkIn} onChange={this.checkInChanged}/>
                                <DatePicker selected={this.state.checkOut} onChange={this.checkOutChanged}/>
                            </div>
                            <div className="group">
                                <label>Guests</label>
                                <select>
                                    {[...Array(this.props.guests)].map((_, idx) =>
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


export default BookingForm