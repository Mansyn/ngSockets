'use strict';
/*eslint no-process-env:0*/

// Development specific configuration
// ==================================
module.exports = {

  // MongoDB connection options
  mongo: {
    uri: 'mongodb://pigo:biggio@ds151207.mlab.com:51207/socket-db'
  },

  // Seed database on startup
  seedDB: true

};
