import EmberRouter from '@ember/routing/router';
import config from 'ember-octane-boilerplate/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('example', function () {}); //must be written this way because of nested folder structure in routes
});