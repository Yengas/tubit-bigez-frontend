import React from 'react'
import { observer, inject } from 'mobx-react'
import GoogleMap from '../components/map/GoogleMap'

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

  render(){
    const { map } = this.props;
    console.log(map);

    return (<div>
      <div height="800px">
        <GoogleMap googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp" loadingElement={<div>Loading...</div>} containerElement={ <div style={{ height: `100%` }} /> } mapElement={ <div style={{ height: `400px` }} /> } markers={map.markers} />
      </div>
      <div className="clearfix"></div>
      <div className="map">
        <div height="800px">
        </div>
        <div className="form">
          <input type="text" className="search"  name="search" placeholder="Bir yer arayın..."/>
          <label className="formTitle" for="dateSelect">Başlangıç saati seçin</label>
          <select className="dateSelect">
            <option value="">01:00</option>
            <option value="">02:00</option>
            <option value="">03:00</option>
            <option value="">04:00</option>
            <option value="">05:00</option>
            <option value="">06:00</option>
            <option value="">07:00</option>
            <option value="">08:00</option>
            <option value="">09:00</option>
            <option value="">10:00</option>
            <option value="">11:00</option>
            <option value="">12:00</option>
          </select>
          <label className="formTitle" for="dateSelect">Bitiş saati seçin</label>
          <select className="dateSelect">
            <option value="">01:00</option>
            <option value="">02:00</option>
            <option value="">03:00</option>
            <option value="">04:00</option>
            <option value="">05:00</option>
            <option value="">06:00</option>
            <option value="">07:00</option>
            <option value="">08:00</option>
            <option value="">09:00</option>
            <option value="">10:00</option>
            <option value="">11:00</option>
            <option value="">12:00</option>
          </select>
          <button className="formButton">Eşleşmeleri görüntüle</button>
        </div>
      </div>
      </div>);
  }
}

export default Map;