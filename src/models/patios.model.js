const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Patio = db.define('patios', {

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

module.exports = Patio;