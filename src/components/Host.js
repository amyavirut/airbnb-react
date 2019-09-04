import React from 'react'
import Thumbnail from './Thumbnail'
import { Link } from 'react-router-dom'


class Host extends React.Component {
    state = {
        places: [
            {roomType:'ENTIRE VILLA', rooms: 7, title:'Luxury Villa Indu Siam', location:'Koh Samui, Thailand', price: 350, reviews: 37},
            {roomType:'ENTIRE VILLA', rooms: 6, title:'Villa Kelusa', location:'Bali, Indonesia', price: 400, reviews: 18},
        ]
    }
    render() {
        return <>
            <Link className="button primary" to="/profile/host/create">Host new place</Link>
            <hr />
            <h2>Places I'm hosting</h2>
            <div className="grid two">
                {this.state.places.map((place, index) =>
                    <Thumbnail place={place} key={index}/>
                )}
            </div>
        </>
    }
}

export default Host 