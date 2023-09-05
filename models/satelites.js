const { DataTypes } = require('sequelize');
const database = require('../config/database');

const Satelites = database.define("satelites", {
    name: DataTypes.STRING,
    serial_number: DataTypes.INTEGER,
    planetId: DataTypes.INTEGER
});

module.exports = Satelites;