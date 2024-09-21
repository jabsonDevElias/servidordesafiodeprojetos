const sequelize = require('./Conecta');
const { Model, DataTypes } = require('sequelize');

const Tecnologias = sequelize.define(
    'Projetos',
    {
      proj_tx_nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      proj_nb_frontEnd: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      proj_nb_backEnd: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      proj_nb_bancoDados: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      proj_nb_devOps: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      tecn_tx_status: {
        type: DataTypes.STRING,
      },
    }
  );

//   (async () => {
//     await sequelize.sync({ force: true });
//     // Code here
//   })();

module.exports = Tecnologias;