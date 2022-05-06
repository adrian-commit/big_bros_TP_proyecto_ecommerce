'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
   await queryInterface.bulkInsert('products_image', [
     {
       id:1,
       url:[
        "product-1647056729033-.jpg"
      ],
     },
     {
       id:2,
      url:[
        "product-1647056797422-.JPG"
      ],
     },
     {
      id:3,
      url: [
        "product-1647056840943-.jpg"
      ],
     },
     {
      id:4,
      url:[
        "product-1647057694880-.jpg"
      ],
     },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('products_image', null, {});
    
  }
};
