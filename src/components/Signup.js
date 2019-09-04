import React from 'react'
import { Link } from 'react-router-dom'

class Signup extends React.Component {
    render() {
        return (
            <div className="grid center middle tall image">
                <div className="card small">
                    <div className="content">
                        <div className="logo"/>
                        <form>
                            <div className="group">
                                <label>Name</label>
                                <input type="text" />
                            </div>
                            <div className="group">
                                <label>Email</label>
                                <input type="email" />
                            </div>
                            <div className="group">
                                <label>Password</label>
                                <input type="password" />
                            </div>
                            <div className="group">
                                <label>Location</label>
                                <input type="text" />
                            </div>
                            <div className="group">
                                <label>Profile Picture</label>
                                <input type="file" />
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