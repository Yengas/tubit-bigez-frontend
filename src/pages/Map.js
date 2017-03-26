import React from 'react'
import { observer, inject } from 'mobx-react'
import { toJS } from 'mobx'
import GoogleMap from '../components/map/GoogleMap'
import RouteCreate from '../components/map/RouteCreate'
import Alert from 'react-s-alert'
import config from '../config'

@inject('map') @inject('match') @observer
class Map extends React.Component{
  constructor(){
    super();
  }
  componentDidMount(){
    const { location, map, params } = this.props;
    map.fillMarkers();
  }

  // Isomorphic server side request
  static onEnter({ map }, params){
    // Make requests to get marker and route
  }

  periodChange = (key, date) => {
    this.props.map.inputs[key] = date;
  };

  markerClick = (event, marker) => {
    const { map } = this.props;
    if(map.isInspecting()) return false;
    map.toggle(marker);
  };

  // TODO: check if there are waiting network requests before sending one more.
  // TODO: error check with joi and alert
  /**
   * Handle creating route by the currently selected route and dates.
   */
  handleCreate = () => {
    const { match, map } = this.props;
    const { router } = this.context;

    match.create(map.route, map.inputs.start, map.inputs.end)
      .then((result) => {
        Alert.success('Successfully inserted a route, redirecting to matches.');
        window.location = `/match/${result._id}`;
      })
      .catch((err) => Alert.error(`An error occured while processing button click. Reason: ${err.message}`));
  };

  render(){
    const { map } = this.props;

    return (<div>
      <div height="800px">
        <GoogleMap googleMapURL={config.maps.url} loadingElement={<div>Loading...</div>} containerElement={ <div style={{ height: `100%` }} /> } mapElement={ <div style={{ height: `400px` }} /> } markers={map.markers} markerClick={this.markerClick} polyline={map.route} />
      </div>
      <div className="clearfix"></div>
      <div className="map">
        <div height="800px">
        </div>
        <RouteCreate />
        <div className="route">
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
        </div>
      </div>
      <Alert stack={{ limit: 3 }} />
      </div>);
  }
}

export default Map;