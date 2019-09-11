import React from 'react'



class Filter extends React.Component {
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
                    {this.props.types.map(e =>
                        <option value={e._id}>{e.name}</option>
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