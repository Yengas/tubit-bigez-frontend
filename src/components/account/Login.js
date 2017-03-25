import React from 'react'
import { observer, inject } from 'mobx-react'
import Loading from '../common/Loading'
import Error from '../common/Error'

@inject('account') @observer
class Login extends React.Component {
  constructor(){
    super();
  }

  componentDidMount(){
    const { router } =  this.context;

    if(this.props.account.isLoggedIn()){
      return router.transitionTo('/map');
    }
  }

  // When route is loaded (isomorphic)
  static onEnter({ common }){
    common.title = 'Login'
  }

  static contextTypes = {
    router: React.PropTypes.any
  };

  state = {
    username: '',
    password: '',
    loading: false,
    error: null
  };

  handleLogin = (e) =>{
    e.preventDefault();
    window.location = '/login/facebook';
  };

  render(){
    const { loading, error } = this.state;

    if(loading){
      return <Loading/>
    }

    return <main>
      <div className="login">
        <div className="logo"></div>
        <button className="loginButton" onClick={this.handleLogin}><div className="facebookIcon"></div>facebook login</button>
      </div>
    </main>
  }
}

export default Login
