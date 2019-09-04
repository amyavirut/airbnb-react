import React from 'react'
import '../styles/Grid.css'
import Thumbnail from './Thumbnail'

class Favourites extends React.Component {
    state = {
        places: [
            {roomType:'ENTIRE VILLA', rooms: 7, title:'Luxury Villa Indu Siam', location:'Koh Samui, Thailand', price: 350, reviews: 37},
        ]
    }

    render() {
        return <>
            <h2>My Favorites</h2>
            <div className="grid two">
                {this.state.places.map((place, index) =>
                    <Thumbnail place={place} key={index}/>
                )}
            </div>
        </>
    }
}

export default Favourites