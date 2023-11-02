const Sequelize = require("sequelize");
const config = require("../config/config.json")["development"];

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Customer = require("./Customer")(sequelize, Sequelize);
db.Orders = require("./Orders")(sequelize, Sequelize);

db.Customer.hasMany(db.Orders, {
  foreignKey: "custid",
  //sourceKey: "custid";
})
db.Orders.belongsTo(db.Customer, {
  //onDelete: "cascade",
  foreignKey: "custid",
  //targetKey: "id"
})

module.exports = db;