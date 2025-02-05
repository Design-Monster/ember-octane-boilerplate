import Route from '@ember/routing/route';
import type RouterService from '@ember/routing/router-service';
type Transition = ReturnType<RouterService['transitionTo']>;
// import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  // @service media;
}
