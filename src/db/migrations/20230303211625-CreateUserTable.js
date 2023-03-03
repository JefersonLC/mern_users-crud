'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false,
      },
      lastname: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false,
      },
      age: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      email: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false,
        unique: true,
      },
      phone: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  },
};
