'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'facebook-login-demo',
    environment,
    rootURL: '/',
    locationType: 'auto',
    firebase: {
      apiKey: "AIzaSyCkxFXQX3F8WEZqZTNblZti-1WzlqRsSGo",
      authDomain: "login-demo-23d27.firebaseapp.com",
      databaseURL: "https://login-demo-23d27.firebaseio.com",
      projectId: "login-demo-23d27",
      storageBucket: "login-demo-23d27.appspot.com",
      messagingSenderId: "1082889640894",
      appId: "1:1082889640894:web:7ae52b669268d9b754b7ef",
      measurementId: "G-2JBX96JFKX" 
    },
    torii: {
      sessionServiceName: 'session'
     },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
