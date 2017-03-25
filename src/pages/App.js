import React, { PropTypes } from 'react'
import { Match, Miss } from 'react-router'
import { Provider } from 'mobx-react'
import Home from './Home'
import About from './About'
import Login from '../components/account/Login'
import Logout from '../components/account/Logout'
import Register from '../components/account/Register'
import NotFound from './NotFound'
import Menu from '../components/common/Menu'

class App extends React.Component {
  render(){
    const { stores } = this.props

    // Wrapping with provider gives children access to stores
    return (<Provider {...stores}>
      <div>
        <Match exactly pattern="/" component={Login}/>

        {/* User management */}
        <Miss component={NotFound}/>
      </div>
    </Provider>)
  }
}

export default App
