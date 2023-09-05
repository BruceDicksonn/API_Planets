'use strict';

const {DataTypes} = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      queryInterface.createTable("caps", {
          id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
          },
          name: {
            type: DataTypes.STRING,
            allowNull: null
          },
          registerNumber: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
          createdAt: { type: DataTypes.DATE },
          updatedAt: { type: DataTypes.DATE }
      });

  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable("caps");
  }
};
