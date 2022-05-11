'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('users', {
       id:  {
         type: Sequelize.INTEGER,
         autoIncrement: true,
         primaryKey: true 
       },
       first_name: {
         type: Sequelize.STRING,
         allowNull: true
       },
       last_name: {
        type: Sequelize.STRING,
        allowNull: true
       },
       user_name: {
        type: Sequelize.STRING,
        allowNull: false
       },
       email: {
         type: Sequelize.STRING,
         allowNull: false
       },
       password: {
        type: Sequelize.TEXT,
        allowNull: false
       },
       telephone: {
        type: Sequelize.BIGINT,
        allowNull: true
       },
       birth_day: {
         type: Sequelize.DATE,
         allowNull: true
       },
       address: {
        type: Sequelize.TEXT,
        allowNull: true
       },
       image: {
         type: Sequelize.INTEGER,
         allowNull: true
       },
       is_admin: {
         type: Sequelize.BOOLEAN,
         allowNull: false,
         defaultValue: false
       }
      });
      
     
  },

  async down (queryInterface, Sequelize) {
    
   await queryInterface.dropTable('users');
  
  }
};
