// Types for compiled templates
declare module 'ember-octane-boilerplate/templates/*' {
  import { TemplateFactory } from 'ember-cli-htmlbars';

  const tmpl: TemplateFactory;
  export default tmpl;
}
