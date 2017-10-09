'use strict';
const { users } = require('./data/users');

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryinterface.bulkInsert('Users', users, {})
  },

  down: function (queryInterface, Sequelize) {
    return queryinterface.bulkDelete('Users', null, {})
  }
};