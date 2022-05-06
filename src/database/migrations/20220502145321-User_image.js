'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users_image', {
      id:  {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true 
      },
      url:  {
        type: Sequelize.STRING,
        allowNull: false
      }
    }
  )},

  async down (queryInterface, Sequelize) {
    
   await queryInterface.dropTable('users_image')
     
  }
};
