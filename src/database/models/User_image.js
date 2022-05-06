module.exports = (sequelize, DataTypes) => {
    
    let alias = 'User_image';

    let cols = {
        id:  {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true 
          },
          url: {
            type: DataTypes.STRING,
            allowNull: false
          }
    }

    let config = {
        tableName: 'users_image',
        timestamps: false,
    }

    const User_image = sequelize.define(alias, cols, config);

    User_image.associate = function(models){
      User_image.belongsTo(models.User, {
        as: 'users',
        foreignKey: 'image'
      });
    }

    
    return User_image;
}