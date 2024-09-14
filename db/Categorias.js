const sequelize = require('./Conecta');
const { Model, DataTypes } = require('sequelize');

const Categorias = sequelize.define(
    'categorias',
    {
      // Model attributes are defined here
      cate_tx_nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cate_tx_status: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
    }
  );

  module.exports = Categorias;