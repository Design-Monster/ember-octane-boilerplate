import Route from '@ember/routing/route';
import type RouterService from '@ember/routing/router-service';
type Transition = ReturnType<RouterService['transitionTo']>;
// import RSVP from 'rsvp';

export default class IndexRoute extends Route {
  // model() {
  //     return RSVP.hash({
  //     });
  // }
}
