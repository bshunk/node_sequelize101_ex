'use strict';
const { shows } = require('./data/shows');

module.exports = {
  up: function (queryinterface, Sequelize) {
    return queryInterface.bulkInsert('Shows', shows, {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Shows', null, {});
  }
};