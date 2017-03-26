import React from 'react'
import MatchItem from '../components/match/MatchItem'
import { observer, inject } from 'mobx-react'

@inject('map') @inject('match') @observer
class Match extends React.Component {
  static contextTypes = {
    router: React.PropTypes.func.isRequired
  };

  // On the page mount.
  componentDidMount(){
    const { location, match } = this.props;
    const { params } = this.props;

    if(params && params.id)
      match.loadFor(params.id)
  }
  // From the server side request.
  static onEnter({ match }, params){
    return match.loadFor(params.id);
  }

  /**
   * Show the route for the given route model by redirecting to the map page.
   * @param event {Object} the click event that originated from the MatchItem
   * @param item {Object} the route object that holds the result.
   */
  showRouteHandler = (event, item) => {
    const { map } = this.props;
    map.setRoute(item)
      .then(() => { this.context.router.transitionTo(`/map/${item._id}`); })
  };

  render(){
    const { match } = this.props;
    return (<div className="route">
        { match.matches.length == 0 ? <h1>Bu aramanız için herhangi bir eşleşme bulunmadı!</h1> : false }
        {match.matches.map((item, index) =>{
          return <MatchItem key={index} item={item} showRoute={this.showRouteHandler}/>
        })}
    </div>);
  }
}
export default Match
