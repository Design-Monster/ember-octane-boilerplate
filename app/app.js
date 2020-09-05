import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'ember-octane-boilerplate/config/environment';

export default class App extends Application {
	modulePrefix = config.modulePrefix;

	Resolver = Resolver.extend({
		/** Extend the resolver to allow routes to be within the routes directory.*/
		adjustRoute(parsedName, type) {
			parsedName.fullNameWithoutType = 'routes/' + parsedName.fullNameWithoutType;
			parsedName.fullName = type + ':' + parsedName.fullNameWithoutType;
			return this;
		},
		resolveRoute(parsedName) {
			return this._super(parsedName) || this.adjustRoute(parsedName, 'route')._super(parsedName);
		},
		resolveTemplate(parsedName) {
			return this._super(parsedName) || this.adjustRoute(parsedName, 'template')._super(parsedName);
		},
		resolveController(parsedName) {
			return this._super(parsedName) || this.adjustRoute(parsedName, 'controller')._super(parsedName);
		},
		resolveAdapter(parsedName) {
			return this._super(parsedName) || this.adjustRoute(parsedName, 'adapter')._super(parsedName);
		},
		resolveSerializer(parsedName) {
			return this._super(parsedName) || this.adjustRoute(parsedName, 'serializer')._super(parsedName);
		},
	});
}

loadInitializers(App, config.modulePrefix);
