import { extendObservable } from 'mobx';

export default class Map{
  constructor(request, state = {}){
    this.request = request;

    extendObservable(this, {
      // ID of the route
      id: null,
      // Markers
      markers: [],
      // route of the travel
      route: [],
      // inputs  in the map
      inputs: {
        start: new Date(),
        end: null
      },
      // Who this route belongs to
      person: null
    }, state);
  }

  /**
   * Checks if the current person is inspecting or another.
   * @return {boolean}
   */
  isInspecting(){
    return !!this.person;
  }

  /**
   * Loads the given route by its id.
   * @param route_id {String} the id of the route to load by making a rest request.
   * @return {Promise|Promise.<TResult>|*}
   */
  loadRouteById(route_id){
    return this.request(`routes/${route_id}`)
      .then((route) => this.setRoute(route));
  }

  /**
   * Sets the current state to show the map for a given route
   * @param route {Object} mongoose model object for the route.
   * @return {Promise.<T>}
   */
  setRoute(route){
    this.id = route._id;
    this.route = route.route;
    this.inputs.start = route.period.start;
    this.inputs.end = route.period.end;
    this.person = route.person;
    return Promise.resolve();
  }

  fillMarkers(){
    return this.request('markers')
      .then((result) => this.markers = result);
  }
}