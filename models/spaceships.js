const { DataTypes } = require('sequelize');
const database = require('../config/database');

const Spaceships = database.define("spaceships", {
    name: DataTypes.STRING,
    capacity: DataTypes.INTEGER
});

module.exports = Spaceships;