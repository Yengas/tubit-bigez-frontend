import React from 'react'
import { observer, inject } from 'mobx-react'
import { Link } from 'react-router'

@inject('account') @observer
class Menu extends React.Component {
  render(){
    const { account } = this.props
    // No menu if not logged in.
    if(!account.isLoggedIn())
      return false;
    return <div>
        <LoggedInMenu/>
    </div>
  }
}

function LoggedInMenu(){
  return <div>
    <div className="mapTitle">
      <div className="column-left"><div className="backImg"></div></div>
      <div className="column-center"><div className="fwdImg"></div></div>
    </div>
    {/*<Link activeClassName="selected" to="/map">Browse</Link>*/}
    {/*<Link activeClassName="selected" to="/logout">Logout</Link>*/}
  </div>
}

export default Menu
