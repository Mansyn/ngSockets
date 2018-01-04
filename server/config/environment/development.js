'use strict';
/*eslint no-process-env:0*/

// Development specific configuration
// ==================================
module.exports = {

  // MongoDB connection options
  mongo: {
    uri: 'mongodb://mean-db:jxVtb3R5PcmfXIYQ0ANXSXM25D9PI7C2MGFVlmZIluz9uw9reHXFOkbpyl4bXm0FGg6pd6OTk8DIo8EMoFBONQ==@mean-db.documents.azure.com:10255/?ssl=true&replicaSet=globaldb'
  },

  // Seed database on startup
  seedDB: true

};
