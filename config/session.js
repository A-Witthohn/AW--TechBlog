// config/session.js
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./connection');

const sessionOptions = {
  secret: 'your_session_secret',
  resave: false,
  saveUninitialized: false,
  store: new SequelizeStore({
    db: sequelize,
}),
};

module.exports = session(sessionOptions);