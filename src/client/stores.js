import requestCreator from 'core/helpers/request'
import Common from '../stores/common'
import Map from '../stores/map'
import Account from '../stores/account'
import Match from '../stores/match'
import config from '../config.js'

// All our actions are listed here
export const stores = (state = {}, token) =>{
  const request = requestCreator(config.backend.host, token);
  return {
    common: new Common(request, state.common),
    account: new Account(request, state.account),
    match: new Match(request, state.match),
    map: new Map(request, state.map),
  }
};

// Initialize actions and state
export default process.env.BROWSER ? stores(window.__STATE) : {}
