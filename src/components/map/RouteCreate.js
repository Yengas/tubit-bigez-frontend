import React from 'react'
import { observer, inject } from 'mobx-react'
import DateTime from 'react-datetime'
import moment from 'moment'

@inject('map') @observer
class RouteCreate extends React.Component {

  render() {
    const map = this.props.map;
    return (
      <div className="form">
      <label className="formTitle" for="dateSelect">Başlangıç saati seçin</label>
      <DateTime className="date-picker" value={moment(map.inputs.start)} onChange={(date) => this.periodChange('start', date)} />
      <label className="formTitle" for="dateSelect">Bitiş saati seçin</label>
      <DateTime className="date-picker" value={moment(map.inputs.end)} isValidDate={(date) => moment(map.inputs.start) < moment(date)} onChange={(date) => this.periodChange('end', date)} />
      <button className="formButton" onClick={this.handleCreate}>Eşleşmeleri görüntüle</button>
      </div>
    );
  }
}

export default RouteCreate