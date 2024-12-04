// models/supplier.js
const Sequelize = require('sequelize');
module.exports = (sequelize) => {
  const Supplier = sequelize.define('Supplier', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: false
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

  Supplier.associate = (models) => {
    Supplier.hasMany(models.Product, {
      foreignKey: 'supplierId',
      as: 'products'
    });
  };

  return Supplier;
};