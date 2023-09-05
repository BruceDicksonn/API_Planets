'use strict';

const { DataTypes } = require('sequelize');
const database = require('../config/database');

// const queryInterface = database.getQueryInterface();
// usamos a variavel acima somente para auxiliar na estruturacao, para que a criacao da table possa ser refletida no db devemos usar
// a queryInterface disponivel como parâmetro nos metodos abaixo 

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    queryInterface.createTable("satelites", {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
        },
        serial_number: {
           type: DataTypes.INTEGER,
           allowNull: false 
        },
        planetId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: { model: "planets", key: "id" },
          onUpdate: "cascade",
          onDelete: "cascade"
        },
        createdAt: { type: DataTypes.DATE },
        updatedAt: { type: DataTypes.DATE }
    });  

  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable("satelites")
  }
};
