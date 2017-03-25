import { extendObservable } from 'mobx'

export default class Menu{
  constructor(request, state = {}){
    this.request = request;
    this.buttonType = null

    extendObservable(this, {
     buttonType: null
    }, state);
  }

  setType(type){
   this.buttonType = type;
  }
}