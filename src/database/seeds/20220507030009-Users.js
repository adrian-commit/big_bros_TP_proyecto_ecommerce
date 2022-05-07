'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
   await queryInterface.bulkInsert('users', [
     {
      id: 1,
      first_name: "David",
      last_name: "Lezcano",
      user_name: "Davidcito",
      email: "lezcadav3@gmail.com",
      password: "$2b$10$KCBJ.becXH9ShkBgXO5WhOhlNUjrnvlpq6JWksVSATimjFc2mWHHu",
      telephone: "3624123456",
      birth_day: "1996-04-10",
      address: "casa blanca 123",
      image: 1,
      "is_admin": true
     },
     {
      id: 2, 
      first_name: "Noe",
      last_name: "Galeano",
      user_name: "noegal97",
      email: "noeliagale@hotmail.com",
      password: "$2b$10$B0Ii2F6VTuRapVVhW.erQuxfs9sYRz8OCO6Ty/4xiivDY.Ch4cAx.",
      telephone: "3624012370",
      birth_day: "1997-02-11",
      address: "Julio A Roca 3350",
      image: 2,
      is_admin: false
     }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
   await queryInterface.bulkDelete('users', null, {});
     
  }
};

