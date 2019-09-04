import React from 'react'
import Routes from './Routes'
import 'font-awesome/css/font-awesome.min.css'
import '../styles/App.css'
import '../styles/Navbar.css'
import '../styles/Grid.css'
import '../styles/Buttons.css'
import '../styles/Filters.css'
import '../styles/Forms.css'
import '../styles/Sidebar.css'
import '../styles/Users.css'
import '../styles/Cards.css'
import '../styles/Icons.css'

class App extends React.Component {
  render() {
    return (
      <Routes />
    )
  }
}

export default App;
