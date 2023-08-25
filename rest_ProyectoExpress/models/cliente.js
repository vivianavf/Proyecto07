const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cliente', {
    PK_idUsuario: {
      type: DataTypes.STRING(10),
      allowNull: true,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cliente',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PK_idUsuario" },
        ]
      },
    ]
  });
};
