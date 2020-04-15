export function initialize(application) {
  application.inject('controller', 'media', 'service:media');
  application.inject('component', 'media', 'service:media');
  application.inject('template', 'media', 'service:media');
}

export default {name: 'responsive', initialize,
};