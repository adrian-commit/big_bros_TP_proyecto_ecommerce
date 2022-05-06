module.exports = (sequelize, DataTypes) => {
    
    let alias = 'Product';

    let cols = {
        id:  {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true 
          },
          name: {
            type: DataTypes.TEXT,
            allowNull: false
          },
          description: {
            type: DataTypes.TEXT,
            allowNull: false
          },
          price: {
            type: DataTypes.BIGINT,
            allowNull: false
          },
          amount: {
           type: DataTypes.BIGINT,
           allowNull: false
          },
          stock: {
           type: DataTypes.BIGINT,
           allowNull: false
          },
          category: {
           type: DataTypes.INTEGER,
           allowNull: true
          },
          image: {
            type: DataTypes.INTEGER,
            allowNull: true
          }   
    }

    let config = {
        tableName: 'products',
        timestamps: false,
    }

    const Product = sequelize.define(alias, cols, config);
    
    Product.associate = function(models){
      Product.belongsTo(models.Product_image, {
        as: 'product_image',
        foreignKey: 'image'
      });
    
      Product.belongsTo(models.Category, {
        as: 'product_category',
        foreignKey: 'category'
      });
    }

    return Product;
}