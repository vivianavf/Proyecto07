const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('producto', {
    PK_idProducto: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    categoria: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'categoria',
        key: 'PK_idCategoria'
      }
    },
    precio: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: true
    },
    codigoBarras: {
      type: DataTypes.CHAR(13),
      allowNull: true
    },
    idSupermercado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'supermercado',
        key: 'PK_idSupermercado'
      }
    }
  }, {
    sequelize,
    tableName: 'producto',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PK_idProducto" },
        ]
      },
      {
        name: "idSupermercado",
        using: "BTREE",
        fields: [
          { name: "idSupermercado" },
        ]
      },
      {
        name: "categoria",
        using: "BTREE",
        fields: [
          { name: "categoria" },
        ]
      },
    ]
  });
};
