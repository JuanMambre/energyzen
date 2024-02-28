require("dotenv").config();
const { Sequelize } = require("sequelize");
// const UserModel = require('./models/Users');
// const TimeModel = require('./models/Time');
const fs = require("fs");
const path = require("path");

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false,
    native: false,
  });

  const basename = path.basename(__filename);

  const modelDefiners = [];
  
  fs.readdirSync(path.join(__dirname, "/models"))
    .filter(
      (file) =>
        file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    )
    .forEach((file) => {
      modelDefiners.push(require(path.join(__dirname, "/models", file)));
    });
  
  modelDefiners.forEach((model) => model(sequelize));
  let entries = Object.entries(sequelize.models);
  let capsEntries = entries.map((entry) => [
    entry[0][0].toUpperCase() + entry[0].slice(1),
    entry[1],
  ]);
  sequelize.models = Object.fromEntries(capsEntries);

  const User = require('./models/Users')(sequelize, Sequelize);
  const Time = require('./models/Time')(sequelize, Sequelize);
  
  User.hasMany(Time, { foreignKey: 'userId', as: 'appointments' });
  Time.belongsTo(User, { foreignKey: 'userId' });
  
  module.exports = {
    User,
    Time,
    sequelize,
  };
