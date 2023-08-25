var DataTypes = require("sequelize").DataTypes;
var _usuario = require("./usuario");

function initModels(sequelize) {
  var usuario = _usuario(sequelize, DataTypes);


  return {
    usuario,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
