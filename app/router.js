import EmberRouter from '@ember/routing/router';
import config from 'under-construction/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('wrong-url', { path: '/*' }, function () {}); //must be written with function because of nested folder structure in routes
});
