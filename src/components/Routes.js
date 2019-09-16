import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Places from './Places'
import ProfileContainer from './ProfileContainer'
import Signup from './Signup'
import Login from './Login'
import Place from './Place'
import Confirm from './Confirm';



class Routes extends React.Component {

render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Places} />
          <Route path='/profile' component={ProfileContainer} />
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
          <Route path='/place/:id' component={Place} />
          <Route path="/confirm" component={Confirm} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes