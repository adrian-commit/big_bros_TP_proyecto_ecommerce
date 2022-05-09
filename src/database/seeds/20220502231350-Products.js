'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
   await queryInterface.bulkInsert('products', [
     {
      id: 1,
      name: 'Alfajores de chocolate x12',
      description: 'Clásicos alfajores marplatenses con generoso relleno de dulce de leche.',
      price: 600,
      amount: 12,
      stock: 78,
      category: 1,
      image: 1
     },
     {
      id: 2,
      name: "Cookies x12",
      description: "Clásicas cookies con chips de chocolate.",
      price: 400,
      amount: 12,
      stock: 94,
      category: 4,
      image: 2
     },
     {
      id: 3,
      name: "Pan Dulce 1",
      description: "Nuestro pan dulce BIG BROS relleno de chips de chocolate, relleno de mucho dulce de leche cubierto de chocolate, copos de dulce de leche y por supuesto alfajores.",
      price: 1200,
      amount: 1,
      stock: 19,
      category: 3,
      image: 3
     },
     {
      id: 4,
      name: "Budin 1",
      description: "Budín de naranja, relleno con frutas abrillantadas, bañado con glasé y decorado con almendras, castañas, nueces y frutas abrillantadas",
      price: 900,
      amount: 1,
      stock: 19,
      category: 2,
      image: 4
     },
     {
      id: 5,
      name: 'Alfajores de chocolate x6',
      description: 'Clásicos alfajores marplatenses con generoso relleno de dulce de leche',
      price: 300,
      amount: 6,
      stock: 30,
      category: 1,
      image: 5
     },
     {
      id: 6,
      name: "Cookies x6",
      description: "Clásicas cookies con chips de chocolate.",
      price: 200,
      amount: 6,
      stock: 50,
      category: 4,
      image: 6
     },
     {
      id: 7,
      name: "Alfacoockies x12",
      description: "Alfajor de cookies con chips de chocolate relleno del mejor dulce de leches",
      price: 800,
      amount: 12,
      stock: 20,
      category: 1,
      image: 7
    },
    {
      id: 8,
      name: "Alfacoockies x6",
      description: "Alfajor de cookies con chips de chocolate relleno del mejor dulce de leche",
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
