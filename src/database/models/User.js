module.exports = (sequelize, DataTypes) => {

    let alias = 'User'

    let cols = {
        id:  {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true 
          },
          first_name: {
            type: DataTypes.STRING,
            allowNull: true
          },
          last_name: {
           type: DataTypes.STRING,
           allowNull: true
          },
          user_name: {
           type: DataTypes.STRING,
           allowNull: false
          },
          email: {
            type: DataTypes.STRING,
            allowNull: false
          },
          password: {
           type: DataTypes.TEXT,
           allowNull: false
          },
          telephone: {
           type: DataTypes.BIGINT,
           allowNull: true
          },
          birth_day: {
            type: DataTypes.DATE,
            allowNull: true
          },
          address: {
           type: DataTypes.TEXT,
           allowNull: true  
          },
          image: {
            type: DataTypes.INTEGER,
            allowNull: true
          },
          is_admin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
          }
    }

    let config = {
        tableName: 'users',
        timestamps: false,
    }

    const User = sequelize.define(alias, cols, config);

    User.associate = function(models){
      User.belongsTo(models.User_image, {
        as: 'users_image',
        foreignKey: 'image'
      });
    }

    return User; 

}