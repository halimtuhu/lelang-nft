/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/naming-convention */
'use strict';

const { Sequelize } = require('sequelize');

module.exports = {
    /**
     * @param {import("sequelize").QueryInterface} queryInterface
     * @param {import("sequelize").DataTypes} dataTypes
     */
    up: async (queryInterface, dataTypes) => {
        await queryInterface.createTable('auctions', {
            id: {
                type: dataTypes.BIGINT,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
            },

            token_type: {
                type: dataTypes.ENUM(['erc721', 'erc1155']),
                allowNull: false,
            },

            token_id: {
                type: dataTypes.BIGINT,
                allowNull: false,
            },

            token_address: {
                type: dataTypes.STRING,
                allowNull: false,
            },

            seller_address: {
                type: dataTypes.STRING,
                allowNull: false,
            },

            starting_price: {
                type: dataTypes.BIGINT,
                allowNull: false,
            },

            bid_increment: {
                type: dataTypes.BIGINT,
                allowNull: false,
            },

            reserved_price: {
                type: dataTypes.BIGINT,
                allowNull: false,
            },

            started_at: {
                type: dataTypes.DATE,
                allowNull: false,
            },

            ended_at: {
                type: dataTypes.DATE,
                allowNull: false,
            },

            closed_at: {
                type: dataTypes.DATE,
                allowNull: true,
                defaultValue: null,
            },

            claimed_at: {
                type: dataTypes.DATE,
                allowNull: true,
                defaultValue: null,
            },

            created_at: {
                type: dataTypes.DATE,
                allowNull: true,
                defaultValue: Sequelize.fn('NOW'),
            },

            updated_at: {
                type: dataTypes.DATE,
                allowNull: true,
                defaultValue: Sequelize.fn('NOW'),
            },

            deleted_at: {
                type: dataTypes.DATE,
                allowNull: true,
                defaultValue: null,
            },
        });
    },

    /**
     * @param {import("sequelize").QueryInterface} queryInterface
     */
    down: async (queryInterface) => {
        queryInterface.dropTable('auctions');
    },
};
