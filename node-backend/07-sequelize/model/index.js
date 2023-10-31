const Sequelize = require("sequelize");
const config = require("../config/config.json")["development"];

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
//sequelize 객체를 만든다.

db.sequelize = sequelize;
db.Sequelize = Sequelize;
//db = {sequalize: sequelize, Sequelize:Sequelize}

db.Visitor = require("./Visitor")(sequelize, Sequelize);
// db.Visitor에는 sequelize로 Visitor 테이블을 정의한 객체를 담음

module.exports = db;