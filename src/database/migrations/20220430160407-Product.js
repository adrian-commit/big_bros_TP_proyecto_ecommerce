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
         type: Sequelize.INTEGER,
         allowNull: false
       },
       description: {
         type: Sequelize.TEXT,
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
       image: {
         type: Sequelize.STRING,
         allowNull: false
       },
       category: {
        type: Sequelize.INTEGER,
        allowNull: false
       }
      });
      
     
  },

  async down (queryInterface, Sequelize) {
    
   await queryInterface.dropTable('products');
  
  }
};
