import React from 'react'
import axios from 'axios'

// Creates a set of inputs using the React Controlled Component pattern
// When any input is changed, it's state is copied into the React component state
// The component is then re-rendered to reflect this change
// Then the componentWillUpdate lifecycle hook is used to call updatePlaces in the
// parent component which replaces the list of places with the filtered result from
// the API
class Filter extends React.Component {
    state = {
        types: [],
        // Controlled inputs: https://reactjs.org/docs/forms.html
        minRooms: 0,
        type: "",
        maxPrice: "",
        sort: "date",
        search: ""
    }

    sort = {
        date: "Latest",
        price: "Price",
        rating: "Rating"
    }

    componentDidMount() {
        axios.get('http://localhost:5000/types')
            .then(res => {
                this.setState({
                    types: res.data
                })
            })
            .catch(err => console.log(err))
    }

    // get filter inputs from state and return filter object
    getFilter() {
        let filter = {};
        ["minRooms", "type", "maxPrice"].forEach(k => {
            if (this.state[k]) {
                filter[k] = this.state[k]
            }
        })
        return filter
    }

    handleInputChange = (event) => {
        // event is the "change"
        // event.target is the element that was changed, i.e someone typed in something/pasted etc
        // event.target.name is the name atrribute on the element
        // event.target.value is content of the element, i.e selected option or typed value
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    // Runs whenever component is changed i.e. someone changed a filter and caused render() to run
    componentDidUpdate() {
        this.props.updatePlaces(this.getFilter())
    }

    render() {
        return (
            <div className="filters">
                <select name="minRooms" value={this.state.minRooms} onChange={this.handleInputChange}>
                    <option value={0}>Rooms: Any</option>
                    {[...Array(10).keys()].map(i =>
                        <option key={i} value={i + 1}>Rooms: {i + 1}+</option>
                    )}
                </select>
                <select name="type" value={this.state.type} onChange={this.handleInputChange}>
                    <option value="">All Types</option>
                    {this.state.types.map(e =>
                        <option key={e._id} value={e._id}>{e.name}</option>
                    )}
                </select>
                <input name="maxPrice" type="number" value={this.state.maxPrice} placeholder="max price" onChange={this.handleInputChange} />
                <select name="sort" value={this.state.sort} onChange={this.handleInputChange}>
                    <option value="date">Latest</option>
                    <option value="price">Price</option>
                    <option value="rating">Rating</option>
                </select>
                <input name="search" value={this.state.search} type="text" className="search" placeholder="Search..." onChange={this.handleInputChange} />
            </div>
        )
    }
}

export default Filter