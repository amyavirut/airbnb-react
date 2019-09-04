import React from 'react'
import '../styles/Grid.css'
import Thumbnail from './Thumbnail';


class Bookings extends React.Component {
    state = {
        places: [
            { roomType: 'ENTIRE VILLA', rooms: 7, title: 'Luxury Villa Indu Siam', location: 'Koh Samui, Thailand', price: 350, reviews: 37, date: "10 Aug 2020 - 15 Aug 2020"},
            { roomType: 'ENTIRE VILLA', rooms: 6, title: 'Villa Kelusa', location: 'Bali, Indonesia', price: 400, reviews: 18, date: "01 May 2019 - 04 May 2019"},
            { roomType: 'PRIVATE ROOM', rooms: 1, title: 'Tropical Architecture', location: 'Koh Samui', price: 100, reviews: 127, date: "18 Apr 2019 - 27 Apr 2019" }
        ]
    }

    render() {
        return (
            <div>
                <h2>Upcoming Trips</h2>
                <div className="grid two">
                    <Thumbnail place={this.state.places[0]} />
                </div>
                <h2>Past Trips</h2>
                <div className="grid two">
                    <Thumbnail place={this.state.places[1]} />
                    <Thumbnail place={this.state.places[2]} />
                </div>
            </div>
        )
    }
}

export default Bookings  