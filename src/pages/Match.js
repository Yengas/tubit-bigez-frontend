import React from 'react'
import MatchItem from '../components/match/MatchItem'
import { observer, inject } from 'mobx-react'

@inject('match') @observer
class Match extends React.Component {
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

  render(){
    const { match } = this.props;
    return (<div className="route">
        {match.matches.map((item, index) =>{
          return <MatchItem key={index} item={item}/>
        })}
    </div>);
  }
}
export default Match
