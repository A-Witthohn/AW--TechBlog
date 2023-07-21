// db/seeds/userData.js
const { User } = require('../models');

const userData = require('./userData.json');

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;