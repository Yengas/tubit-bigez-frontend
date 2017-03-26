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
    return this.request(`routes/${route_id}/match`)
      .then((result) => {
        console.log(result);
        this.matches = result;
      });
  }

  /**
   * Creates and returns a route object for the user.
   * @param route {Array} array of coordinates to send to the database.
   * @param start {Date} start date for the route.
   * @param end {Date} end date for the route.
   */
  create(route, start, end){
    return this.request(`routes`, { route, start, end });
  }
}
