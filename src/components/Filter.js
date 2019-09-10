import React from 'react'



class Filter extends React.Component {
    types = ['All Types', 'Entire Villa', 'Shared Villa', 
        'Entire House', 'Shared House', 'Private Room']
    sort = {
        date: "Latest",
        price: "Price",
        rating: "Rating"
    }

    render() {
        return (
            <div className="filters">
                <select>
                    {[...Array(10).keys()].map(i =>
                        <option value={i+1}>Rooms: {i+1}</option>
                    )}
                </select>
                <select>
                    {this.types.map((e, idx) =>
                        <option value={idx}>{e}</option>
                    )}
                </select>
                <input type="number" placeholder="max price" />
                
                <select>
                    <option value="date">Latest</option>
                    <option value="price">Price</option>
                    <option value="rating">Rating</option>
                </select>
                <input type="text" className="search" placeholder="Search..." />
            </div>
        )}
}

export default Filter