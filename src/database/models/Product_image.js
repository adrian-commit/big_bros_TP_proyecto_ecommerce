module.exports = (sequelize, DataTypes) => {
    
    let alias = 'Product_image';

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
        tableName: 'products_image',
        timestamps: false,
    }

    const Product_image = sequelize.define(alias, cols, config);

    Product_image.associate = function(models){
      Product_image.hasOne(models.Product, {
        as: 'product',
        foreignKey: 'image'
      });
    }
    
    return Product_image;
}


