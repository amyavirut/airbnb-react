import React from 'react'
import Thumbnail from './Thumbnail'
import Navbar from './Navbar'
import '../styles/Grid.css'
import Filter from './Filter'
import axios from 'axios'

class Places extends React.Component {
    state = {
        places: [],
    }

    componentDidMount() {
        this.updatePlaces({})
    }

    updatePlaces = (filters) => {
        axios.get(`${process.env.REACT_APP_API_URL}/places`, { params: filters })
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
                <Filter updatePlaces={this.updatePlaces}/>
                <div className="grid five large">
                    {this.state.places.map(place =>
                        <Thumbnail place={place} key={place._id} />
                    )}
                </div>
            </div>
        )
    }
}

export default Places