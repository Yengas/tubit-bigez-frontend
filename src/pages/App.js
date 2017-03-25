import React, { PropTypes } from 'react'
import { Match, Miss } from 'react-router'
import { Provider } from 'mobx-react'
import Login from '../components/account/Login'
import NotFound from './NotFound'
import Menu from '../components/common/Menu'
import MatchComponent from '../pages/Match'

class App extends React.Component {
  render(){
    const { stores } = this.props

    // Wrapping with provider gives children access to stores
    return (<Provider {...stores}>
      <div>
        <Menu/>
        <Match exactly pattern="/" component={Login}/>
        <Match exactly pattern="/match/:id" component={MatchComponent}/>

        {/* User management */}
        <Miss component={NotFound}/>
      </div>
    </Provider>)
  }
}

export default App
