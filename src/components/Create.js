import React from 'react'

class Create extends React.Component {
    render() {
        return (<>
            <h2>Host a new place</h2>
            <form>
                <div className="group">
                    <label>Title</label>
                    <input type="text" />
                </div>
                <div className="group">
                    <label>Description</label>
                    <textarea></textarea>
                </div>
                <div className="group">
                    <label>City or Town</label>
                    <input type="text" />
                </div>
                <div className="group">
                    <label>Country</label>
                    <input type="text" />
                </div>
                <div className="group">
                    <label>Price per Night (USD)</label>
                    <input type="number" />
                </div>
                <div className="group">
                    <label>Type</label>
                    <select>
                        <option>Entire Villa</option>
                        <option>Entire House</option>
                        <option>Entire Apartment</option>
                        <option>Private Room</option>
                        <option>Shared Villa</option>
                        <option>Shared House</option>
                        <option>Shared Apartment</option>
                    </select>
                </div>
                <div className="group">
                    <label>Number of Rooms</label>
                    <input type="number" />
                </div>
                <div className="group">
                    <label>Number of Bathrooms</label>
                    <input type="number" />
                </div>
                <div className="group">
                    <label>Maximum number of Guests</label>
                    <input type="number" />
                </div>
                <div className="group">
                    <label>Upload Photos</label>
                    <input type="file" multiple />
                </div>
                <div className="group">
                    <label>Amenities</label>
                    <label className="checkbox">
                        <input type="checkbox" name="Swimming Pool" />
                    </label>
                    <label className="checkbox">
                        <input type="checkbox" name="Kitchen" />
                    </label>
                    <label className="checkbox">
                        <input type="checkbox" name="Wi-Fi" />
                    </label>
                    <label className="checkbox">
                        <input type="checkbox" name="TV" />
                    </label>
                    <label className="checkbox">
                        <input type="checkbox" name="Gym" />
                    </label>
                    <label className="checkbox">
                        <input type="checkbox" name="Iron" />
                    </label>
                    <label className="checkbox">
                        <input type="checkbox" name="Air Conditioning" />
                    </label>
                </div>
                <button className="primary">Publish this Place</button>
                <button className="cancel"><i className="fas fa-times"></i></button>
            </form>
        </>
        )
    }
}

export default Create 