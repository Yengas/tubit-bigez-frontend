import React from 'react'
import { observer, inject } from 'mobx-react'
import { toJS } from 'mobx'
import GoogleMap from '../components/map/GoogleMap'
import DateTime from 'react-datetime'
import moment from 'moment'
import Alert from 'react-s-alert'

@inject('map') @inject('match') @observer
class Map extends React.Component{
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
        <GoogleMap googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp" loadingElement={<div>Loading...</div>} containerElement={ <div style={{ height: `100%` }} /> } mapElement={ <div style={{ height: `400px` }} /> } markers={map.markers} markerClick={this.markerClick} polyline={map.route} />
      </div>
      <div className="clearfix"></div>
      <div className="map">
        <div height="800px">
        </div>
        <div className="form">
          <input type="text" className="search"  name="search" placeholder="Bir yer arayın..."/>
          <label className="formTitle" for="dateSelect">Başlangıç saati seçin</label>
          <DateTime value={moment(map.inputs.start)} onChange={(date) => this.periodChange('start', date)} />
          <label className="formTitle" for="dateSelect">Bitiş saati seçin</label>
          <DateTime value={moment(map.inputs.end)} isValidDate={(date) => moment(map.inputs.start) < moment(date)} onChange={(date) => this.periodChange('end', date)} />
          <button className="formButton" onClick={this.handleCreate}>Eşleşmeleri görüntüle</button>
        </div>
      </div>
      <Alert stack={{ limit: 3 }} />
      </div>);
  }
}

export default Map;