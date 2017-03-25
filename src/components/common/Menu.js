import React from 'react'
import { observer, inject } from 'mobx-react'
import { Link } from 'react-router'

@inject('account') @observer
class Menu extends React.Component {
  render(){
    const { account } = this.props
    return <div>
      {account.isLoggedIn()
        ? <LoggedInMenu/>
        : <LoggedOutMenu/>
      }
    </div>
  }
}

function LoggedInMenu(){
  return <menu>
    <Link activeClassName="selected" to="/map">Browse</Link>
    <Link activeClassName="selected" to="/logout">Logout</Link>
  </menu>
}

function LoggedOutMenu(){
  return <menu>
    <Link activeClassName="selected" to="/">Login</Link>
  </menu>
}

export default Menu
