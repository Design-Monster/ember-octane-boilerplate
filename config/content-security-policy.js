'use strict';

module.exports = function () {
  return {
    delivery: ['header'],
    enabled: false, //true for production
    failTests: true,
    policy: {
      'connect-src': ["'self'"],
      'default-src': ["'self'"],
      'script-src': ["'self'", "'https://*.fontawesome.com/*/'"],
      'font-src': [
        "'self'",
        "'https://fonts.gstatic.com'",
        "'http://fonts.gstatic.com'",
      ],
      'img-src': ["'self'"],
      'style-src': [
        "'self'",
        'https://fonts.googleapis.com/',
        'http://fonts.googleapis.com/',
        'unsafe-inline',
      ],
      'media-src': null,
    },
    reportOnly: true, //false for production
  };
};
