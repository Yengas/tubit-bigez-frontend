import { extendObservable } from 'mobx'
import config from '../config'

/**
 * @class Common
 */
export default class Common {

  constructor(request, state = {}){
    this.request = request;
    extendObservable(this, {
      title: 'Mobx-starter',
      statusCode: 200,
      hostname: config.backend.host
    }, state)
  }

  setTitle(newTitle){
    this.title = newTitle
  }
}
