const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('listacompra', {
    PK_idLista: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    idUsuario: {
      type: DataTypes.STRING(10),
      allowNull: true,
      references: {
        model: 'cliente',
        key: 'PK_idUsuario'
      }
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    creation_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'listacompra',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PK_idLista" },
        ]
      },
      {
        name: "idUsuario",
        using: "BTREE",
        fields: [
          { name: "idUsuario" },
        ]
      },
    ]
  });
};
