const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Client = db.define('clients', {

    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },   
    name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },

});

module.exports = Client;