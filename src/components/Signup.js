import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

class Signup extends React.Component {
    state = {
        name: "",
        email: "",
        password: "",
        location: "",
        profilePicture: ""
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    signup = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post(`${process.env.REACT_APP_API_URL}/signup`, this.state)
            .then(data =>
                console.log(data)
            ).catch(err =>
                console.log(err)
            )
    }

    render() {
        return (
            <div className="grid center middle tall image">
                <div className="card small">
                    <div className="content">
                        <div className="logo" />
                        <form onSubmit={this.signup}>
                            <div className="group">
                                <label>Name</label>
                                <input name="name" onChange={this.handleInputChange} type="text" value={this.state.name} />
                            </div>
                            <div className="group">
                                <label>Email</label>
                                <input name="email" onChange={this.handleInputChange} type="email" value={this.state.email} />
                            </div>
                            <div className="group">
                                <label>Password</label>
                                <input name="password" onChange={this.handleInputChange} type="password" value={this.state.password} />
                            </div>
                            <div className="group">
                                <label>Location</label>
                                <input name="location" onChange={this.handleInputChange} type="text" value={this.state.location} />
                            </div>
                            <div className="group">
                                <label>Profile Picture</label>
                                <input name="profilePicture" onChange={this.handleInputChange} type="file" />
                            </div>
                            <button className="primary">Signup</button>
                        </form>
                        <p className="footer">
                            Already have an account? <Link to="/login">Login</Link>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup