'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Passagems extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Passagems.belongsTo(models.Voos, {foreignKey: 'voo_id'})
      Passagems.belongsTo(models.Clientes, {foreignKey: 'comprador'})
    }
  }

  
  Passagems.init({
    data_da_compra: DataTypes.DATE,
    comprado: DataTypes.BOOLEAN,
    cadeira: DataTypes.INTEGER,
    comprador: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Passagems',
  });

  return Passagems;
};