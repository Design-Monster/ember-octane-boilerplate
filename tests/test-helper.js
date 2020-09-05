import Application from 'ember-octane-boilerplate/app';
import config from 'ember-octane-boilerplate/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
