import requestCreator from 'core/helpers/request'
import Common from '../stores/common'
import Todos from '../stores/todos'
import Account from '../stores/account'
import config from '../config.js'

// All our actions are listed here
export const stores = (state = {}, token) =>{
  const request = requestCreator(config.backend.host, token);
  return {
    common: new Common(request, state.common),
    todos: new Todos(request, state.todos),
    account: new Account(request, state.account)
  }
};

// Initialize actions and state
export default process.env.BROWSER ? stores(window.__STATE) : {}
