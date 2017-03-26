import matchPath from '../../core/helpers/matchPath'
import Match from '../pages/Match'
import Map from '../pages/Map'
import Login from '../components/account/Login'

// All your server side prefetching is done here
// When a route is matched, the static function is executed
const routes = [
  {
    pattern: '/map/:id',
    execute: Map.onEnter
  },
  {
    pattern: '/match/:id',
    execute: Match.onEnter
  },
  {
    pattern: '/page/login',
    execute: Login.onEnter
  },
];

// Execute server-side async methods to refetch data
export default (stores, url) =>{
  for(let i in routes){
    const route = routes[ i ];
    const match = matchPath(route.pattern, url);
    if(match){
      return Promise.resolve(route.execute(stores, match.params))
    }
  }
  return Promise.resolve()
}
