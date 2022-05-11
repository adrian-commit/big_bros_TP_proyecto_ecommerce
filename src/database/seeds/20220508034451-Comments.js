'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
   await queryInterface.bulkInsert('comments', [
     {
       id:1,
       title:"probando titulo",
       comment:"mi primer comentario",
       userId: 2
     },
     {
      id:2,
      title:"probando titulo",
      comment:"mi primer comentario",
      userId: 2
    }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('comments', null, {});
    
  }
};