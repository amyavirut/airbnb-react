import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import {Switch, Route} from 'react-router-dom'
import Profile from './Profile'
import Bookings from './Bookings'
import Favorites from './Favourites'
import Host from './Host'
import Create from './Create'

class ProfileContainer extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="grid medium">
                    <div className="grid sidebar-left">
                        <Sidebar />
                        <div className="content">
                            <Switch>
                                <Route path="/profile" exact component={Profile}/>
                                <Route path="/profile/bookings" component={Bookings}/>
                                <Route path="/profile/favorites" component={Favorites}/>
                                <Route path="/profile/host" exact component={Host}/>
                                <Route path='/profile/host/create' component={Create} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileContainer