'use strict';
module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};
