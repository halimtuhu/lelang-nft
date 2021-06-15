'use strict';

module.exports = {
    /**
     * @param {import("sequelize").QueryInterface} queryInterface
     * @param {import("sequelize").DataTypes} sequelize
     */
    up: async (queryInterface, sequelize) => {
        queryInterface.addColumn('auctions', 'signature', sequelize.STRING);
    },

    /**
     * @param {import("sequelize").QueryInterface} queryInterface
     */
    down: async (queryInterface) => {
        queryInterface.removeColumn('auctions', 'signature');
    },
};
