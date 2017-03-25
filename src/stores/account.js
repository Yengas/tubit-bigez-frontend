import { size, find } from 'lodash'
import { extendObservable } from 'mobx'
import { getCookie } from '../utils'
import config from '../config'

/**
 * @class Account
 */
export default class Account {

  constructor(request, state = {}){
    this.request = request;
    extendObservable(this, {
      token: process.env.BROWSER ? getCookie(config.headers.token) : undefined
    }, state)
  }

  isLoggedIn(){
    return size(this.token)
  }

  logout(){
    return this.request('logout').then(() =>{
      this.username = null;
    });
  }
}
