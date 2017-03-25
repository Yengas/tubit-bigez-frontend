import React from 'react'
import { observer, inject } from 'mobx-react'

@inject('map') @observer
class Map extends React.Component{
  componentDidMount(){
    const { location, match, params } = this.props;
  }

  // Isomorphic server side request
  static onEnter({ map }, params){
    // Make requests to get marker and route
  }

  render(){
    return <div>
      Hello, World!
    </div>
  }
}

export default Map