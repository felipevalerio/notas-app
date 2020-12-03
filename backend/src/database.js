const Sequelize = require('sequelize');

const db = new Sequelize('banco_teste', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

module.exports = db;