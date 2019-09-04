import React from 'react'
import Thumbnail from './Thumbnail'
import Navbar from './Navbar'
import '../styles/Grid.css'

class Places extends React.Component {
    state = {
        places: [
            {roomType:'ENTIRE VILLA', rooms: 7, title:'Luxury Villa Indu Siam', location:'Koh Samui, Thailand', price: 350, reviews: 37},
            {roomType:'ENTIRE VILLA', rooms: 6, title:'Villa Kelusa', location:'Bali, Indonesia', price: 400, reviews: 18},
            {roomType:'PRIVATE ROOM', rooms: 1, title:'Tropical Architecture', location:'Koh Samui', price: 100, reviews: 127},
            {roomType:'ENTIRE HOUSE', rooms: 1, title:'Dreamy Tropical Tree House', location:'Hilo Forest, Hawaii', price: 120, reviews: 127},
            {roomType:'ENTIRE VILLA', rooms: 5, title:'Villa Momoi', location:'Tamarindo, Costa Rica', price: 1830, reviews: 98},
            {roomType:'ENTIRE VILLA', rooms: 7, title:'El Alma', location:'Papagayo, Costa Rica', price: 1590, reviews: 287},
            {roomType:'ENTIRE VILLA', rooms: 4, title:'Villa Metisse', location:'Tamarindo, Costa Rica', price: 1230, reviews: 125},
            {roomType:'ENTIRE VILLA', rooms: 3, title:'Laemsingh Villa 3', location:'Phuket, Thailand', price: 210, reviews: 28}
        ]
    }

    render() {
        return (
        <div>
            <Navbar/>
            <div className="grid five large">
                {this.state.places.map(place =>
                    <Thumbnail place={place}/>
                )}
            </div>
        </div>
        )
    }
}

export default Places