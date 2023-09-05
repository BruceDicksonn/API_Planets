const { DataTypes } = require('sequelize');
const database = require('../config/database');

const Caps = database.define("caps", {
    name: DataTypes.STRING,
    registerNumber: DataTypes.INTEGER
});

module.exports = Caps;