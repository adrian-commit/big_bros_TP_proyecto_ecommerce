'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('comments', {
      id:  {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true 
      },
      title:  {
        type: Sequelize.TEXT,
        allowNull: false
      },
      comment:  {
        type: Sequelize.TEXT,
        allowNull: false
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull:false
      }
    }
  )},

  async down (queryInterface, Sequelize) {
    
   await queryInterface.dropTable('comments')
     
  }
};

