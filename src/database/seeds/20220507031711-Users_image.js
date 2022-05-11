'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
   await queryInterface.bulkInsert('users_image', [
     {
       id:1,
       url:[
        "avatar-1651815766202-.jpg"
      ],
     },
     {
       id:2,
      url:[
        "avatar-1651800127132-.png"
      ],
     }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('users_image', null, {});
    
  }
};

