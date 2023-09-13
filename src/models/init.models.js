const Users = require("./users.models");
const Roles = require('./roles.model');
const Patio = require('./patios.model');
const Client = require('./clients.model');
const Ingresos = require ('./ingresos.models');
const Salidas = require('./salidas.models');


const initModels = () => {

  Users.belongsTo(Roles,{ as: "user_rol", foreignKey: "role_id"});
  Roles.hasMany(Users, { as: "rol_user", foreignKey: "role_id"});

  Ingresos.belongsTo(Client,{ as: "cliente", foreignKey: "client_id"});
  Client.hasMany(Ingresos, { as: "ingreso_cliente", foreignKey: "client_id"}); 

  Ingresos.belongsTo(Patio,{ as: "otros_patios", foreignKey: "otro_patio"});
  Patio.hasMany(Ingresos, { as: "ingreso_patio", foreignKey: "otro_patio"});

};

module.exports = initModels;

