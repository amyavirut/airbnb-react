import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Login extends React.Component {
    state = {
        email: "",
        password: ""
    }
    
    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    login = (e) => {
        e.preventDefault()
        let requiredFields = ['email', 'password']
        let emptyFields = requiredFields.filter(f => this.state[f] === "")
        if (emptyFields.length > 0) {
            alert(`${emptyFields.join(",")} can't be empty`)
            return
        }
        axios.post(`${process.env.REACT_APP_API_URL}/login`, this.state)
            .then(res => {
                let token = res.data
                localStorage.setItem('token', token)
                this.props.history.push({pathname: '/'})
            }).catch(err =>
                console.log(err)
            )
    }
    render() {
        return <div className="grid center middle tall image">
        <div className="card small">
            <div className="content">
                <div className="logo" />
                <form onSubmit={this.login}>
                    <div className="group">
                        <label>Email</label>
                        <input name="email" onChange={this.handleInputChange} type="email" value={this.state.email} />
                    </div>
                    <div className="group">
                        <label>Password</label>
                        <input name="password" onChange={this.handleInputChange} type="password" value={this.state.password} />
                    </div>
                    <button className="primary">Login</button>
                </form>
                <p className="footer">
                    New to Airbnb? <Link to="/signup">Signup</Link>
                </p>
            </div>
        </div>
    </div>
    }
}

export default Login 