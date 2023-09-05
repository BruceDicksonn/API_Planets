const { DataTypes } = require('sequelize');
const database = require('../config/database');

const Planets = database.define("planets", {
    name: DataTypes.STRING,
    position: DataTypes.INTEGER
});

module.exports = Planets;