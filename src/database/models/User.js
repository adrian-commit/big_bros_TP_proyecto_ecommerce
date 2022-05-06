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
            allowNull: false
          },
          last_name: {
           type: DataTypes.STRING,
           allowNull: false
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
           allowNull: false
          },
          birth_day: {
            type: DataTypes.DATE,
            allowNull: false
          },
          address: {
           type: DataTypes.TEXT,
           allowNull: false
          },
          image: {
            type: DataTypes.STRING,
            allowNull: false
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