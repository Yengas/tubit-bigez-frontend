import React from 'react'
import { observer, inject } from 'mobx-react'
import MatchItem from '../match/MatchItem'
import DateTime from 'react-datetime'

@inject('map') @observer
class RouteInspect extends React.Component{
  render(){
    const { map } = this.props;
    const { person, inputs } = map;
    const item = Object.assign({ score: person.score, period: { start: inputs.start, end: inputs.end }}, { person });

    return (<div className="route">
      <div className="matchs">
        <div className="information">
          <MatchItem item={item} hideButton={true} />
          <button className="routeButton">Eşleşmeyi kabul et</button>
        </div>
      </div>
    </div>);
  }
}

export default RouteInspect
