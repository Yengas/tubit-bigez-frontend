import React from 'react'
import { observer, inject } from 'mobx-react'
import { Link } from 'react-router'

@inject('account') @inject('menu') @observer
class Menu extends React.Component {
  render(){
    const { account } = this.props;
    const { buttonType: type }  = this.props.menu;

    // No menu if not logged in.
    if(!account.isLoggedIn())
      return false;

    return <div>
        <LoggedInMenu actionClick={this.handleAction} type={type} />
    </div>
  }
}

function LoggedInMenu(props){
  const { type } = props;

  return <div>
    <div className="mapTitle">
      <div className="column-left"><div className="backImg"></div></div>
      <div className="column-center"><div className="fwdImg"></div></div>
      { <div className="column-right">{type}</div> }
    </div>
    {/*<Link activeClassName="selected" to="/map">Browse</Link>*/}
    {/*<Link activeClassName="selected" to="/logout">Logout</Link>*/}
  </div>
}

export default Menu
