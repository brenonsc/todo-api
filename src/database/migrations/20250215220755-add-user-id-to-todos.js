'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Todos', 'user_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      },
      onDelete: 'CASCADE'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Todos', 'user_id');
  }
};