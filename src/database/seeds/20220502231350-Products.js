'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
   await queryInterface.bulkInsert('products', [
     {
      id: 1,
      name: 'Alfajores de chocolate x12',
      description: 'Descripción de alfajores',
      price: 600,
      amount: 12,
      stock: 78,
      category: 1,
      image: 1
     },
     {
      id: 2,
      name: "Cookies x12",
      description: "Cookies",
      price: 400,
      amount: 12,
      stock: 94,
      category: 4,
      image: 2
     },
     {
      id: 3,
      name: "Pan Dulce 1",
      description: "Pan dulce",
      price: 1200,
      amount: 1,
      stock: 19,
      category: 3,
      image: 3
     },
     {
      id: 4,
      name: "Budin 1",
      description: "Budines",
      price: 900,
      amount: 1,
      stock: 19,
      category: 2,
      image: 4
     },
     {
      id: 5,
      name: 'Alfajores de chocolate x6',
      description: 'Descripción de alfajores',
      price: 300,
      amount: 6,
      stock: 30,
      category: 1,
      image: 5
     },
     {
      id: 6,
      name: "Cookies x6",
      description: "Cookies",
      price: 200,
      amount: 6,
      stock: 50,
      category: 4,
      image: 6
     },
     {
      id: 7,
      name: "Alfacoockies x12",
      description: "Cookies",
      price: 800,
      amount: 12,
      stock: 20,
      category: 1,
      image: 7
    },
    {
      id: 8,
      name: "Alfacoockies x6",
      description: "Cookies",
      price: 400,
      amount: 6,
      stock: 10,
      category: 1,
      image: 8
    }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
   await queryInterface.bulkDelete('products', null, {});
     
  }
};
