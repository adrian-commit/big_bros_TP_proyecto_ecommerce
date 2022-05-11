'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
   await queryInterface.bulkInsert('categories', [
     {
       id: 1,
       name:'Alfajores',
     },
     {
       id: 2,
       name:'Budines',
     },
     {
       id: 3,
       name:'Pan Dulce',
     },
     {
       id: 4,
       name:'Cookies',
     },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('categories', null, {});
    
  }
};
