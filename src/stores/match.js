import { extendObservable } from 'mobx'

export default class Match{
  constructor(request, state = {}){
    this.request = request;
    this.matches = [];

    extendObservable(this, {
      matches: []
    }, state);
  }

  /**
   * Loads the matches for the given route_id
   * @param route_id
   */
  loadFor(route_id){
    return this.request(`routes`, { id: route_id })
      .then((result) => {
        this.matches = result;
      });
  }
}
