import React from 'react'
import { observer, inject } from 'mobx-react'
import MatchItem from '../match/MatchItem'
import Alert from 'react-s-alert'

@inject('map') @inject('match') @observer
class RouteInspect extends React.Component{
  static contextTypes = {
    router: React.PropTypes.func.isRequired
  };

  handleAccept = () => {
    const { match, map } = this.props;

    match.acceptMatch(map.id)
      .then(() => {
        Alert.success("Başarılı bir şekilde notifikasyon gönderildi. Bu kişinin sizinle iletişime geçmesini bekleyin.");
        window.setTimeout(() => this.context.router.back(), 1000);
      })
      .catch((err) => {
        console.log(err);
        Alert.error("İstek gönderirken bir hata ile karşılaşıldı. Lütfen daha sonra tekrar deneyin.");
      });
  };

  render(){
    const { map } = this.props;
    const { person, inputs } = map;
    const item = Object.assign({ score: person.score, period: { start: inputs.start, end: inputs.end }}, { person });

    return (<div className="route">
      <div className="matchs">
        <div className="information">
          <MatchItem item={item} hideButton={true} />
          <button className="routeButton" onClick={this.handleAccept}>Eşleşmeyi kabul et</button>
        </div>
      </div>
    </div>);
  }
}

export default RouteInspect
