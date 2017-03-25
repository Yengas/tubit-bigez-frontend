import React from 'react'
import MatchItem from '../components/match/MatchItem'
import { observer, inject } from 'mobx-react'

@inject('match') @observer
class Match extends React.Component {
  // On the page mount.
  componentDidMount(){
    const { match } = this.props;
    match.loadFor('58d67e5e0db263d03809b940');
  }
  // From the server side request.
  onEnter({ match }, params){
    return match.loadFor("58d67e5e0db263d03809b940");
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
