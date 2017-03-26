import React from 'react'
import { observer, inject } from 'mobx-react'
import DateTime from 'react-datetime'

@inject('map') @observer
class RouteInspect extends React.Component{
  render(){
    const { map } = this.props;
    const { profile } = map;

    return (<div className="route">
      <div className="matchs">
        <div className="information">
          <img className="avatar"  alt="avatar" />
          <ul className="informationSpan">
            <li className="span1"><i className="fa fa-user-circle-o" aria-hidden="true"></i> Eşleşme ismi</li>
            <li className="span2"><i className="fa fa-tachometer" aria-hidden="true"></i> Uyum alanı</li>
            <li className="span3"><i className="fa fa-clock-o" aria-hidden="true"></i> Uyum alanı</li>
          </ul>
          <button className="routeButton">Eşleşmeyi kabul et</button>
        </div>
      </div>
    </div>);
  }
}

export default RouteInspect
