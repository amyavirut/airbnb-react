import React from 'react'
import '../styles/Forms.css'
import '../styles/App.css'
//import '../styles/Button.css'


class Profile extends React.Component {
    render() {
        return (
            <div>
                <h2>My Profile</h2>
                    <form>
                        <div className="group">
                            <label>Name</label>
                            <input type="text" value="Tony"/>
                        </div>
                        <div className="group">
                            <label>Email</label>
                            <input type="email" value="tony@tortugacoders.com"/>
                        </div>
                        <div className="group">
                            <label>Location</label>
                            <input type="text" value="Thailand"/>
                        </div>
                        <div className="group">
                            <label>Profile Picture</label>
                            <div className="user">
                                <div className="avatar" style={{backgroundImage:"url('https://randomuser.me/api/portraits/men/9.jpg')"}}/>
                                <div className="name">
                                    <input type="file" />
                                </div>
                            </div>
                        </div>
                        <button>Save Changes</button>
                    </form>
                <hr/>
                <button className="secondary">Logout</button>
			</div>
        )
    }
}

export default Profile