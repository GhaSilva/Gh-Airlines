'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Passagem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Passagem.belongsTo(model.Voos, {foreignKey: 'voo_id'})
      Passagem.belongsTo(model.Clientes, {foreignKey: 'comprador_id'})
    }
  }
  Passagem.init({
    data_da_compra: DataTypes.DATE,
    comprado: DataTypes.BOOLEAN,
    cadeiras: DataTypes.INTEGER,
    comprador: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Passagem',
  });
  return Passagem;
};