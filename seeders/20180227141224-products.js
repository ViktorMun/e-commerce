'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
      { name: 'Handbag', price: 4, createdAt: 'NOW()', updatedAt: 'NOW()' },
      { name: 'Heater', price: 5, createdAt: 'NOW()', updatedAt: 'NOW()' }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
