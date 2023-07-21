const Sequelize = require('sequelize');
const config = require('./config');

// Create a new Sequelize instance
const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: config.development.dialect,
    // Other options like logging, pool, etc. can be added here.
  }
);

module.exports = sequelize;