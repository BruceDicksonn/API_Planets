'use strict';

const {DataTypes} = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      queryInterface.createTable("capSpaceships", {
          id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
          },
          capID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: { model: "caps", key: "id" },
            onUpdate: "CASCADE",
            onDelete: "CASCADE"
          },
          spaceshipID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: { model: "spaceships", key: "id" },
            onUpdate: "CASCADE",
            onDelete: "CASCADE"
          },
          createdAt: { type: DataTypes.DATE },
          updatedAt: { type: DataTypes.DATE }
      });

  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable("capSpaceships");
  }
};