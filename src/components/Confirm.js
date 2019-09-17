import React from 'react'
import StripeForm from './StripeForm'
import {Elements, StripeProvider} from 'react-stripe-elements'
import Navbar from './Navbar'
import Thumbnail from './Thumbnail'
import DatePicker from 'react-datepicker'



class Confirm extends React.Component {
	state = {
		days: 3, // Should be replaced by calculating days between
		         // check-in and check-out DatePickers
	}

	amount() {
		return this.state.days * this.props.location.state.place.price
	}

	render() {
		let place = this.props.location.state.place
		return <>
			<Navbar />
			<div className="grid medium">
				<div className="grid sidebar-left">
					<div className="sidebar">
						<Thumbnail place={place} />
					</div>
					<div className="content">
						<h2>Confirm Booking</h2>
						<form>
							<div className="group">
								<label>From</label>
								<DatePicker />
							</div>
							<div className="group">
								<label>To</label>
								<DatePicker />
							</div>
							<div className="group">
								<label>Guests</label>
								<select>
									{[...Array(place.guests)].map((_, idx) =>
										<option key={idx}>{idx + 1} {idx === 0 ? "guest" : "guests"}</option>
									)}
								</select>
							</div>
							<div className="group">
								<label>Total: 3 nights</label>
								<h2>${this.amount()}</h2>
							</div>
							<button className="primary">Confirm</button>
						</form>
						<hr />
						<button>Cancel</button>
					</div>
				</div>
				<StripeProvider apiKey={process.env.REACT_APP_STRIPE_SECRET}>
					<div className="stripe-form">
						<Elements>
							<StripeForm amount={this.amount()} title={place.title}/>
						</Elements>
					</div>
				</StripeProvider>
			</div>
		</>
	}
}

export default Confirm  