import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUserFriends, faBed, faBath, faUtensils, faDumbbell, 
faTshirt, faSwimmer, faWind, faTv, faWifi} from '@fortawesome/free-solid-svg-icons'
import Gallery from './Gallery'
import Navbar from './Navbar'


class Place extends React.Component {
    render() {
        return (
        <>
        <Navbar />
        <Gallery />
        <div className="grid medium">
			<div className="grid sidebar-right">
				<div className="content">
					<h1>Luxury Villa Indu Siam</h1>
					<small>
						<i className="fas fa-map-marker-alt"></i>
						<span>Koh Samui, Thailand</span>
					</small>
					<div className="user">
						<div className="avatar" style={{backgroundImage: "url('https://randomuser.me/api/portraits/women/2.jpg')"}}></div>
						<div className="name">
							<small>Hosted by</small>
							<span>Kitty</span>
						</div>
					</div>
					<div className="card specs">
						<div className="content">
							<ul className="grid two">
								<li><FontAwesomeIcon icon={faHome} fixedWidth />Entire Villa</li>
								<li><FontAwesomeIcon icon={faUserFriends} fixedWidth />10 guests</li>
								<li><FontAwesomeIcon icon={faBed} fixedWidth />7 bedrooms</li>
								<li><FontAwesomeIcon icon={faBath} fixedWidth />6 baths</li>
							</ul>
						</div>
					</div>
					<p>Stylish, tropical, luxurious, airy and absolute beach front, this villa combines form and function, enjoying magnificent views of Samui’s small islands and the sea beyond. With 520sqm of indoor/outdoor living space with 5 ensuite bedrooms, large living area, beachfront infinity pool, garden, air conditioned gym, professional pool table, bbq and Sala, this villa is perfect for up to 10 adults With 260sqm (2798sqfeet) of living space and 250sqm (2,700sqfeet) of outdoor space.</p>
					<h3>Amenities</h3>
					<div className="card specs">
						<div className="content">
							<ul className="grid two">
								<li><FontAwesomeIcon icon={faUtensils} />Kitchen</li>
								<li><FontAwesomeIcon icon={faDumbbell} />Gym</li>
								<li><FontAwesomeIcon icon={faWifi} />Wi-Fi</li>
								<li><FontAwesomeIcon icon={faTshirt} />Iron</li>
								<li><FontAwesomeIcon icon={faSwimmer} />Swimming Pool</li>
								<li><FontAwesomeIcon icon={faWind} />Air Conditioning</li>
								<li><FontAwesomeIcon icon={faTv} />TV</li>
							</ul>
						</div>
					</div>
					<div className="reviews">
						<h2>4 Reviews</h2>
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
						<div className="card review">
							<div className="content">
								<div className="user">
									<div className="avatar" style={{backgroundImage: "url('https://randomuser.me/api/portraits/women/2.jpg')"}}></div>
									<div className="name">
										<small>27 July 2019</small>
										<span>Amanda</span>
									</div>
								</div>
								<div className="rating">
									<i className="fas fa-star"></i>
									<i className="fas fa-star"></i>
									<i className="fas fa-star"></i>
									<i className="fas fa-star"></i>
									<i className="fas fa-star"></i>
								</div>
								<p>It was beyond my imagination that my AirBnB experience could be better than a 5 star resort hotel. It is one of the most beautiful villa that I have had stayed so far in the many countries travelled so far. The pictures have not sufficiently described the details of the place.</p>
							</div>
						</div>
						<div className="card review">
							<div className="content">
								<div className="user">
									<div className="avatar" style={{backgroundImage: "url('https://randomuser.me/api/portraits/women/2.jpg')"}}></div>
									<div className="name">
										<small>22 July 2019</small>
										<span>John</span>
									</div>
								</div>
								<div className="rating">
									<i className="fas fa-star"></i>
									<i className="fas fa-star"></i>
									<i className="fas fa-star"></i>
									<i className="far fa-star"></i>
									<i className="far fa-star"></i>
								</div>
								<p>It was beyond my imagination that my AirBnB experience could be better than a 5 star resort hotel. It is one of the most beautiful villa that I have had stayed so far in the many countries travelled so far. The pictures have not sufficiently described the details of the place.</p>
							</div>
						</div>
						<div className="card review">
							<div className="content">
								<div className="user">
									<div className="avatar" style={{backgroundImage: "url('https://randomuser.me/api/portraits/women/2.jpg')"}}></div>
									<div className="name">
										<small>4 July 2019</small>
										<span>Sam</span>
									</div>
								</div>
								<div className="rating">
									<i className="fas fa-star"></i>
									<i className="fas fa-star"></i>
									<i className="fas fa-star"></i>
									<i className="fas fa-star"></i>
									<i className="far fa-star"></i>
								</div>
								<p>It was beyond my imagination that my AirBnB experience could be better than a 5 star resort hotel. It is one of the most beautiful villa that I have had stayed so far in the many countries travelled so far. The pictures have not sufficiently described the details of the place.</p>
							</div>
						</div>
						<div className="card review">
							<div className="content">
								<div className="user">
									<div className="avatar" style={{backgroundImage: "url('https://randomuser.me/api/portraits/women/2.jpg')"}}></div>
									<div className="name">
										<small>27 May 2019</small>
										<span>Ella</span>
									</div>
								</div>
								<div className="rating">
									<i className="fas fa-star"></i>
									<i className="fas fa-star"></i>
									<i className="fas fa-star"></i>
									<i className="fas fa-star"></i>
									<i className="fas fa-star"></i>
								</div>
								<p>It was beyond my imagination that my AirBnB experience could be better than a 5 star resort hotel. It is one of the most beautiful villa that I have had stayed so far in the many countries travelled so far. The pictures have not sufficiently described the details of the place.</p>
							</div>
						</div>
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
									<input type="text" placeholder="Check-in"/>
									<input type="text" placeholder="Check-out"/>
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
    )}
}

export default Place 