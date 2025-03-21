import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'ember-octane-boilerplate/config/environment';
import './font-awesome';

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);
