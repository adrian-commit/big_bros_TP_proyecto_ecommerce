module.exports = (sequelize, DataTypes) => {
    
    let alias = 'Comment';

    let cols = {
        id:  {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true 
          },
          title:  {
            type: DataTypes.TEXT,
            allowNull: false
          },
          comment:  {
            type: DataTypes.TEXT,
            allowNull: false
          },
          userId: {
            type: DataTypes.INTEGER,
            allowNull:false
          }
    }

    let config = {
        tableName: 'comments',
        timestamps: false,
    }

    const Comment = sequelize.define(alias, cols, config);

    Comment.associate = function(models){
        Comment.belongsTo(models.User, {
        as: 'user',
        foreignKey: 'userId'
      });
    }

    return Comment;
}