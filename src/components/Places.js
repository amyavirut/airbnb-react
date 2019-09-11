import React from 'react'
import Thumbnail from './Thumbnail'
import Navbar from './Navbar'
import '../styles/Grid.css'
import Filter from './Filter'
import axios from 'axios'

class Places extends React.Component {
    state = {
        places: []
    }
    componentWillMount() {
        axios.get('http://localhost:5000/places')
            .then(res => {
                this.setState({
                    places: res.data
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <Navbar />
                <Filter />
                <div className="grid five large">
                    {this.state.places.map(place =>
                        <Thumbnail place={place} />
                    )}
                </div>
            </div>
        )
    }
}

export default Places