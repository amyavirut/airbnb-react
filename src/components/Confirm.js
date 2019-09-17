import React from 'react'
import StripeForm from './StripeForm'
import {Elements, StripeProvider} from 'react-stripe-elements'
import Navbar from './Navbar'
import Thumbnail from './Thumbnail'
import DatePicker from 'react-datepicker'



class Confirm extends React.Component {
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
								<h2>$1,050</h2>
							</div>
							<button className="primary">Confirm</button>
						</form>
						<hr />
						<button>Cancel</button>
					</div>
				</div>
				<StripeProvider apiKey="pk_yourkey">
					<div className="stripe-form">
						<Elements>
							<StripeForm />
						</Elements>
					</div>
				</StripeProvider>
			</div>
		</>
	}
}

export default Confirm  