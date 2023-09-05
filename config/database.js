const { Sequelize } = require('sequelize')
const config = require('./config');

const database = new Sequelize(config);

module.exports = database;