'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Voos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Voos.hasMany(models.Passagem, {foreignKey: 'voo_id'})
    }
  }
  Voos.init({
    horario_de_saida: DataTypes.DATE,
    horario_de_chegada: DataTypes.DATE,
    aeroporto_de_origem: DataTypes.STRING,
    aeroporto_de_destino: DataTypes.STRING,
    quantidade_de_assentos: DataTypes.INTEGER,
    preco: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Voos',
  });
  return Voos;
};