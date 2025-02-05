import Route from '@ember/routing/route';
import type RouterService from '@ember/routing/router-service';
type Transition = ReturnType<RouterService['transitionTo']>;

export default class WrongUrlRoute extends Route {}
