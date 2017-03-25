import React from 'react'
import { observer, inject } from 'mobx-react'
import { toJS } from 'mobx'
import GoogleMap from '../components/map/GoogleMap'
import DateTime from 'react-datetime'
import moment from 'moment'

@inject('map') @observer
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
    console.log(map, marker, map.isInspecting());
    if(map.isInspecting()) return false;
    map.toggle(marker);
  };

  render(){
    const { map } = this.props;
    console.log(map.inputs);

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
          <button className="formButton">Eşleşmeleri görüntüle</button>
        </div>
      </div>
      </div>);
  }
}

export default Map;