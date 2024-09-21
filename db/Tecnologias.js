const sequelize = require('./Conecta');
const { Model, DataTypes } = require('sequelize');

const Tecnologias = sequelize.define(
    'tecnologias',
    {
      // Model attributes are defined here
      tecn_tx_nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tecn_nb_categoria: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tecn_tx_status: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
    }
  );

//   (async () => {
//     await sequelize.sync({ force: false });
//     // Code here
//   })();

module.exports = Tecnologias;