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
     {
      id:5,
      url:[
        "product-1651976533884-.JPG"
      ],
     },
     {
      id:6,
      url:[
        "product-1651976669516-.jpg"
      ],
     },
     {
      id:7,
      url:[
        "product-1651976720814-.JPG"
      ],
     },
     {
      id:8,
      url:[
        "product-1651976763978-.JPG"
      ],
     }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('products_image', null, {});
    
  }
};
