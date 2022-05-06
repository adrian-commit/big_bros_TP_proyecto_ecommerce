'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('products', {
       id:  {
         type: Sequelize.INTEGER,
         autoIncrement: true,
         primaryKey: true 
       },
       name: {
         type: Sequelize.TEXT,
         allowNull: false
       },
       description: {
         type: Sequelize.TEXT,
         allowNull: false
       },
       price: {
        type: Sequelize.BIGINT,
        allowNull: false
       },
       amount: {
        type: Sequelize.BIGINT,
        allowNull: false
       },
       stock: {
        type: Sequelize.BIGINT,
        allowNull: false
       },
       category: {
        type: Sequelize.INTEGER,
        allowNull: false
       },
       image: {
        type: Sequelize.INTEGER,
        allowNull: true
       }
      });
      
     
  },

  async down (queryInterface, Sequelize) {
    
   await queryInterface.dropTable('products');
  
  }
};
