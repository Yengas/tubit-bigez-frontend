import React from 'react'
import { observer, inject } from 'mobx-react'
import dateFormat from 'dateformat'

// Formats the given date to an easy to read one.
function convertToShow(date){
  return dateFormat(date, "yyyy/mm/dd HH:ss");
}

/**
 * Returns a string to show date ranges.
 * @param start {Date} the start date.
 * @param end {Date} the end date.
 * @return {string}
 */
function showDate(start, end){
  return `${convertToShow(start)} - ${convertToShow(end)}`;
}

@inject('match') @observer
class MatchItem extends React.Component{
  render(){
    const { match, item } = this.props;

    return (<div className="matchs">
      <div className="information">
        <img className="avatar" src={item.person[0].profile.picture} />
        <div className="informationSpan">
          <ul>
            <li className="span1"><i className="fa fa-user-circle-o" /> {item.person[0].profile.name}</li>
            <li className="span2"><i className="fa fa-tachometer" /> Uyum %{Math.round(item.score * 100)}</li>
            <li className="span3"><i className="fa fa-clock-o" /> {showDate(item.period.start, item.period.end)}</li>
          </ul>
        </div>
        { this.props.hideButton ? false : <button className="routeButton" onClick={(event) => this.props.showRoute(event, item)}>Rotasını gör!</button> }
      </div>
      <div className="clearfix"></div>
    </div>);
  }
}

export default MatchItem