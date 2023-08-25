var DataTypes = require("sequelize").DataTypes;
var _categoria = require("./categoria");
var _lista_compras_productos = require("./lista_compras_productos");
var _producto = require("./producto");
var _listacompra = require("./listacompra");
var _supermercado = require("./supermercado");
var _cliente = require("./cliente");

function initModels(sequelize) {
  var categoria = _categoria(sequelize, DataTypes);
  var lista_compras_productos = _lista_compras_productos(sequelize, DataTypes);
  var producto = _producto(sequelize, DataTypes);
  var listacompra = _listacompra(sequelize, DataTypes);
  var supermercado = _supermercado(sequelize, DataTypes);
  var cliente = _cliente(sequelize, DataTypes);

  producto.belongsTo(categoria, { as: "categoria_categorium", foreignKey: "categoria"});
  categoria.hasMany(producto, { as: "producto", foreignKey: "categoria"});
  lista_compras_productos.belongsTo(producto, { as: "producto", foreignKey: "idProducto"});
  producto.hasMany(lista_compras_productos, { as: "lista_compras_productos", foreignKey: "idProducto"});
  lista_compras_productos.belongsTo(listacompra, { as: "list", foreignKey: "idLista"});
  listacompra.hasMany(lista_compras_productos, { as: "lista_compras_productos", foreignKey: "idLista"});
  producto.belongsTo(supermercado, { as: "supermercado", foreignKey: "idSupermercado"});
  supermercado.hasMany(producto, { as: "producto", foreignKey: "idSupermercado"});
  listacompra.belongsTo(cliente, { as: "cliente", foreignKey: "idCliente"});
  cliente.hasMany(listacompra, { as: "listacompra", foreignKey: "idCliente"});

  return {
    categoria,
    lista_compras_productos,
    producto,
    listacompra,
    supermercado,
    cliente,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
