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
         allowNull: false
       },
       last_name: {
        type: Sequelize.STRING,
        allowNull: false
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
        allowNull: false
       },
       birth_day: {
         type: Sequelize.DATE,
         allowNull: false
       },
       address: {
        type: Sequelize.TEXT,
        allowNull: false
       },
       image: {
         type: Sequelize.STRING,
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
