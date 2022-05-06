'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
   await queryInterface.bulkInsert('products', [
     {
      id: 1,
      name: 'Alfajores',
      description: 'Descripción de alfajores',
      price: 600,
      amount: 12,
      stock: 78,
      category: 1,
      image: 1
     },
     {
      id: 2,
      name: "Cookies",
      description: "Cookies",
      price: 400,
      amount: 12,
      stock: 94,
      category: 4,
      image: 2
     },
     {
      id: 3,
      name: "Pan Dulce",
      description: "Pan dulce",
      price: 1200,
      amount: 1,
      stock: 19,
      category: 3,
      image: 3
     },
     {
      id: 4,
      name: "Budines",
      description: "Budines",
      price: 900,
      amount: 1,
      stock: 19,
      category: 2,
      image: 4
     },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
   await queryInterface.bulkDelete('products', null, {});
     
  }
};
