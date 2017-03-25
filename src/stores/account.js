import { size, find } from 'lodash'
import { extendObservable } from 'mobx'

/**
 * @class Account
 */
export default class Account {

  constructor(request, state = {}){
    this.request = request;
    extendObservable(this, {
      username: null,
      token: null
    }, state)
  }

  isLoggedIn(){
    return size(this.token)
  }

  logout(){
    return this.request('logout').then(() =>{
        this.username = null;
        this.token = null;
      });
  }
}
