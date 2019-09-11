import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faHome, faUserFriends, faBed, faBath, faUtensils, faDumbbell,
    faTshirt, faSwimmer, faWind, faTv, faWifi
} from '@fortawesome/free-solid-svg-icons'
import Gallery from './Gallery'
import Navbar from './Navbar'
import axios from 'axios'
import Review from './Review'

library.add(faHome, faUserFriends, faBed, faBath, faUtensils, faDumbbell,
    faTshirt, faSwimmer, faWind, faTv, faWifi)


class Place extends React.Component {
    state = {
        place: {
            amenities: [],
            reviews: [],
            host: {},
            type: {},
        }
    }

    componentWillMount() {
        axios.get('http://localhost:5000/places/5d78bbbb2abad5c78ede4431')
            .then(res => {
                this.setState({
                    place: res.data
                })
            })
            .catch(err => console.log(err))
    }


    render() {
        return (
            <>
                <Navbar />
                <Gallery />
                <div className="grid medium">
                    <div className="grid sidebar-right">
                        <div className="content">
                            <h1>{this.state.place.title}</h1>
                            <small>
                                <i className="fas fa-map-marker-alt"></i>
                                <span>{this.state.place.city}, {this.state.place.country}</span>
                            </small>
                            <div className="user">
                                <div className="avatar" style={{ backgroundImage: "url('https://randomuser.me/api/portraits/women/2.jpg')" }}></div>
                                <div className="name">
                                    <small>Hosted by</small>
                                    <span>{this.state.place.host.name}</span>
                                </div>
                            </div>
                            <div className="card specs">
                                <div className="content">
                                    <ul className="grid two">
                                        <li><FontAwesomeIcon icon={faHome} fixedWidth />{this.state.place.type.name}</li>
                                        <li><FontAwesomeIcon icon={faUserFriends} fixedWidth />{this.state.place.guests} guests</li>
                                        <li><FontAwesomeIcon icon={faBed} fixedWidth />{this.state.place.bedrooms} bedrooms</li>
                                        <li><FontAwesomeIcon icon={faBath} fixedWidth />{this.state.place.bathrooms} baths</li>
                                    </ul>
                                </div>
                            </div>
                            <p>Stylish, tropical, luxurious, airy and absolute beach front, this villa combines form and function, enjoying magnificent views of Samui’s small islands and the sea beyond. With 520sqm of indoor/outdoor living space with 5 ensuite bedrooms, large living area, beachfront infinity pool, garden, air conditioned gym, professional pool table, bbq and Sala, this villa is perfect for up to 10 adults With 260sqm (2798sqfeet) of living space and 250sqm (2,700sqfeet) of outdoor space.</p>
                            <h3>Amenities</h3>
                            <div className="card specs">
                                <div className="content">
                                    <ul className="grid two">
                                        {this.state.place.amenities.map(a =>
                                            <li><FontAwesomeIcon icon={a.icon} />{a.name}</li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <div className="reviews">
                                <h2>{this.state.place.reviews.length} Reviews</h2>
                                <form>
                                    <div className="group">
                                        <label>Leave a review</label>
                                        <textarea></textarea>
                                        <div className="rating">
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </div>
                                        <button className="primary small">Submit</button>
                                    </div>
                                </form>
                                {this.state.place.reviews.map(r =>
                                    <Review review={r} />
                                )}
                            </div>
                        </div>
                        <div className="sidebar booking">
                            <div className="card shadow">
                                <div className="content large">
                                    <h3>$350<small>per night</small></h3>
                                    <small>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <span>4 Reviews</span>
                                    </small>
                                    <form className="small">
                                        <div className="group">
                                            <label>Dates</label>
                                            <input type="text" placeholder="Check-in" />
                                            <input type="text" placeholder="Check-out" />
                                        </div>
                                        <div className="group">
                                            <label>Guests</label>
                                            <select>
                                                <option>1 guest</option>
                                                <option>2 guests</option>
                                                <option>3 guests</option>
                                                <option>4 guests</option>
                                                <option>5 guests</option>
                                                <option>6 guests</option>
                                                <option>7 guests</option>
                                                <option>8 guests</option>
                                                <option>9 guests</option>
                                                <option>10 guests</option>
                                            </select>
                                        </div>
                                        <div className="group">
                                            <button className="secondary full">Book this place</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Place 